// Global variable to keep track of the current word index
var wordIndex = 0;
var score = 0;
var question_no = 0;
var countdownTimer;
var secondsLeft = 0;
var hint_no = 5;

function level1()
{
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
	document.getElementById("next").disabled = true;
	document.getElementById("next_hint").disabled = true;
	
}

function myFunction()
{
	location.reload();
}

function getRandomIndex()
{
    var random_num = chinese1.length * Math.random();
	var random_word = Math.floor(random_num);
	return random_word;
}

function getRandomIndex2()
{
    var random_num = chinese2.length * Math.random();
	var random_word = Math.floor(random_num);
	return random_word;
}

function getRandomIndex3()
{
    var random_num = chinese3.length * Math.random();
	var random_word = Math.floor(random_num);
	return random_word;
}

function getRandomIndex4()
{
    var random_num = chinese4.length * Math.random();
	var random_word = Math.floor(random_num);
	return random_word;
}

function setTimer()
{	
	secondsLeft = 15;
	countdownTimer = setInterval("countdown()", 1000);
}

function countdown()
{
	secondsLeft--;
		
	if (secondsLeft == 0)
	{
		play();
	}
}

function setTimer2()
{	
	secondsLeft = 15;
	countdownTimer = setInterval("countdown2()", 1000);
}

function countdown2()
{
	secondsLeft--;
	
	if (secondsLeft == 0)
	{
		play2();
	}
}

function setTimer3()
{	
	secondsLeft = 15;
	countdownTimer = setInterval("countdown3()", 1000);
}

function countdown3()
{
	secondsLeft--;
		
	if (secondsLeft == 0)
	{
		play3();
	}
}

function setTimer4()
{	
	secondsLeft = 15;
	countdownTimer = setInterval("countdown4()", 1000);
}

function countdown4()
{
	secondsLeft--;
		
	if (secondsLeft == 0)
	{
		play4();
	}
}

// Start the game
function start1()
{	
	wordIndex = getRandomIndex();
	document.getElementById("display").innerHTML = chinese1[wordIndex];
	setTimer();
	
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	document.getElementById("next").disabled = false;
	if (hint_no >0)
	{
	document.getElementById("next_hint").disabled = false;
	document.getElementById("next_hint").setAttribute( "onClick", "javascript: hints();" );
	}
	else
	{
	document.getElementById("next_hint").disabled = true;
	}
    Start();//called from animation.js
}

function start2()
{
	clearInterval(countdownTimer);
	wordIndex = getRandomIndex2();
	document.getElementById("display").innerHTML = chinese2[wordIndex];
	setTimer2();
	Start();
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	document.getElementById("next").disabled = false;
	document.getElementById("next").setAttribute( "onClick", "javascript: play2();" );
	if (hint_no >0)
	{
	document.getElementById("next_hint").disabled = false;
	document.getElementById("next_hint").setAttribute( "onClick", "javascript: hints2();" );
	}
	else
	{
	document.getElementById("next_hint").disabled = true;
	}
}	
function start3()
{
	clearInterval(countdownTimer);
	wordIndex = getRandomIndex3();
	document.getElementById("display").innerHTML = chinese3[wordIndex];
	setTimer3();
	Start();
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	document.getElementById("next").disabled = false;
	document.getElementById("next").setAttribute( "onClick", "javascript: play3();" );
	if (hint_no >0)
	{
	document.getElementById("next_hint").disabled = false;
	document.getElementById("next_hint").setAttribute( "onClick", "javascript: hints3();" );
	}
	else
	{
	document.getElementById("next_hint").disabled = true;
	}
}
function start4()
{
	clearInterval(countdownTimer);
	wordIndex = getRandomIndex4();
	document.getElementById("display").innerHTML = chinese4[wordIndex];
	setTimer4();
	Start();
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	document.getElementById("next").disabled = false;
	document.getElementById("next").setAttribute( "onClick", "javascript: play4();" );
	if (hint_no >0)
	{
	document.getElementById("next_hint").disabled = false;
	document.getElementById("next_hint").setAttribute( "onClick", "javascript: hints4();" );
	}
	else
	{
	document.getElementById("next_hint").disabled = true;
	}
}

