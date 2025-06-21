let menu_icon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let player = document.querySelector("#player")
let music = document.querySelector("#music")

var playing = false

player.onclick = () => {
    if (playing)
    {
        music.pause()
        playing = false
        player.className = "bx bx-play btn"
    }
    else
    {
        music.play()
        playing = true
        player.className = "bx bx-pause btn"
    }
}