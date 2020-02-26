// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
const likeBtns = document.querySelectorAll('.like-glyph');
likeBtns.forEach(btn => btn.addEventListener('click', like));

function like(e) {
  mimicServerCall()
    .then(() => {
      toggleLike(e.target)
    })
    .catch(error => {
      errorModal.classList.remove('hidden');
      errorModal.innerText = error
      setTimeout(() => {
        errorModal.classList.add('hidden');
        errorModal.innerText = '';
      }, 5000);
    })
}

function toggleLike(el) {
  if (el.innerText === FULL_HEART) {
    el.innerText = EMPTY_HEART;
    el.classList.remove('activated-heart');
  } else {
    el.innerText = FULL_HEART;;
    el.classList.add('activated-heart');
  }

}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
