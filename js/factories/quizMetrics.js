(function(){
 
    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);
        
        QuizMetrics.$inject = ['DataService'];
    
        function QuizMetrics(DataService){
            var quizObj = {
                quizActive: false,
                resultActive: false,
                changeState: changeState,
                correctAnswers: [],
                markQuiz: markQuiz,
                numberOfCorrectAnswer: 0
            };
            return quizObj;

            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }
                else if(metric === "results"){
                    quizObj.resultActive = state;
                }
                else{
                    return false;
                }
            }
        }

        
        function markQuiz(){
            quizObj.correctAnswers = DataService.correctAnswers;
            for(var i = 0; i < DataService.quizQuestions.length; i++){
                if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                    DataService.quizQuestions[i].correct = true;
                    quizObj.numberOfCorrectAnswer++;
                }
                else{
                     DataService.quizQuestions[i].correct = false;
                }
            }
        }


        
})();