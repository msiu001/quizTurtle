(function(){
 
    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);
 
    /*This way is very used ($scope) but in huge application 
    //when you call myData from the html file should be a problem
    //because there should be another mydata in another function or in the
    //html file, that's why I use this. in the "same function" below  
    function ListController($scope){
        // List Controller Logic
        $scope.myData = "hello my world";
       
    }
    */

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        // List Controller Logic (view module)
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.myData = DataService.turtlesData;
        vm.activeTurtle= {};
        vm.changeActiveTurtle = changeActiveTurtle;

        //adding the Search property to be used in the ng-model
        vm.search = "";

        //activate quiz
        vm.activateQuiz = activateQuiz;

        //function to activate quiz
        function activateQuiz(){
           quizMetrics.changeState(true);
        }

        //function to active any turtle
        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }       
    }

        
})();