app.controller('loginCtrl1', function($scope,$state,$http){

	$scope.login = function(){
$http({
url:'/login',
method:'GET',
params :{
	name:$scope.uname,
	pass:$scope.upassword
}
}).then(function(err,response){
console.log(">>>>> response", response)
})
}
});
