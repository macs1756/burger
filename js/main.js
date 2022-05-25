

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
//console.log(model_content);


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

//console.log(num56.toFixed(0));
//console.log(isFinite(num56));



//confirm("Hallo World");

const xbet = document.querySelector("#xbet");
xbet.addEventListener("click", function(){
	confirm("1XBET Поставив і про#бав");
});

//document.write("<div class='helo'>HEllo</div>");




/////////////////////
////price/////////
const pricePen = 5.25;
const pricePencil = 3.50;

//////number price pen//////////////
let xP = 4;
//////number price pencil//////////////
let xPl = 6;


let summPrice = (xP * pricePen)+(xPl * pricePencil);
//document.write(summPrice);

///////////////////////

//let name22 = prompt("Введіть ваше Імя!!");
//alert(`Доброго дня ${name22}, вас вітає JS бот!!!`);

//////////////////////



//let lifeAge = prompt("You age");

//if(1 < lifeAge && lifeAge <= 7){
//	console.log("дитина")
//}else if(7 < lifeAge && lifeAge <= 14){
//	console.log("майже підліток")
//}else if(14 < lifeAge && lifeAge <= 18){
//	console.log("підліток")
//}else if(18 < lifeAge && lifeAge <= 30){
/////	console.log("чоловік")
//}else if(30 < lifeAge && lifeAge <= 60){
///	console.log("старший дядько")
//}else if(60 < lifeAge && lifeAge <= 120){
//	console.log("пенсія")
//}else if(lifeAge>120){
//	console.log("привид")
//}else if(typeof String){
//	console.log("error")
//};


//let zero = prompt("number");
//if(zero > 0 || zero === "+"){
//	console.log("Ви ввели додатнє число");
//}else if(zero < 0 || zero === "-"){
//	console.log("Ви ввели відємне число");
//}else if(zero == 0 || zero === "zero"){
//	console.log("Ви ввели число 0");
//}
//let str = "";
//for( let i = 0; i<=60; i=i+1){
//	str = str + i
//};
//document.write(`<h2 class="num54">${str}</h2>`);

