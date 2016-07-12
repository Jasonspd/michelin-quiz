(function(){
	angular.module("michelinQuiz").factory("quizFactory", QuizFactory);

	QuizFactory.$inject = ['dataService'];

	function QuizFactory(dataService) {
		var quizObj = {
			quizActive: false,
			resultsActive: false,
			changeState: changeState,
			correctAnswers: [],
			markQuiz: markQuiz,
			numCorrect: 0
		}
		
		return quizObj;

		function changeState(selection, state){
			
			if(selection === "quiz"){
				quizObj.quizActive = state;
			} else if(selection === "results"){
				quizObj.resultsActive = state;
			} else{
				return false;
			}

		}

		function markQuiz(results){
			quizObj.correctAnswers = dataService.correctAnswers;
			for(var i = 0; i<results.length; i++){
				if(results[i] === dataService.correctAnswers[i]){
					quizObj.numCorrect++;
				} else{
				}
			}
		}
	}

})();