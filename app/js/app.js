//declaring variable 
let cat = document.querySelector('.card');
let petCounter = document.querySelector('.counter');
let count = 0;

cat.addEventListener('click', function(){
	count ++
	petCounter.innerText = count;
	
});






