(function(){
	angular.module("michelinQuiz").controller("quizCtrl", QuizController);

	QuizController.$inject = ["quizFactory", "dataService"];

	function QuizController(quizFactory, dataService) {
		var view = this;

		view.quizFactory = quizFactory;
		view.dataService = dataService;
		view.activeQuestions = 0;
		view.questionAnswered = questionAnswered;

		var numAnswered = 0;
		var selectedAnswers = [];

		//Passes the answers for marking, resetting the selected answers and move to results page
		function checkScore(){
			view.activeQuestions = 0;
			quizFactory.markQuiz(selectedAnswers);
			selectedAnswers.length = 0;
			quizFactory.changeState("quiz", false);
			quizFactory.changeState("results", true);
		}

		//Put answers into an array
		function questionAnswered(index) {

			selectedAnswers.push(index);

			var len = dataService.quizData.length;

			view.activeQuestions++;
			if(view.activeQuestions >= len){
				console.log("finish quiz");
				checkScore();
			}
		}
	}



})();