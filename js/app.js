//Cat object
var model = {

	ativeCat:null,
	cats: 
	[{
		name: 'Ruby!',
		picture: 'images/ruby-small_small.jpg',
		clicks: 0

	},
	{
		name: 'Cooper!',
		picture: 'images/cooper-small_small.jpg',
		clicks: 0

	}]

};




//display cat
var displayCat = {

	init: function() {

		//assiging elements
		this.display = document.querySelector('.display-pic');
		this.petName = document.querySelector('.cat-name')
		this.counter = document.querySelector('.title');
		this.petCard = document.querySelector('.card');
		//add EventListener to listen for click and call octopus.updateClicks(); to increment clicks
		this.petCard.addEventListener('click', function(){
			octopus.updateClicks();

		});

		//call render to update Incremented clicks on the screen screen
		this.render();

	},

	render: function(){
		//get octopus object and update the current pet counter
		const currentCat = octopus.getActiveCat();
		this.display.src = currentCat.picture;
		this.petName.innerHTML = `Click to pet, ${currentCat.name}!`;
		this.counter.innerHTML = `${currentCat.name} has received ${currentCat.clicks} pets. `;
	}

};

//array of cats
var catlist = {
	init: function(){
		this.catThumbnail = document.querySelector('.pick');
		this.render();
	},
	//display cat thumbnails
	render: function(){
		let catList = octopus.getCats().map((Obj,index) => `<img onclick="octopus.setActiveCat(${index})" class="thumbnail" src="${Obj.picture}" alt="cat">` );
		this.catThumbnail.innerHTML = catList.join('');
	}
};


//operator
var octopus = {
	//initiate model.activeCat
	init: function() {
		model.ativeCat = model.cats[0];
		catlist.init();
		displayCat.init();
	},
	//get the current cat that is in activeCat
	getActiveCat: function(){
		return model.ativeCat;
	},
	//get cat lists
	getCats: function() {
		return model.cats;
	},
	//set new cat
	setActiveCat: function(cat) {
		console.log('here')
		model.ativeCat = model.cats[cat];
		displayCat.render();
	},
	//increment clicks
	updateClicks: function() {
		model.ativeCat.clicks++;
		displayCat.render();
	},


};


octopus.init();

