(function(){
	angular.module("michelinQuiz").factory("dataService", DataService);

	function DataService() {
		var dataObj = {
			quizData: quizData,
			correctAnswers: correctAnswers
		};

		return dataObj;
	}

	var correctAnswers = [2,3,2,1,0,2,2,3,2,0];

	var quizData = [
	{
	"question" : "Anthony Reid set the fastest time at the Goodwood Festival of Speed’s hill climb event this year, but what was he driving?",
	"option_A" : "Lexus",
	"option_B" : "Porsche",
	"option_C" : "Noble",
	"option_D" : "Aston Martin",
	"options" : ["Q1_A.png", "Q1_B.png", "Q1_C.png", "Q1_D.png"],
	"answer"  : 3
	},

	{
	"question" : "The Porsche 911 GT3 Cup uses a 3.8-litre boxer engine to compete in the worldwide Carrera Cups. How much power does the 991-generation racecar produce?",
	"option_A" : "160 HP",
	"option_B" : "260 HP",
	"option_C" : "360 HP",
	"option_D" : "460 HP",
	"options" : ["Q2_A.png", "Q2_B.png", "Q2_C.png", "Q2_D.png"],
	"answer"  : 4
	},

	{
	"question" : "Who built the electric motors used by the grid for the first season of Formula E?",
	"option_A" : "Tesla",
	"option_B" : "Nissan",
	"option_C" : "McLaren",
	"option_D" : "Mercedes Benz",
	"options" : ["Q3_A.png", "Q3_B.png", "Q3_C.png", "Q3_D.png"],
	"answer"  : 3
	},

	{
	"question" : "Sebastien Loeb has consecutively won the most WRC drivers’ championships, but who’s the second consecutive winner?",
	"option_A" : "Sebastien Ogier",
	"option_B" : "Tommi Makinen",
	"option_C" : "Miki Baision",
	"option_D" : "Walter Rohrl",
	"options" : ["Q4_A.png", "Q4_B.png", "Q4_C.png", "Q4_D.png"],
	"answer"  : 2
	},

	{
	"question" : "As Porsche raced to a 17th Le Mans victory last month, it helped Michelin secure its 24th win, but what year was Michelin’s first?",
	"option_A" : "1923",
	"option_B" : "1933",
	"option_C" : "1943",
	"option_D" : "1953",
	"options" : ["Q5_A.png", "Q5_B.png", "Q5_C.png", "Q5_D.png"],
	"answer"  : 1
	},

	{
	"question" : "In which year were the chicanes introduced along the Mulsanne straight at Le Mans to slow the cars down?",
	"option_A" : "1970",
	"option_B" : "1980",
	"option_C" : "1990",
	"option_D" : "2000",
	"options" : ["Q6_A.png", "Q6_B.png", "Q6_C.png", "Q6_D.png"],
	"answer"  : 3
	},

	{
	"question" : "Just one city will host two Formula E races in the 2015-2016 season: which is it?",
	"option_A" : "Moscow",
	"option_B" : "Berlin",
	"option_C" : "London",
	"option_D" : "Beunos Aires",
	"options" : ["Q7_A.png", "Q7_B.png", "Q7_C.png", "Q7_D.png"],
	"answer"  : 3
	},

	{
	"question" : "Which constructor holds the most wins in the WRC?",
	"option_A" : "Lancia",
	"option_B" : "Mitsubishi",
	"option_C" : "Peugeot",
	"option_D" : "Citreon",
	"options" : ["Q8_A.png", "Q8_B.png", "Q8_C.png", "Q8_D.png"],
	"answer"  : 4
	},

	{
	"question" : "Mazda is the only Japanese manufacturer to have ever won at Le Mans. Which year was it?",
	"option_A" : "1971",
	"option_B" : "1981",
	"option_C" : "1991",
	"option_D" : "2001",
	"options" : ["Q9_A.png", "Q9_B.png", "Q9_C.png", "Q9_D.png"],
	"answer"  : 3
	},

	{
	"question" : "Who won the 2003 Porsche Carrera Cup Great Britain?",
	"option_A" : "Barry Horne",
	"option_B" : "Richard Westbrook",
	"option_C" : "Jason Templeman",
	"option_D" : "Jonathan Cocker",
	"options" : ["Q10_A.png", "Q10_B.png", "Q10_C.png", "Q10_D.png"],
	"answer"  : 1
	},

	]
})();