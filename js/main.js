

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



const calcXY = document.querySelector("#calcXY");

calcXY.addEventListener("click", function(){
		func34();
});

 function func34(){
	let x =	+prompt("Введіть перше число");
	let y =	+prompt("Введіть друге число");
	let sum = x + y;
if(!isNaN(sum)){
	confirm(`Ваша сума ${sum}`);
}else{
	confirm("Ви ввели не число");
};
};

///////////////////////////////



const bot = document.querySelector("#bot");

bot.addEventListener("click", function(){
	func35();
});


function func35(){

	let bot = +prompt("введіть Антибот 8+5");
	let count = 4;
	while(bot!= 13 && count>0){
		bot = +prompt(`Неправильний антибот, Введіть антибот **(8+5)**, залишилося спроб ${count} `);
		count--

};
if(bot == 13){
	confirm("Вітаємо, ви не бот");
}else{
	confirm("Ви бот((");
};

}