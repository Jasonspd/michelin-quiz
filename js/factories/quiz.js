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

		// Change from quiz to results page
		function changeState(selection, state){
			
			if(selection === "quiz"){
				quizObj.quizActive = state;
			} else if(selection === "results"){
				quizObj.resultsActive = state;
			} else{
				return false;
			}

		}

		// Checks array of selected answers with correct answers and sums up score
		function markQuiz(selected){
			quizObj.correctAnswers = dataService.correctAnswers;
			for(var i = 0; i<selected.length; i++){
				if(selected[i] === dataService.correctAnswers[i]){
					quizObj.numCorrect++;
				} else{
					//Do nothing
				}
			}
		}
	}

})();