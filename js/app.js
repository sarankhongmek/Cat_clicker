//Cat object
var model = {

	activeCat:null,
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
		model.activeCat = model.cats[0];
		catlist.init();
		displayCat.init();
		admin.init();
	},
	//get the current cat that is in activeCat
	getActiveCat: function(){
		return model.activeCat;
	},
	//get cat lists
	getCats: function() {
		return model.cats;
	},
	//set new cat
	setActiveCat: function(cat) {
		console.log('here')
		model.activeCat = model.cats[cat];
		displayCat.render();
	},
	//increment clicks
	updateClicks: function() {
		model.activeCat.clicks++;
		displayCat.render();
	},

	updateModel: function () {
		if(admin.nameInput.value !== ''){
			model.activeCat.name = admin.nameInput.value;
		}
		if (admin.urlInput.value !== ''){
			model.activeCat.picture = admin.urlInput.value;
		}
		if (admin.clicksInput.value !== ''){
			model.activeCat.clicks = admin.clicksInput.value;
		}
		displayCat.render();

	},

	updateInfo: function () {
		admin.render();
	}


};



//admin

var admin = {

	init: function () {
		//assigning Elems to objs in this methods
		this.savebtn = document.querySelector('.submit');
		this.cancelbtn = document.querySelector('.cancelbtn');
		this.adminbtn = document.querySelector('.admin-bttn');

		//adding eventListener to Buttons show form
		this.adminbtn.addEventListener('click',function (){
				document.querySelector('.form-box').style.visibility = 'visible';
		});
		//adding eventListener to Buttons hide form
		this.cancelbtn.addEventListener('click', function(){
				document.querySelector('.form-box').style.visibility = 'hidden';
				admin.render();
		});

		this.savebtn = document.querySelector('.submit');
		this.savebtn.addEventListener('click', function () {
				octopus.updateModel();
		});

		//adding eventListener to Button submit data to array

		this.render();


	},

	render: function () {
		const currentCat = octopus.getActiveCat();

		this.nameInput = document.getElementById('name');
		this.urlInput = document.getElementById('url');
		this.clicksInput = document.getElementById('clicks');

		this.nameInput.placeholder = currentCat.name;
		this.urlInput.placeholder = currentCat.picture;
		this.clicksInput.placeholder = currentCat.clicks;
	}


}


octopus.init();

