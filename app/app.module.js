var app = angular.module('dsiApp', []);

// Angular controller code
app.controller('angularCtrl', ['$scope','$http', function ($scope, $http, $rootScope, $timeout) {
	$scope.run = true;
	$scope.end = false;

	// Images 
	$scope.imgHeadMsg1 = "./assets/img/src/imgHeadMsg1.png";
	$scope.imgBodyMsg1 = "./assets/img/src/imgBodyMsg1.png";
	$scope.imgHeadMsg2 = "./assets/img/src/imgHeadMsg2.png";
	$scope.imgBodyMsg2 = "./assets/img/src/imgBodyMsg2.png";
	$scope.imgHeadMsg3 = "./assets/img/src/imgHeadMsg3.png";
	$scope.imgBodyMsg3 = "./assets/img/src/imgBodyMsg3.png";
	// logo
	$scope.imgLogo1 = "./assets/img/src/imgLogo1.png";
	$scope.imgLogo2 = "./assets/img/src/imgLogo2.png";
	$scope.imgLogo3 = "./assets/img/src/imgLogo3.png";
	// Congrats Image
	$scope.imgFelicitations = "./assets/img/src/imgFelicitations.png";

	// Declare variables
	$scope.nom = "";
	$scope.prenom = "";
	$scope.filiale = "";
	$scope.msg1 = "";
	$scope.msg2 = "";
	$scope.msg3 = "";		

	$scope.init = function(){
		$scope.run = true;
		$scope.end = false;
	};

	// Save data in db - send to php
	$scope.submit = function(nom, prenom, msg1, msg2, msg3){
		if(nom == '' || prenom == ''){
			$scope.resultat = "Erreur !";
			$scope.alert = "Champs obligatoires : Nom et Prénom.";
		}else{
			data = { 'nom': nom, 'prenom': prenom, 'msg1': msg1, 'msg2': msg2, 'msg3': msg3 };
			$http.post('app/data-base/save.php', data).then(function(response){
			$scope.resultat = "Vos messages sont enregistrés.";
			$scope.alert = "Merci "+prenom+" !";
			});
		}
		// Clear variables
		$scope.nom = "";
		$scope.prenom = "";
		$scope.filiale = "";
		$scope.msg1 = "";
		$scope.msg2 = "";
		$scope.msg3 = "";
	};
}])
