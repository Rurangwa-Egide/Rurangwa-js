var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotatevalue = circle.style.transform;
var rotatesum;


upbtn.onclick = function()
{
    rotatesum = rotatevalue + "rotate(-90deg)";
     circle.style.transform = rotatesum;
     rotatevalue = rotatesum;


}
downbtn.onclick = function()
{
    rotatesum = rotatevalue + "rotate(90deg)";
     circle.style.transform = rotatesum;
     rotatevalue = rotatesum;


}









const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []


 getDate()

filter.addEventListener('input',(e) => filterDate(e.target.value))

function filterDate(searchTerm) {
listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove('hide')

    }
    else{
        item.classList.add('hide')
    }
})
}