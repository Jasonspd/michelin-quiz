(function(){
	angular.module("michelinQuiz").controller("resultsCtrl", ResultsController);

	ResultsController.$inject = ['quizFactory', 'dataService'];

	function ResultsController(quizFactory, dataService) {
		var view = this;

		view.retryQuiz = retryQuiz;
		view.dataService = dataService;
		view.quizFactory = quizFactory;

		//Resets score and reset quiz
		function retryQuiz() {
			quizFactory.changeState("results", false);
			quizFactory.numCorrect = 0;
		}
	}

})();