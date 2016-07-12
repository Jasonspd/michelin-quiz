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

		function checkScore(){
			view.activeQuestions = 0;
			quizFactory.markQuiz(selectedAnswers);
			quizFactory.changeState("quiz", false);
			quizFactory.changeState("results", true);
		}

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