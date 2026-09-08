// 1. 타입(인터페이스) 정의
// Question : question 문자열, choices , answer
interface Question {
  question: string;
  choices: string[];
  answer: number;
}

// type 정의
// GameState : playing or finished
type GameState = "playing" | "finished";

// 2. 문제 데이터 가져오기
//fetch()
let questions: Question[] = [];
const loadQuestions = async (): Promise<void> => {
  const response = await fetch("./question.json");
  questions = await response.json();
  showQuestion();
};
loadQuestions();

// 3. 게임상태 변수
// currentQuestionIndex : number(초기값 0)
let currentQuestionIndex: number = 0;
// score : 위와 통일
let score: number = 0;
// selectedAnswer : 숫자 or null (초기값 null)
let selectedAnswer: number | null = null;
// gameState : GameState (초기값 playing)
let gameState: GameState = "playing";

// 4. dom 요소 가져오기
const questionNumber = document.querySelector("#question-number") as HTMLSpanElement;
const scoreElement = document.querySelector("#score") as HTMLSpanElement;
const progressBar = document.querySelector("#progress-bar") as HTMLDivElement;
const quizSection = document.querySelector("#quiz-section") as HTMLElement;
const choicesElement = document.querySelector("#choices") as HTMLDivElement;
const nextButton = document.querySelector("#next-button") as HTMLButtonElement;
const resultSection = document.querySelector("#result-section") as HTMLElement;
const resultMessage = document.querySelector("#result-message") as HTMLParagraphElement;
const finalScore = document.querySelector("#final-score") as HTMLParagraphElement;
const restartButton = document.querySelector("#restart-button") as HTMLButtonElement;
const questionElement = document.querySelector("#question") as HTMLHeadElement;

// 문제 출력
function showQuestion(): void {
  // 문제 가져오기
  const currentQuestion: Question = questions[currentQuestionIndex];

  // 가져온 문제 화면에 보여주기
  questionElement.textContent = currentQuestion.question;
  questionNumber.textContent = `문제 ${currentQuestionIndex + 1} / ${questions.length}`;
  scoreElement.textContent = `점수 ${score}`;

  // 진행률
  const progress = (currentQuestionIndex + 1) / questions.length;
  progressBar.style.width = `${progress}%`;

  // 초기화
  selectedAnswer = null;
  choicesElement.innerHTML = "";
  nextButton.disabled = true;

  // 보기 제시
  currentQuestion.choices.forEach((choice: string, idx: number) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = choice;

    button.addEventListener("click", () => {
      selectAnswer(idx);
    });

    choicesElement.appendChild(button);
  });
}

// 정답 선택
function selectAnswer(answerIdx: number): void {
  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = answerIdx;

  const currentQuestion: Question = questions[currentQuestionIndex];

  const choiceButtons = document.querySelectorAll<HTMLButtonElement>(".choice-button");

  choiceButtons.forEach((button: HTMLButtonElement) => {
    button.disabled = true;
  });

  // 정답 표시
  choiceButtons[currentQuestion.answer].classList.add("correct");

  if (answerIdx !== currentQuestion.answer) {
    // 사용자가 선택한 오답에 wrong 표시
    choiceButtons[answerIdx].classList.add("wrong");
  } else {
    score += 20;
  }

  scoreElement.textContent = `점수 ${score}`;

  nextButton.disabled = false;
}

// 다음 문제
function nextQuestion(): void {
  // currentQuestionIndex 증가
  currentQuestionIndex++;
  //마지막 문제인지 확인
  if (currentQuestionIndex >= questions.length) {
    finishQuiz();
    return;
  }

  // 문제 출제
  showQuestion();
}

// 퀴즈 종료
function finishQuiz(): void {
  // 게임상태 업데이트
  gameState = "finished";
  // 퀴즈 영역은 감추기
  quizSection.classList.add("hidden");
  //결과 영역은 보여주기
  resultSection.classList.remove("hidden");
  finalScore.textContent = `${score} / ${questions.length * 20}점`;
  // 결과메세지 출력
  if (score === questions.length * 20) {
    resultMessage.textContent = "";
  } else if (score >= 60) {
    resultMessage.textContent = "잘했습니다.";
  } else {
    resultMessage.textContent = "조금 더 공부해봅시다";
  }
}

// 다시시작 클릭 시
// 문제 인덱스 초기화, 점수 초기화, 게임상태
// 퀴즈 영역은 보여주기, 결과 영역은 감추기
function restartbutton(): void {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  gameState = "playing";
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
  showQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartbutton);

showQuestion();
