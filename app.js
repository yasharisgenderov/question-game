let questionsData = {
  q1: {
    desc: "What color is the sky?",
    answers: ["a) Blue", "b) Yellow", "c) Green"],
    trueAnswer: "a",
  },

  q2: {
    desc: "What do you call people who are 18+ ?",
    answers: ["a) Baby", "b) Adult", "c) Person"],
    trueAnswer: "b",
  },

  q3: {
    desc: "What color is the tree?",
    answers: ["a) Red", "b) Brown", "c) Green"],
    trueAnswer: "c",
  },

  q4: {
    desc: "What do you call someone who has a wife?",
    answers: ["a) Wife", "b) Husband", "c) Married"],
    trueAnswer: "c",
  },

  q5: {
    desc: "Which is the most us level in English?",
    answers: ["a) B1", "b) C2", "c) A2"],
    trueAnswer: "b",
  },
};

class ProjectDoms {
  questionTitle = document.querySelector("#questionName");
  variants = document.querySelector("#variants");
  scorePanel = document.querySelector("#score");
}

class Question extends ProjectDoms {
  questions = [];
  questionIndex = 0;
  score = 0;
  usersChoiceKey = null;
  correctAnswersVariants = ["a", "b", "c"];

  constructor(qdata) {
    super();
    this.questions = Object.values(qdata);
    // console.log(this.questions[this.questionIndex].trueAnswer)
  }

  usersChoice(keyChoice) {
    if (this.correctAnswersVariants.indexOf(keyChoice) === -1) {
      alert("Please insert correct key");
    }
    // this.questions[this.questionIndex].answers.map((q)=>{
    //     console.log(q)
    // })
    this.usersChoiceKey = keyChoice;
    
    if (this.usersChoiceKey === this.questions[this.questionIndex].trueAnswer) {
      this.score += 10;
      console.log(this.score)
      this.scorePanel.innerHTML = `Your Score is : ${this.score}`
      this.nextQuestion();
      this.showQuestion()
    }

    console.log(this.usersChoiceKey);
  }

  //this.questions[this.questionIndex]=this.questions[this.questions.length-1]

  questionDisplay() {
    // if (!this.questions[this.questionIndex]) {
    //   return;
    // }
    console.log(this.questions)
    
    if (this.questions[this.questionIndex] === this.questions[this.questions.length]) {
        this.resetGame();
        // this.questionDisplay();
    }
    console.log(this.questions[this.questionIndex]);
  }

  nextQuestion() {
    this.questionIndex++; 
    this.questionDisplay();
  }

  showQuestion(){
    this.questionTitle.innerHTML = this.questions[this.questionIndex].desc
    this.variants.innerHTML = this.questions[this.questionIndex].answers.map((q, i) => {
      return `
      <span>${q}</span>
      `
    })
    .join("");

  }

  resetGame(){
    //   alert("Your game has finished");
    this.questionIndex = 0;
    this.scorePanel.innerHTML = `Your final score is ${this.score}`
    this.score = 0;
    // this.questionDisplay();
  }
}

let question = new Question(questionsData);
question.questionDisplay();
question.showQuestion()

window.onkeydown = function (e) {
  question.usersChoice(e.key);
};