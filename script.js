const modalContainer = document.querySelector("#modal-container")
const closePin = document.querySelector("#close-pin")
const consentForm = document.querySelector("#consent-form")
const modalText = document.querySelector("#modal-text")
const declineBtn = document.querySelector("#decline-btn")
const mainText = document.querySelector("#main-text")

setTimeout(function() {
    modalContainer.style.display = "block"
}, 3000)

closePin.addEventListener("click", function() {
    modalContainer.style.display = "none"
})

declineBtn.addEventListener("mouseover", function() {
    document.querySelector("#btn-container").classList.toggle("reverse")
})

declineBtn.addEventListener("click", function() {
    document.querySelector("#btn-container").classList.toggle("reverse")
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const userName = consentFormData.get('username')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
        <p>You really think you could go without entering your name?</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        returning back to page now...`
    }, 2000)
    
    setTimeout(function() {
        modalContainer.style.display = "none"

        mainText.innerHTML = `
        <h1>Learn Programming in One Week: From Zero to Hero (Guaranteed!) 🤯</h1>
            <p>
                So, <b>${userName}</b> you want to become a coding wizard?  Dreaming of building the next Facebook, creating killer apps, or just finally understanding what your techie friends are talking about? Well, you've come to the right place! We're here to tell you that you can achieve all of this and more... in just one week 🤔.
            </p>
            <p>
                Forget those boring online courses, those dusty textbooks, and those condescending programmers who tell you it takes years to learn this stuff 🥱.  They're just trying to keep you down. We've cracked the code (pun intended!) and discovered the secret to programming mastery in a single, glorious week 😎.
            </p>
            <h2>
                Day 1: Embrace the Buzzwords
            </h2>
            <p>
                First things first, you need to talk the talk. Start by memorizing as many programming buzzwords as possible.  "Agile," "Cloud Computing," "Blockchain," "Machine Learning," "Deep Neural Networks," "Quantum Computing"... the list goes on!  Don't worry about understanding what they mean. Just sprinkle them liberally into every conversation.  People will be so impressed.
            </p>
            <h2>
                Day 2:  Download ALL the IDEs
            </h2>
            <p>
                Integrated Development Environments (IDEs) are where the magic happens… or so we're told.  Download every single one you can find.  Eclipse, IntelliJ, Visual Studio, Sublime Text, Atom, Notepad++...  The more IDEs you have, the more productive you'll be. It's simple logic. Spend the day installing them all, configuring them with random settings you find on Stack Overflow, and marveling at the sheer number of icons on your desktop.
            </p>
            <h2>
                Day 3:  Watch 100 Hours of Tutorials (Speed 2x)
            </h2>
            <p>
                YouTube is your new best friend. Search for "Learn Programming in One Week" and binge-watch every tutorial you can find.  Crucially, set the playback speed to 2x.  You'll absorb twice as much information in half the time! Don't worry about actually coding along with the tutorials.  That's for losers. Just passively absorb the knowledge through osmosis.
            </p>
            <h2>
                Day 4:  Copy and Paste from Stack Overflow (Without Understanding)
            </h2>
            <p>
                Stack Overflow is a programmer's secret weapon.  Whenever you encounter a problem (and you will, constantly), just copy and paste the first code snippet you find.  Don't bother reading the question or the answer.  Just paste it in, and hope for the best. If it doesn't work, try the next snippet.  Eventually, something will stick.
            </p>
            <h2>
                Day 5:  Declare Yourself a Senior Developer
            </h2>
            <p>
                Now that you've watched a bunch of tutorials and copied some code, you're officially a Senior Developer! Update your LinkedIn profile, create a fancy resume with all those buzzwords you learned, and start applying for six-figure jobs.  Fake it 'til you make it, baby!
            </p>
            <h2>
                Day 6:  Write a Framework (Because Why Not?)
            </h2>
            <p>
                All the cool programmers have their own frameworks.  So should you!  Spend the day cobbling together some random code snippets you found online and call it "AwesomeFramework."  It doesn't have to do anything useful.  Just make sure it has a catchy name and a fancy logo.
            </p>
            <h2>
                Day 7:  Profit! 🥳
            </h2>
            <p>
                Congratulations <b>${userName}!</b> You've officially learned programming in one week!  Now go forth and conquer the tech world.  Remember, confidence is key.  Even if you have no idea what you're doing, just act like you do.  People will believe you.  Trust me.
            </p>

            <div id="disclaimer-container">
                <p>Now my final gift for you. Click the button below to get it</p>
                <button id="gift-btn">Get gift</button>
        
                </div>`
    }, 4000)

    setTimeout(function() {
        document.querySelector("#gift-btn").addEventListener("click", function() {
            document.querySelector("#disclaimer-container").innerHTML = `
                <p class="disclaimer">
                    (Disclaimer: Hey! <b>${userName}</b>, this article is a joke.  Learning programming takes time, dedication, and a lot of hard work.  Don't be fooled by these ridiculous tips.  Instead, find a reputable learning resource and put in the effort.  You'll get there eventually!) 😄😆😅😂🤣😜🏃🏾‍♂️‍➡️🏃🏾‍♂️‍➡️🏃🏾‍♂️‍➡️
                </p>
                <img src="images/pirate.gif" class="pirate">
            
            `
        })
    }, 8000)

    
}) 

