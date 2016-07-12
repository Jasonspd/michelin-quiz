(function(){
	angular.module("michelinQuiz").controller("startCtrl", StartController);

	StartController.$inject = ["quizFactory", "dataService"];

	function StartController(quizFactory, dataService) {
		var view = this;

		view.quizFactory = quizFactory;
		view.data = dataService.quizData;
		view.activateQuiz = activateQuiz;

		//Start the quiz
		function activateQuiz(){
			quizFactory.changeState("quiz", true);
			quizFactory.activeQuestions = 0;
		}
	}

})();