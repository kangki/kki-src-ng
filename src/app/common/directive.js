define(['app'],function(app){

app.directive('srcHeader',[function(){
	return {
		templateUrl : './view/common/header.tpl'
	};
}]);

app.directive('srcFooter',[function(){
	return {
		templateUrl : './view/common/footer.tpl'
	};
}]);

});

