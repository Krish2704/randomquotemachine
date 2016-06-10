var quotes=[["Success is how high you bounce when you hit bottom.","-George S. Patton"],["Time flies like an arrow; fruit flies like a banana.","-Groucho Marx"],["You always pass failure on the way to success.","-Mickey Rooney"],[" You can do anything, but not everything.","-David Allen"],[" I’d rather live with a good question than a bad answer.","-Aryeh Frimer"],["Imagination is more important than intelligence.","-Albert Einstein"],["Every man dies; but not every man really lives.","-Braveheart"],["Do, or do not. There is no 'try'.","-Yoda"],["Happiness equals reality minus expectations.","-Tom Magliozzi"],["The only difference between me and a madman is that I'm not mad.","-Salvador Dali"]["An obstacle is often a stepping stone.","-Prescott Bush"],["Talent does what it can; genius does what it must.","-Edward George"],["If you are going through hell, keep going.","- Winston Churchill"]["If you can count your money, you don't have a billion dollars.","-J. Paul Getty"],["Maybe this world is another planet's Hell.","-Aldous Huxley"],["It's kind of fun to do the impossible.","-Walt Disney"],["Knowledge speaks, but wisdom listens.","-Jimi Hendrix"],["A clever man commits no minor blunders.","-Goethe"],["If everything seems under control, you're just not going fast enough.","-Mario Andretti"],["The secret of success is to know something nobody else knows.","-Aristotle Onassis"],["A little inaccuracy sometimes saves a ton of explanation.","-H. H. Munro"]];
var presentQuote="From a small seed a mighty trunk may grow.";
var presentAuthor="Aeschylus";
var getRandomNum=function(){
  return Math.floor(Math.random()*quotes.length);
};
$(document).ready(function(){
  $("#newQuote").click(function(){
    var randomNum=getRandomNum();
    $("#quote").text(quotes[randomNum][0]);
    $("#author").text(quotes[randomNum][1]);
    presentQuote=quotes[randomNum][0];
    presentAuthor=quotes[randomNum][1];
    });
  $("#tweetQuote").click(function(){
  var tweet='https://twitter.com/intent/tweet?text='+presentQuote+" " + presentAuthor;
    window.open(tweet);
return false;
  });
});
                                                                                      