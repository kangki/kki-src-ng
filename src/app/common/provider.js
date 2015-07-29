define(['app'],function(app){

app.provider('routeResolver', function (){
    this.$get = function(){ return this; };
    this.resolve = function(data){
        var o = {};
        o.templateUrl = './view' + data.path + '/' + data.name + '.tpl';
        o.controller = data.name + 'Controller';
        o.controllerAs = data.as || 'vm';
        o.resolve = {};

        o.resolve.load = ['$q', '$rootScope', function ($q, $rootScope){
            var paths = {};
            var deps = [o.controller];
            paths[o.controller] = '.' + data.path + '/' + data.name;

            var defer = $q.defer();
            require.config({paths : paths});
            require(deps, function(){
                defer.resolve();
                $rootScope.$apply();
            });
            return defer.promise;
        }];
        return o;
    };
});

});
