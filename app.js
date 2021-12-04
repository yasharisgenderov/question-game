let triviaData = {
  q1: {
    desc: "The code in The Matrix comes from what food recipes?",
    answers: ["a) Sushi recipes", "b) Dumpling recipes", "c) Stir-fry recipes"],
    trueAnswer: "a",
  },

  q2: {
    desc: "Who actually drew the sketch of Rose in Titanic ?",
    answers: ["a) Leonardo DiCaprio", "b) Billy Zane", "c) James Cameron"],
    trueAnswer: "c",
  },

  q3: {
    desc: "Where were The Lord of the Rings movies filmed?",
    answers: ["a)  Ireland", "b) Iceland", "c) New Zealand"],
    trueAnswer: "c",
  },

  q4: {
    desc: "Which is not the name of a child selected to tour the Wonka factory in Willy Wonka and the Chocolate Factory??",
    answers: ["a) Billy Warp", "b) Veruca Salt", "c) Charlie Bucket"],
    trueAnswer: "a",
  },

  q5: {
    desc: "Which actor hasn’t played the Joker?",
    answers: ["a) Jack Nicholson", "b) Sean Penn", "c) Jared Leto"],
    trueAnswer: "b",
  },
  q6: {
    desc: "Who was the first Black person to win an Oscar?",
    answers: ["a) Hattie McDaniel", "b) Sidney Poitier", "c) James Earl Jones"],
    trueAnswer: "a",
  },
  q7: {
    desc: "Who did the cat in The Godfather belong to?",
    answers: ["a) Francis Ford Coppola", "b) Diane Keaton", "c) No one—the cat was a stray"],
    trueAnswer: "c",
  },
  q8: {
    desc: "What was the top-grossing movie of 2014?",
    answers: ["a) The Hunger Games: Mockingjay Part 1", "b) Captain America: The Winter Soldier", "c) Guardians of the Galaxy"],
    trueAnswer: "c",
  },
  q9: {
    desc: "What item is in every Fight Club scene?",
    answers: ["a) A Coca-Cola can", "b) A Starbucks cup", "c) A Dunkin’ donut"],
    trueAnswer: "b",
  },
  q10: {
    desc: "If you watch the Marvel movies in chronological order, which movie would you watch first?",
    answers: ["a) Iron Man", "b) Doctor Strange", "c) Captain America: The First Avenger"],
    trueAnswer: "c",
  },
};

class ProjectDoms {
  questionTitle = document.querySelector("#questionName");
  variants = document.querySelector("#variants");
  scorePanel = document.querySelector("#score");
  questionNo = document.querySelector(".question-no")
  gameTitle = document.querySelector(".game-title")
  gameMenu = document.querySelector(".game-menu")
  gameContent = document.querySelector(".gameContent")
  progBar = document.querySelector(".prog-bar")
  
}

class Question extends ProjectDoms {
  questions = [];
  questionIndex = 0;
  score = 0;
  barScore = 0;
  usersChoiceKey = null;
  correctAnswersVariants = ["a", "b", "c"];

  constructor(qdata) {
    super();
    this.questions = Object.values(qdata);
  }

  startGame(){
    
  }

  progressBar(){
    this.barScore += 10;
    this.progBar.setAttribute("style",`width:${this.barScore}%`)
  }

  usersChoice(keyChoice) {
    if (this.correctAnswersVariants.indexOf(keyChoice) === -1) {
      alert("Please insert correct key");
    }
    this.usersChoiceKey = keyChoice;
    
    if (this.usersChoiceKey === this.questions[this.questionIndex].trueAnswer) {
      this.score += 10;
      this.scorePanel.innerHTML = `Your Score is : ${this.score}`
      this.progressBar();
      this.nextQuestion();
      this.questionDisplay()
    }else{
      this.score
      this.questionIndex++
      this.progressBar();
      this.questionDisplay()
      this.scorePanel.innerHTML = `False.Your Score is : ${this.score}`
    }
  }

  

  nextQuestion() {
    this.questionIndex++;
    this.questionDisplay();
  }

  questionDisplay(){
    if (this.questions[this.questionIndex] === this.questions[this.questions.length]) {
      this.resetGame();
  }
    this.questionNo.innerHTML = `Question ${this.questionIndex+1}`
    this.questionTitle.innerHTML = this.questions[this.questionIndex].desc
    this.variants.innerHTML = this.questions[this.questionIndex].answers.map((q, i) => {
      return `
      <span class="bg-dark text-light ml-5 text-center" style="width:250px;font-size:25px;">${q}</span>
      `
    })
    .join("");

  }

  resetGame(){
    this.gameTitle.setAttribute("class","container d-flex justify-content-center align-items-center flex-column")
    this.gameMenu.setAttribute("class","d-flex flex-column text-center h1")
    this.gameContent.setAttribute("class","jumbotron jumbotron-fluid d-none")
    this.variants.setAttribute("class","d-none")
    this.scorePanel.innerHTML = `Your final score is : ${this.score}`
    this.barScore = 0;
    this.progBar.setAttribute("style",`width:${this.barScore}%`)
    this.score = 0;
  }
}

let question = new Question(triviaData);
question.questionDisplay()



window.onkeydown = function (e) {
  question.usersChoice(e.key);
};