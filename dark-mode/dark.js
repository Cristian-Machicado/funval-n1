let buttonDark = document.querySelector("#dark")

buttonDark.addEventListener('click', switchDarkmode)

function switchDarkmode() {
    document.documentElement.classList.toggle("dark")
}
