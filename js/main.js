

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

	let bot = +prompt("введіть Антибот 8+5=");
	let count = 4;
	while(bot!= 13 && count>0){
		bot = +prompt(`Неправильний антибот, Введіть антибот 8+5=, залишилося спроб ${count} `);
		count--

};
if(bot == 13){
	confirm("Вітаємо, ви не бот");
}else{
	alert("Ви бот((");
};
};
//////////////////////////////////////



const minusNum = document.querySelector("#minusNum");

minusNum.addEventListener("click", function(){
	func36();
});

function func36(){

let counter45 = 0;
let counter46 = 0;
let i = 1;
while(i<=5){
			let obj45 =	+prompt("Введіть числo:");
			i++;
			if(obj45 < 0){
				counter45++;
			}else if(obj45>0){
				counter46++
			};
};
alert(`Додатніх чисел було ${counter46}, відємних чисел було: ${counter45}.`);
};



//let click67 = +prompt("Введіть число");
//let click68 = 0;
//while(click67 >= 0){
//	click67 = +prompt("Введіть число");
	
//	click68++;
////}
//alert(`додатніх чисел введено = ${click68}`);




const coumpleNum = document.querySelector("#coupleNum");

coumpleNum.addEventListener("click", function(){
	func37();
});



function func37(){



let num55 = prompt("Введіть число");
let num0 = num55 / 2;



 if(Number.isInteger(num0) && num0 !== 0){

	 alert("ви ввели парне число");

 }else if(isNaN(num0) || num0 == 0){

	alert("Ви ввели буквений вираз або нуль");

 }else if(!Number.isInteger(num0)){

	alert("Число не парне");

 };
};







//вивід чисел кратних 3
//let n1 = +prompt("num1");
//let n2 = +prompt("num2");
//for( i = n1; i<= n2; i++){
 //  if(i%3 ==0){
//		 console.log(i);
//	 }
//}



 //let pass = +prompt("Введіть  будьласка пароль для входу на сайт");
 //let passCount = 5;
//while(pass != 1234 && passCount>0){
//	pass = +prompt(`пароль непрвильний спробуйте ще, залишилося спроб ${passCount}`);
///	passCount--
//}
//if(pass == 1234){
//	alert("Ласкаво просимо");
//}else{
//	alert("спроби вичерпані спробуйте пізніше");
//};



///let h1 = prompt("num");
//let h2 = 0;
///let sum = 0;
//while(h2<h1){
//	h2++;
//	sum = sum + h2;
//}
//console.log(sum);


//let x5 = 1000;
//while(x5<9999){
//	x5+=3;
//	console.log(x5);
//};


const func1 = document.querySelector("#func1");

func1.addEventListener("click", function(){
	fun1();
});


function fun1(){
	alert("Hello World!!");
};



//let a1 = +prompt("one");
//let b2 = +prompt("two");
//let num89;
//let num88 = 0;
//function func2(){
//for(i = 0; i<arguments.length; i++){
///	num88 +=arguments[i];
//};

const num68 = document.querySelector("#func78");

num68.addEventListener("click", function(){
		func78();
});


function func78(){

let num68 = +prompt("Введіть номер місяця(числом!! - Для пса майнеза!!)");

switch (num68) {
	case 1:
		alert("зима");
		break;


		case 2:
			alert("зима");
			break;


			case 3:
				alert("весна");
				break;


				case 4:
					alert("весна");
					break;


					case 5:
						alert("весна");
						break;


		case 6:
		alert("літо");
		break;


			case 7:
			alert("літо");
			break;


			case 8:
				alert("літо");
				break;


				case 9:
					alert("осінь");
					break;


					case 10:
						alert("осінь");
						break;


						case 11:
							alert("осінь");
							break;


								case 12: 
								alert("зима");
								break
	default:
		alert("error");
		break;
};
};

let sum77 = 0;
const num55 = (...arg) => {

		for(i=0; arg.length>i; i++){
		sum77=  sum77 + +arg[i];
		}
};

num55(5,8,9,7);
//console.log(sum77);






function fun77(n,m){

let firstNum = 1;
let count = 0;

for(i=0; i<n; n--){
	count= count + firstNum;
	firstNum*=m;
	
}
//console.log(count);
}

fun77(3,3);




////let p1 = +prompt();
//let p2 = +prompt();

//function pub(p1,p2){
//	for(i=p1; p2>=i; i++){
		
//	console.log(i);

//}
	
//}


//pub(p1,p2);

let myMath = {
	a : 5,
 	b: 2,
	 fu(){
		 console.log(`a + b = ${this.a + this.b}`);
		 console.log(`a - b = ${this.a - this.b}`);
		 console.log(`a * b = ${this.a * this.b}`);
		 console.log(`a / b = ${this.a / this.b}`);
		
	 }

};

//myMath.fu();



//let sum = myMath.a + myMath.b;

//console.log(sum);



const akar02 = document.querySelectorAll("#akar02");


akar02.forEach(function(item){
		item.addEventListener("click", function(){
			item.nextElementSibling.classList.toggle("none");
		});
});



let string = "Hello World";
//console.log(string.toUpperCase());
//console.log(string.toLowerCase());
//console.log(string.toLocaleUpperCase());


//let myName = prompt("MyName");
//let name67 = myName.charAt(0).toUpperCase();

//for(i=1; i<myName.length; i++){
//	name67+= myName.charAt(i);
///}

//alert(name67);


////let str55 = string.indexOf("W");
//console.log(str55);





//let nn = prompt("name");
//let n1 = nn.charAt(0).toUpperCase();
//let n2 = nn.substring(1).toLowerCase();
//let n3 = n1 + n2;
//alert(`Превет, ${n3} як справи!`);


//let sumStr = " ";
//function f55(str78, num77){

//for(i=0; i<num77; i++){
///	sumStr+=str78;
//}




//}

//f55("Превет", 5);
//console.log(sumStr);



//let count = 0;
//let num88 = prompt("str");

//for(i=0; i<num88.length; i++){
//	if(num88.charAt(i) == " "){
//		count++;
///	};
//};
//console.log(count);

function fX(){
let num88 = prompt("enter gmail");
if(num88.includes("@") && num88.charAt(0) != "@" && num88.charAt(num88.length - 1) != "@"){
	alert("Успіх!");
}else{
//	fX();
};
};


//fX();




let listLink = document.querySelectorAll("#listLink");

listLink.forEach(function(item){
		item.addEventListener("click", function(){
			burger.classList.add("trans");
		});
});