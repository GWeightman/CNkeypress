const image = document.getElementById("cat")
const button= document.getElementById("submit");

const hide = (enter) => {
    if(image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";
    } 
    else {
        image.style.display = "none";
        button.textContent = "show";
    }
}

document.addEventListener("keypress", hide)
button.addEventListener("click", () => {
    hide()
})


console.log(image.style)