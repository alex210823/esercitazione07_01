let elements = document.querySelectorAll(".myelements");

for (let i = 0; i < elements.length; i++) { 
    let el= elements[i];
    console.log(i)
    el.classList.add("greenbg");
    el.addEventListener("click", function(e) {
        el.classList.remove("greenbg");
        el.classList.add("yellowbg");
    })
}