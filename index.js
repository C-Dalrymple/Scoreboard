let homeEl = document.getElementById("home-score")
let home = 0

function addH1() {
    home += 1
    homeEl.textContent = home
}
function addH2() {
    home += 2
    homeEl.textContent = home
}
function addH3() {
    home += 3
    homeEl.textContent = home
}

let guestEl = document.getElementById("guest-score")
let guest = 0

function addG1() {
    guest += 1
    guestEl.textContent = guest
}
function addG2() {
    guest += 2
    guestEl.textContent = guest
}
function addG3() {
    guest += 3
    guestEl.textContent = guest
}

let resetEl = document.getElementById("reset")

function reset() {
    home = 0
    guest = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}
