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
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.activeQuestion = 0;  

        var numQuestionAnswered = 0;

        function setActiveQuestion(index) {
          if (index === undefined) {
            var breakOut = false;
            var quizLength = DataService.quizQuestions.length - 1;

            while (!breakOut) {
              vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;

              if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
                breakOut = true;
              }
            }
          }
          else{
              vm.activeQuestion =index;
          }
        }

        function questionAnswered(){
            var quizLength = DataService.quizQuestions.length;

            if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                numQuestionAnswered++;

                if(numQuestionAnswered >= quizLength){
                    //finalise quizCtrl
                }
            }
            vm.setActiveQuestion();
            
        }

        function selectAnswer(index){
            DataService.quizQuestions[vm.activeQuestion].selected = index;
            
        }  

     
    }



        
})();