const questionDisplay = document.querySelector("#questions");
const aswerDisplay = document.querySelector("#answer");

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
        text: "Portland",
        image:
          "https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        alt: "Photo of the Empire State Building in a rainbow sky.",
        credit: "Emiliano Bar",
      },
    ],
  },
  {},
  {},
];
