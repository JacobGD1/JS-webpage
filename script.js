document.getElementById('report').addEventListener('click',reportResults)//adds report button as an event listener

function reportResults () {
  alert(document.getElementById('input').value)
}//this function tells my webpage to report results typed into the search engine machine

function changeBackground(color) {
   document.body.style.background = color
}// function that changes the background color of my code to the color specified in my addEventListener

window.addEventListener("load",function() { changeBackground('blue') });// Event listener that says to load the function to change my background color to blue