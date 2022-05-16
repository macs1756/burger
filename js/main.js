

const button = document.querySelector("#button");
const burger = document.querySelector("#burger_active");


button.addEventListener("click", function(){
			burger.classList.toggle("trans");
});
/////////////////


const click = document.querySelector("#click_btn"); 

const content = document.querySelector("#click__content"); 

click.addEventListener("click", function(){
			content.classList.toggle("hidden");
})
//////////////////////////////////////

const meeting = document.querySelectorAll(".meeting__title");


meeting.forEach(function(item) {
			item.addEventListener("click", function(){
				  this.nextElementSibling.classList.toggle('hidden');
			});
});
////////////////////////////////////////


const tabs = document.querySelectorAll("[data-btn]");
const tabContainer = document.querySelectorAll(".tabs_content");
tabs.forEach(function(item){
			item.addEventListener("click", function(){
				tabContainer.forEach(function(item){
						item.classList.add("hidden");
				});
				const contentBox = document.querySelector("#" + this.dataset.btn);
				contentBox.classList.toggle("hidden");
	
			})
});
//////////////////////////////////

const model = document.querySelector('#model_btn');
const model_content = document.querySelector("#model_content");
const model_disable = document.querySelector("#model_disable");
console.log(model_content);


model.addEventListener("click", function(){
			model_content.classList.remove("no_model");
});

model_disable.addEventListener("click", function(){
	model_content.classList.add("no_model");
});

///////////////////


const menuA = document.querySelector("#menuArrow");
const menuL = document.querySelector("#menuList");

menuA.addEventListener("click", function(){
				menuL.classList.toggle("menuActive");
});

////////////////////////


let num56 = 5.467;

console.log(num56.toFixed(0));
console.log(isFinite(num56));

alert("heLLo JS");

alert("heLLo JS");