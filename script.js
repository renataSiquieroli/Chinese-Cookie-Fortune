// array with quotes
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

//random whole number that ranges from 0 to the length of our quotes array
//Math.floor() function takes in a parameter and rounds the number downward to the nearest integer.
//The Math.random() function will generate a random decimal number between 0 and 1.
//Math.floor() is always rounding down to the nearest decimal, therefore, every decimal between 0 and 1 will always revert back to 0.
// multiply Math.random() with the length of our quotes array.

function newQuote() {
  let randomNumber = Math.floor(Math.random() * fortuneQuotes.length);
  //Placing the quote into the HTML quoteDisplay element
  document.getElementById(`quoteDisplay`).innerHTML =
    fortuneQuotes[randomNumber];
}
