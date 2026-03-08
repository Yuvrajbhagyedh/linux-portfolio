const spellBtn = document.getElementById("spellBtn");
const book = document.getElementById("book");
const voldemort = document.getElementById("voldemort");

spellBtn.onclick = () => {

book.style.display = "flex";

spellBtn.innerText = "Magic Revealed";

};


document.addEventListener("mousemove", () => {

if(Math.random() > 0.98){
voldemort.style.display = "block";

setTimeout(()=>{
voldemort.style.display = "none";
},2000)

}

});