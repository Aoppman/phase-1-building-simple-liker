// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const errorModal = document.getElementById("modal");

//error.className = "hidden"



//hearts.addEventListener('click', mimicServerCall)

const hearts = document.querySelectorAll(".like-glyph")
  for(let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function() {
      mimicServerCall()
      .then(function(response) {
        if (hearts[i].classList.contains('activated-heart')) {
          hearts[i].classList.remove('activated-heart')
          hearts[i].textContent = EMPTY_HEART;
        }
        else {
          hearts[i].classList.add('activated-heart')
          hearts[i].textContent = FULL_HEART;
        }
      })
      .catch(function(error) {
        errorModal.classList.remove('hidden');
        const errorMessage = errorModal.querySelector('p');
        errorMessage.textContent = error;
        setTimeout(function() {
          errorModal.classList.add('hidden');
        }, 3000);
        })
      })
  };







