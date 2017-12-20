(function(){
 
    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

        ResultsController.$inject = ['quizMetrics', 'DataService'];

        function ResultsController(quizMetrics, DataService){
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.DataService = DataService;
            vm.getAnswerClass = getAnswerClass;
            vm.setActiveQuestion = setActiveQuestion;
            vm.calculatePercentage = calculatePercentage;
            vm.reset = reset;
            vm.activeQuestion = 0;
            var scorePercentage = 0;


            function getAnswerClass(index){
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                }
                else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }
            }


            function setActiveQuestion(index) {
                vm.activeQuestion =index;  
            }


            function calculatePercentage(){
                var numberOfCorrectAns = 0;

                for(var i =0; i< DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].correct === true){
                        numberOfCorrectAns++;
                    }
                }

                scorePercentage = numberOfCorrectAns / DataService.quizQuestions.length * 100;
                return scorePercentage;


                //or only scorePercentage = quizMetrics.numberOfCorrectAnswers / DataService.quizQuestions.length *100;
            }


            function reset(){
                quizMetrics.changeState("results", false);
                quizMetrics.changeState("quiz", false);
                

                for(var i= 0; i < DataService.quizQuestions.length ; i++){
                    DataService.quizQuestions[i].selected = null;
                    DataService.quizQuestions[i].correct = null;
                }

                quizMetrics.numberOfCorrectAnswers = 0;
            }


        }


         


})();