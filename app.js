
const STORE = {
  questions: [
    {
      question: 'This multi-headed creature was known to be a guard to the underworld:',
      answers: [
        'Cyclopes',
        'Chimera',
        'Cerberus',
        'Hydra'
      ],
      correctAnswer: 'Cerberus'
    },
    {
      question: "This undead creature is known to be able to kill with just the sound of its voice:",
      answers: [
        'Wight',
        'Wraith',
        'Poltergeist',
        'Banshee'
      ],
      correctAnswer: 'Banshee'
    },
    {
      question: "Sea creature famous for devouring sailors after convincing them to willingly abandon ship:",
      answers: [
        'Merfolk',
        'Kappa',
        'Siren',
        'Kraken'
      ],
      correctAnswer: 'Siren'
    },
    {
      question: 'This creature is known for having "looks that can kill":',
      answers: [
        'Harpie',
        'Sylph',
        'Medusa',
        'Basilisk'
      ],
      correctAnswer: 'Basilisk' 
    },
    {
      question: 'This 4 legged shapeshifter is known to seduce young men with the intention of eating their heart:',
      answers: [
        'Lycanthrope',
        'Vampire',
        'Doppelganger',
        'Kumiho'
      ],
      correctAnswer: 'Kumiho'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//useful constant variables//


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

// This function will be responsible for rendering quiz in dom
function render() {
  if (STORE.quizStarted === false) {
    generateStartPage();
  } else if (STORE.questionNumber < 5) {
    generateQuestionElement(STORE.questionNumber)
    const questionPageString = generateQuestionElement(STORE.questionNumber);

    $('.js-main').html(questionPageString);
  } else {
    generateFinalPage();
  }
}

// Target html main and use .html to insert wireframe for start page including start button for quiz
function generateStartPage() {
  $('.js-main').html(
  `<section id="start">
    <div class="page">
        <p>
          Identify as many creatures by their descriptions as you can!
        </p>
      <div id="start-button">
        <button id="start">Begin Quiz</button>
      </div>
    </div>
  </section>`)
  //console.log('generateStartPage ran')
}



// This function will be reponsible for generating a current question/answers element for the dom
function generateQuestionElement(currentQuestion) {
  let tempQuestion = STORE.questions[currentQuestion];
  let tempPageNum = STORE.questionNumber + 1;
  return `<section id="question set">
  <div class="page">
  <form>
    <h2>${tempQuestion.question}</h2>
      <input id = 'a' name="answer" type="radio" value="${tempQuestion.answers[0]}">
        <label for="${tempQuestion.answers[0]}">${tempQuestion.answers[0]}</label><br>
      <input id = 'b' name="answer" type="radio" value="${tempQuestion.answers[1]}">
        <label for="${tempQuestion.answers[1]}">${tempQuestion.answers[1]}</label><br>
      <input id = 'c' name="answer" type="radio" value="${tempQuestion.answers[2]}">
        <label for="${tempQuestion.answers[2]}">${tempQuestion.answers[2]}</label><br>
      <input id = 'd' name="answer" type="radio" value="${tempQuestion.answers[3]}">
        <label for="${tempQuestion.answers[3]}">${tempQuestion.answers[3]}</label><br>
      <button id ="submit" type="submit">Submit</button>
  </form>
  <h3></h3>
  <p>Question ${tempPageNum} of 5 <br>
  Score: ${STORE.score}</p>
  </div>
  </section>`;
}

// This function will be responsible for generating final page for the dom
function generateFinalPage() {
  $('main').html(`
  <section id="End Page">
    <div class="page">
      <h2>Final Score: ${STORE.score} out of 5!</h2>
    <button id="js-reset">Try Again?</button>
  </div>
</section>`)
}

//This function will start the quiz
function handleStartClicked() {
  $('main').on('click', '#start', e => {
    STORE.quizStarted = true;
    render();
  }) 
}

//This function will submit answer to question and provide feedback on if the question was correct
function handleSubmitClicked() {
  $('main').on('click', '#submit', e => {
    e.preventDefault();
    var tempQuestionNum = STORE.questionNumber;
    const userChoice = $('input[name="answer"]:checked').val();
    var tempQuestion = STORE.questions[tempQuestionNum];
    if (userChoice === tempQuestion.correctAnswer) {
      $('main').html(`<section id="next">
      <div class="page">
        <h3>Score Increase!</h3>
          <p>
          You got it! The correct answer was ${userChoice}!!
          </p>
        <div id="next-button">
          <button id="next">Next</button>
        </div>
      </div>
    </section>`)
    STORE.score += 1;
    STORE.questionNumber += 1;
    } else {
      $('main').html(`<section id="next">
      <div class="page">
        <h3>I'm Sorry.</h3>
          <p>
          Not Quite! The correct answer was ${tempQuestion.correctAnswer}!!
          </p>
        <div id="next-button">
          <button id="js-next">Next</button>
        </div>
      </div>
    </section>`);
    STORE.questionNumber += 1;
    }
  })
  console.log('handleSubmitClicked ran')
}

//This function will advance through questions and lead to the final page when all questions are complete
function handleNextClicked() {
  $('main').on('click', '#js-next', e => {
    render();
  })
  console.log('handleNextClicked ran')
}

//This function will restart the quiz from the final page
function handleRestartClicked() {
  $('main').on('click', '#js-reset', e => {
    STORE.questionNumber = 0;
    STORE.score = 0;
    STORE.quizStarted = false;
    render();
  })
  console.log('handleRestartClicked ran')
}

//This function will serve as our callback for the initial render and handlefunctions
function handleQuiz() {
  $(render);
  $(handleStartClicked);
  $(handleSubmitClicked);
  $(handleNextClicked);
  $(handleRestartClicked);
}

$(handleQuiz);