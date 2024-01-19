const inputText = document.getElementById("input-text");
const rightSide = document.getElementById("right-side");

inputText.addEventListener("input", function(){
    const inputValue = inputText.value

    rightSide.innerHTML = inputValue;
});