function play()
{
    Next();//called from animation.js
	clearInterval(countdownTimer);
	// Get player's answer and model answer
	var answer = document.getElementById("input_answer").value;
	var correct_answer = english1[wordIndex];
	
	// Give feedback
	var myFeedback = "You're right!";
	if (answer != correct_answer)
	{
 		myFeedback = "The correct answer was " + correct_answer + ".";
	}
	else
	{
		score++;
	}
	document.getElementById("feedback").innerHTML = myFeedback;
	document.getElementById("myScore").innerHTML = "Score: " + score;

	// Display random word
	wordIndex = getRandomIndex();
	
	document.getElementById("display").innerHTML = chinese1[wordIndex];

	document.getElementById("input_answer").value = "";
	setTimer();
	
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	
	if (hint_no <=0)
	{
	document.getElementById("next_hint").disabled = true;
	}
	else
	{
	document.getElementById("next_hint").disabled = false;
	}
	
	if( question_no == 10 && score >= 8)
	{
	window.alert("LEVEL UP!");
	stop(); 
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = false;
	document.getElementById("next").disabled = true;
	document.getElementById("next_hint").disabled = true;
	question_no = question_no -1;
	clearInterval(countdownTimer);
	document.getElementById("display").innerHTML = "";
	document.getElementById("feedback").innerHTML = "Click on &#34;Level 2&#34; to start the game.";
	}
	else if ( question_no ==10 && score <= 7)
	{
	window.alert("TRY AGAIN!");
	myFunction();
	}
}	
	
function play2()
{
	Next();
	clearInterval(countdownTimer);
	
	// Get player's answer and model answer
	var answer = document.getElementById("input_answer").value;
	var correct_answer = english2[wordIndex];
	
	// Give feedback
	var myFeedback = "You're right!";
	if (answer != correct_answer)
	{
 		myFeedback = "The correct answer was " + correct_answer + ".";
	}
	else
	{
		score++;
	}
	document.getElementById("feedback").innerHTML = myFeedback;
	document.getElementById("myScore").innerHTML = "Score: " + score;

	// Display random word
	wordIndex = getRandomIndex2();
	document.getElementById("display").innerHTML = chinese2[wordIndex];

	document.getElementById("input_answer").value = "";
	setTimer2();
	
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	
	if (hint_no <=0)
	{
	document.getElementById("next_hint").disabled = true;
	}
	else
	{
	document.getElementById("next_hint").disabled = false;
	}

	if( question_no == 20 && score >= 16)
	{
	window.alert("LEVEL UP!");
	stop(); 
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = false;
	document.getElementById("next").disabled = true;
	document.getElementById("next_hint").disabled = true;
	question_no = question_no -1;
	clearInterval(countdownTimer);
	document.getElementById("display").innerHTML = "";
	document.getElementById("feedback").innerHTML = "Click on &#34;Level 3&#34; to start the game.";
	}
	else if ( question_no ==20 && score <= 15)
	{
	window.alert("TRY AGAIN!");
	myFunction();
	}
}

