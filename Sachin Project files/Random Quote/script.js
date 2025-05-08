const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");




function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}


soundBtn.addEventListener("click", () =>{
  
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speak is a method of speech synthesis speaks utterance
});

copyBtn.addEventListener("click", () =>{
    
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () =>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  
});



quoteBtn.addEventListener("click", randomQuote);