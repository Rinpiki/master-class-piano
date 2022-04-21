//get all keys
const keys = document.querySelectorAll('.key');
console.log(keys);

 //play notes
function playNote(event) {
    
    // Keycode
    let audiokeycode = getkeyCode(event);
    
    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audiokeycode}"]`)

    // if key exists
    const cantFoundAnyKey = !key
    
    if(cantFoundAnyKey) {
        return;
    }
    addPlayingClass(key)
    playAudio(audiokeycode)
}

function addPlayingClass(key) {
    key.classList.toggle("playing")
}

function getkeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
      keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

function playAudio(audiokeycode) {
    const audio = document.querySelector(`audio[data-key="${audiokeycode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}
//click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})
//keyboard type
window.addEventListener("keydown", playNote)