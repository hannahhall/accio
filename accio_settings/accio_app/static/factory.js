angular.module('Accio_app')
.factory('DataFactory', ($http) => {
  const rootUrl = 'http://localhost:8000';
  return {
    registerUser: (userData) => {
      console.log(userData)
      return $http({
    		url: `${rootUrl}/register/`,
	    	method: "POST",
	    	data: {
	    		'first_name': userData.first_name,
	    		'last_name': userData.last_name,
	    		'username': userData.username,
	    		'email': userData.email,
	    		'password': userData.password,
	    	}
    	}).then((res) => {
          return res.data;
        })
    },
    loginUser: (userData) => {
      return $http({
        url: `${rootUrl}/login/`,
        method: "POST",
        data: {
          'username': userData.username,
          'password': userData.password
        }
      }).then((res) => {
          return res.data;
        })
    }
  }
})