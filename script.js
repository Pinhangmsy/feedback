const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";


ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) => {
    removeActive();
        //  console.log(event.target.innerText || event.
//      target.parentNode.innerText);
    selectedRating = event.target.innerText ||
    event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",() =>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thanks </strong>
        <br>
        </br>
        <strong>Feed back: ${selectedRating} </strong>`
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}