function play3()
{
	Next();
	clearInterval(countdownTimer);
	
	// Get player's answer and model answer
	var answer = document.getElementById("input_answer").value;
	var correct_answer = english3[wordIndex];
	
	// Give feedback
	var myFeedback = "You're right!";
	if (answer != correct_answer)
	{
 		myFeedback = "The correct answer was " + correct_answer + ".";
	}
	else
	{
		score++;
	}
	document.getElementById("feedback").innerHTML = myFeedback;
	document.getElementById("myScore").innerHTML = "Score: " + score;

	// Display random word
	wordIndex = getRandomIndex3();
	document.getElementById("display").innerHTML = chinese3[wordIndex];

	document.getElementById("input_answer").value = "";
	setTimer3();
	
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	
		if (hint_no <=0)
	{
	document.getElementById("next_hint").disabled = true;
	}
	else
	{
	document.getElementById("next_hint").disabled = false;
	}

	if( question_no == 30 && score >= 24)
	{
	window.alert("LEVEL UP!");
	stop(); 
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = false;
	document.getElementById("next").disabled = true;
	document.getElementById("next_hint").disabled = true;
	question_no = question_no -1;
	clearInterval(countdownTimer);
	document.getElementById("display").innerHTML = "";
	document.getElementById("feedback").innerHTML = "Click on &#34;Level 4&#34; to start the game.";
	}
	else if ( question_no == 30 && score <= 23)
	{
	window.alert("TRY AGAIN!");
	myFunction();
	}	
}

function play4()
{
	Next();
	clearInterval(countdownTimer);
	
	// Get player's answer and model answer
	var answer = document.getElementById("input_answer").value;
	var correct_answer = english4[wordIndex];
	
	// Give feedback
	var myFeedback = "You're right!";
	if (answer != correct_answer)
	{
 		myFeedback = "The correct answer was " + correct_answer + ".";
	}
	else
	{
		score++;
	}
	document.getElementById("feedback").innerHTML = myFeedback;
	document.getElementById("myScore").innerHTML = "Score: " + score;

	// Display random word
	wordIndex = getRandomIndex4();
	document.getElementById("display").innerHTML = chinese4[wordIndex];

	document.getElementById("input_answer").value = "";
	setTimer4();
	
	question_no++;
	document.getElementById("question_no").innerHTML = "Question" + question_no;
	
		if (hint_no <=0)
	{
	document.getElementById("next_hint").disabled = true;
	}
	else
	{
	document.getElementById("next_hint").disabled = false;
	}

	if( question_no == 40 && score >= 32)
	{
	window.alert("GOOD JOB!");
	stop(); 
	window.alert("You got "+score+" out of "+question_no+" !");
	myFunction();
	}
	else if ( question_no == 40 && score <= 31)
	{
	window.alert("TRY AGAIN!");
	myFunction();
	}	
}

function hints()
{
	var wrongIndex1 = getRandomIndex();
	var wrongIndex2 = getRandomIndex();

	var myChoices = [];
	myChoices[0] = english1[wrongIndex1];
	myChoices[1] = english1[wrongIndex2];
	myChoices[2] = english1[wordIndex];
	
	myChoices.sort();

	var mc = myChoices[0] + " / " + myChoices[1] + " / " + myChoices[2] ;
	document.getElementById("feedback").innerHTML = mc;
	document.getElementById("next_hint").disabled = true;
	hint_no--;
	document.getElementById("hint_no").innerHTML = "You have "+hint_no+" hints left.";
}
function hints2()
{
	var hintMessage = "The answer has " + english2[wordIndex].length + " letters.";
    document.getElementById("feedback").innerHTML = hintMessage;
	var hintAnswer = english2[wordIndex].substr(0,2);
	document.getElementById("input_answer").value = hintAnswer;
	document.getElementById("next_hint").disabled = true;
	hint_no--;
	document.getElementById("hint_no").innerHTML = "You have "+hint_no+" hints left.";
}
function hints3()
{
	var hintMessage = "The answer has " + english3[wordIndex].length + " letters.";
    document.getElementById("feedback").innerHTML = hintMessage;
	document.getElementById("next_hint").disabled = true;
	hint_no--;
	document.getElementById("hint_no").innerHTML = "You have "+hint_no+" hints left.";
}
function hints4()
{
	var hintAnswer = english4[wordIndex].replace(/a|e|i|o|u/g,"*");
	document.getElementById("input_answer").value = hintAnswer;
	document.getElementById("next_hint").disabled = true;
	hint_no--;
	document.getElementById("hint_no").innerHTML = "You have "+hint_no+" hints left.";
}
