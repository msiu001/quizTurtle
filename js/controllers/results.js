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
            vm.checkResults = checkResults;
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


            //check how well the user went in the quiz
            function checkResults(){
                
                if(calculatePercentage() === 100){
                    return "Excelent!!!, Great Performance.";
                }
                else if(calculatePercentage() >= 70){
                    return "Good Job!";
                }
                else if(calculatePercentage() >= 30){
                    return "Nice Try!, You can do it better.";
                }
                else{
                    return "You need to learn more about turtles."
                }
                /*
                
                var perfectScore = true;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].correct === true){
                        perfectScore = perfectScore &&  DataService.quizQuestions[i].correct;
                    }
                    else{
                        perfectScore = false;
                    }
                }
                return perfectScore;*/
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