require(["angular",
         "app",
         "configuration",
         "service/all",
         "filter/all",
         "directive/all",
         "controller/all",
         "routes"], function (angular) {
  "use strict";
  angular.bootstrap(document, ["movieDatabase"]);
});