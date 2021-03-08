
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
  } else {
    generateQuestionElement(STORE.questionNumber)
    const questionPageString = generateQuestionElement(STORE.questionNumber);

    $('.js-main').html(questionPageString);
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

// This function will generate a string to render the questions page based on current question

// This function will be reponsible for generating a current question/answers element for the dom
function generateQuestionElement(currentQuestion) {
  let tempQuestion = STORE.questions[currentQuestion];
  return `<section id="question set">
  <div class="page">
  <form>
    <h2>${tempQuestion.question}</h2>
      <input name="answer" type="radio" value="${tempQuestion.answers[0]}">
        <label for="${tempQuestion.answers[0]}">${tempQuestion.answers[0]}</label><br>
      <input name="answer" type="radio" value="${tempQuestion.answers[1]}">
        <label for="${tempQuestion.answers[1]}">${tempQuestion.answers[1]}</label><br>
      <input name="answer" type="radio" value="${tempQuestion.answers[2]}">
        <label for="${tempQuestion.answers[2]}">${tempQuestion.answers[2]}</label><br>
      <input name="answer" type="radio" value="${tempQuestion.answers[3]}">
        <label for="${tempQuestion.answers[3]}">${tempQuestion.answers[3]}</label><br>
      <button type="submit">Submit</button>
      <button id="next">Next</button>
  </form>
  <h3></h3>
  <p>Question 1 of 5 <br>
  Score: X</p>
  </div>
  </section>`;
}

// This function will be responsible for generating final page for the dom


//This function will start the quiz
function handleStartClicked() {
  $('main').on('click', '#start', e => {
    STORE.quizStarted = true;
    render();
  }) 
}

//This function will submit answer to question and provide feedback on if the question was correct
function handleSubmitClicked() {
  console.log('handleSubmitClicked ran')
}

//This function will advance through questions and lead to the final page when all questions are complete
function handleNextClicked() {
  console.log('handleNextClicked ran')
}

//This function will restart the quiz from the final page
function handleRestartClicked() {
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