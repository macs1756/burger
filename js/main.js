

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