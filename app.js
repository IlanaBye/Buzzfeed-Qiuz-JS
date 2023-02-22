const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination: ",
    answers: [
      {
        text: "New York",
        image:
          "https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        alt: "Photo of the Empire State Building in a rainbow sky.",
        credit: "Emiliano Bar",
      },
      {
        text: "Austin",
        image:
          "https://images.unsplash.com/photo-1520950237264-dfe336995c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Photo of standup paddle boarders on Lady Bird Lake.",
        credit: "Tomek Baginski",
      },
      {
        text: "Denver",
        image:
          "https://images.unsplash.com/photo-1599408169542-620fc453382c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Photo of downtown Denver and the Capitol Building.",
        credit: "Acton Crawford",
      },
      {
        text: "New Orleans",
        image:
          "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Photo of street jazz in NOLA.",
        credit: "Joao Francisco",
      },
    ],
  },
  {
    id: 1,
    text: "Pick some food: ",
    answers: [
      {
        text: "Pizza",
        image:
          "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of pepperoni and black olive pizza.",
        credit: "Carissa Gan",
      },
      {
        text: "Sandwich",
        image:
          "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of caprese sandwich on french baguette.",
        credit: "Raphael Nogueira",
      },
      {
        text: "Pasta",
        image:
          "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80",
        alt: "Photo of spaghetti bolognese.",
        credit: "Danijela Prijovic",
      },
      {
        text: "Hamburger",
        image:
          "https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1224&q=80",
        alt: "Photo of a cheese burger.",
        credit: "Giorgi Iremadze",
      },
    ],
  },
  {
    id: 2,
    text: "Pick a home: ",
    answers: [
      {
        text: "Traditional",
        image:
          "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        alt: "Photo of white house with a white picket fence.",
        credit: "Scott Webb",
      },
      {
        text: "Modern",
        image:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
        alt: "Photo of modern villa with floor to ceiling windows on two floors.",
        credit: "Stephan Bechert",
      },
      {
        text: "Townhome",
        image:
          "https://images.unsplash.com/photo-1577593980495-6e7f66a54ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a row of townhomes.",
        credit: "Aman Kumar",
      },
      {
        text: "Cabin",
        image:
          "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of a log cabin in thw woods.",
        credit: "Peter Thomas",
      },
    ],
  },
];

const answers = [
  {
    combination: ["New York", "Pizza", "Traditional"],
    text: "Blue Cheese",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    alt: "Blue cheese.",
    credit: "Jez Timms",
  },
  {
    combination: ["Austin", "Pasta", "Modern"],
    text: "Cheddar Cheese",
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Cheddar cheese.",
    credit: "Onder Ortel",
  },
  {
    combination: ["Denver", "Sandwich", "Cabin"],
    text: "Feta Cheese",
    image:
      "https://images.unsplash.com/photo-1626200926749-cccc3d2caf12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    alt: "Feta cheese.",
    credit: "Farhad Ibrahimzade",
  },
  {
    combination: ["New Orleans", "Hamburger", "Townhome"],
    text: "Mozzarella Cheese",
    image:
      "https://images.unsplash.com/photo-1580638149300-65f0b9e8fbff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Mozzarella cheese.",
    credit: "Sebastian Coman",
  },
];

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;

    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleClick(question.id, answer.text)
      );
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", "https://www.unsplash.com");
      answerInfo.append(imageLink, " to ", sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    });

    questionDisplay.append(answersBlock);
  });
};

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }

  console.log(chosenAnswer);
  console.log(unansweredQuestions);

  disableQuestionBlock(questionId, chosenAnswer);
  //jumps to the lowest unanswered question.id
  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = "#" + lowestQuestionId;

  if (!unansweredQuestions.length) {
    location.href = "#answer";
    showAnwser();
  }
};

const showAnwser = () => {
  let result;
  answers.forEach((answer) => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
      return;
    } else if (!result) {
      // first answer object is default
      result = answers[0];
    }
  });
  console.log(result);

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");

  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;

  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);

  answerBlock.append(answerTitle, answerImage);

  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.replaceWith(answerBlock.cloneNode(true))
  );
};

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions"
  );
  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText !== chosenAnswer) {
      block.style.opacity = "50%";
    }
  });
};
