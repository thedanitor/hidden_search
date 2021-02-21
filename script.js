// search div
const search = document.querySelector(".search");
// button
const btn = document.querySelector(".btn");
// input
const input = document.querySelector(".input");

// listen for click on button
btn.addEventListener("click", () => {
    // add/remove class "active" to search
    search.classList.toggle("active");
    // set focus to input
    input.focus();
})