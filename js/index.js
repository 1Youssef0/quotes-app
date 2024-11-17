var arrQuote = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    writer: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    writer: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    writer: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    writer: "― Bernard M. Baruch",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    writer: "― Mae West",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    writer: "― Robert Frost",
  },
  {
    quote:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    writer: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    writer: "― Mark Twain",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    writer: "― Mahatma Gandhi",
  },
];

var prevRandomNum;

function showquote() {
  var randomnum = Math.trunc(Math.random() * arrQuote.length);

  if (prevRandomNum == randomnum) {
    randomnum = prevRandomNum + 1;
  }

  console.log(randomnum);
  prevRandomNum = randomnum;

  document.getElementById("quotes").innerHTML = arrQuote[randomnum].quote;
  document.getElementById("writer").innerHTML = arrQuote[randomnum].writer;
}
