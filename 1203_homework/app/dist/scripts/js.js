angular.module("myApp",[]).controller("democon",["$scope",function(a){a.workers=[{FirstName:"FANG",LastName:"vane",Salary:12333.5,Salary2:12333.5,Birthday:480574804538},{FirstName:"SARA",LastName:"rose",Salary:232334.23,Birthday:780574804538},{FirstName:"AAM",LastName:"hot",Salary:66880.5,Birthday:280574804538},{FirstName:"MARK",LastName:"bear",Salary:68e3,Birthday:780534684538}],a.value="",a.first=!0,a.last=!0,a.bir=!0,a.i1=!1,a.i2=!1,a.i3=!1,a.firstClick=function(){a.i1=!0,a.i2=!1,a.i3=!1,"FirstName"==a.value?(a.value="-FirstName",a.first=!1):(a.value="FirstName",a.first=!0)},a.lastClick=function(){a.i2=!0,a.i1=!1,a.i3=!1,"LastName"==a.value?(a.value="-LastName",a.last=!1):(a.value="LastName",a.last=!0)},a.birClick=function(){a.i3=!0,a.i1=!1,a.i2=!1,"Birthday"==a.value?(a.value="-Birthday",a.bir=!1):(a.value="Birthday",a.bir=!0)}}]);