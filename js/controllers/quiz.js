(function(){
 
    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);
 
    /*This way is very used ($scope) but in huge application 
    //when you call myData from the html file should be a problem
    //because there should be another mydata in another function or in the
    //html file, that's why I use this. in the "same function" below  

    function QuizController($scope){
        // Quiz Controller Logic
        $scope.myData = "hello my world";
       
    }
    */

    QuizController.$inject = ['quizMetrics', 'DataService'];
    

    
    function QuizController(quizMetrics, DataService){
        // List Controller Logic
        var vm = this;
        vm.quizMetrics = quizMetrics;  
        vm.DataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.activeQuestion = 0;  

        function questionAnswered(){
            
        }   
    }



        
})();