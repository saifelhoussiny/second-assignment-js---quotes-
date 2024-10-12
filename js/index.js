var quote = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    auther: `― Oscar Wilde`,
  },
  {
    quote: `
“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
`,
    auther: `― Marilyn Monroe
`,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    auther: `― Albert Einstein
`,
  },
  {
    quote: `“So many books, so little time.”
`,
    auther: `― Frank Zappa
`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    auther: `― Bernard M. Baruch
`,
  },
  {
    quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
    auther: `― William W. Purkey`,
  },
];

function getQuotes() {
  var num = Math.floor(Math.random() * quote.length);
  document.getElementById("Quote").innerHTML = quote[num].quote;
  document.getElementById("auther").innerHTML = quote[num].auther;
  document.getElementById('card').classList.add("border-success");
  document.getElementById('card').classList.remove('border-0')
}
