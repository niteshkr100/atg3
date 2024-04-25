//targetting classes
let input = document.querySelector("input");
let icon = document.querySelector(".user-icon");
let loader = document.querySelector(".loader");
let button = document.querySelector(".btn");

//calling loading function on click to submit button
button.addEventListener("click", ()=> {
    loading();
})

//on enter call loading
document.addEventListener("keydown", (e)=> {
    if(e.key == "Enter") {
        button.style.backgroundColor = "#096DD9";
        loading();
    }
})

//loading function 
function loading() {
    input.disabled = true;
    icon.style.display = "none";
    loader.style.visibility = "visible";

    setTimeout(()=> {
        loader.style.visibility = "hidden";
        button.disabled = true;
    }, 2000)
}