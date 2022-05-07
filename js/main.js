console.log('haalo');

const button = document.querySelector("#button");
const burger = document.querySelector("#burger_active");


button.addEventListener("click", function(){
			burger.classList.toggle("trans");
});
/////////////////


const click = document.querySelector("#click_btn"); 

const content = document.querySelector("#click__content"); 
console.log(content);

click.addEventListener("click", function(){
			content.classList.toggle("hidden");
})