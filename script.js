// 1) Grab the things you want to interact with

const toast = document.getElementById("toast")
const submitButton = document.getElementById("submitButton") 


// 2) Connect to the event that you want to listen for
submitButton.addEventListener('click', () => {
    // 3) Do the things
    showToast()
})

toast.addEventListener('pointerenter', () => clearTimeout(hideTimer))
toast.addEventListener('pointerleave', () => restartTimer(2000))

let hideTimer

function showToast(duration = 4000) {
    toast.showPopover()
    restartTimer(duration)
}

function restartTimer(duration = 4000) {
    clearTimeout(hideTimer)
    hideTimer = setTimeout( () => toast.hidePopover(), duration)
}

