let fortuneQuotes = [
  `The fortune you seek is in another cookie.`,
  `Fortune not found? Abort, Retry, Ignore.`,
  `A dream you have will come true.`,
  `You can make your own happiness.`,
  `You learn from your mistakes... You will learn a lot today.`,
  `Now is the time to try something new.`,
  `You will live long enough to open many fortune cookies.`,
  `You will be hungry again in one hour.`,
  `Be careful who you trust. Salt and sugar look the same.`,
  `The road to success is always under construction`,
  `Error 404: Fortune not found`,
  `This fortune is no good. Try another.`,
  `You only live once, but if you do it right, once is enough.`,
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * fortuneQuotes.length);
  document.getElementById(`quoteDisplay`).innerHTML =
    fortuneQuotes[randomNumber];
}
