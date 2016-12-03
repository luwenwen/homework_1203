angular.module("myApp",[])
.controller("democon",["$scope",function($scope){
	$scope.workers=[
		{
			FirstName:"FANG",
			LastName:"vane",
			Salary:12333.50,
			Salary2:12333.5,
			Birthday:0480574804538

		},
		{
			FirstName:"SARA",
			LastName:"rose",
			Salary:232334.23,
			Birthday:0780574804538

		},
		{
			FirstName:"AAM",
			LastName:"hot",
			Salary:66880.50,
			Birthday:0280574804538

		},
		{
			FirstName:"MARK",
			LastName:"bear",
			Salary:68000.00,
			Birthday:780534684538

		}
	];

	$scope.value = '';

	//控制ng-show和ng-hide显示隐藏
    $scope.first = true;
    $scope.last = true;
    $scope.bir = true;

    //控制ng-if
    $scope.i1 = false;
    $scope.i2 = false;
    $scope.i3 = false;

    //点击firstname
	$scope.firstClick=function(){
		$scope.i1 = true;
        $scope.i2 = false;
        $scope.i3 = false;
        if($scope.value == 'FirstName'){
            $scope.value = '-FirstName';
            $scope.first = false;
        }else{
            $scope.value = 'FirstName';
            $scope.first = true;
        }
	}
	 //点击lastname
	$scope.lastClick=function(){
		$scope.i2 = true;
        $scope.i1 = false;
        $scope.i3 = false;
        if($scope.value == 'LastName'){
            $scope.value = '-LastName';
            $scope.last = false;
        }else{
            $scope.value = 'LastName';
            $scope.last = true;
        }
	}
	 //点击birthday
	$scope.birClick=function(){
		$scope.i3 = true;
        $scope.i1 = false;
        $scope.i2 = false;
        if($scope.value == 'Birthday'){
            $scope.value = '-Birthday';
            $scope.bir = false;
        }else{
            $scope.value = 'Birthday';
            $scope.bir = true;
        }
	}
}])