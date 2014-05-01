"use strict";

// variables for the page
var scrollAmnt = 0;
var scrollBoundary = 0;

var COLORS = 
{
	royal_blue 		: "#4169E1",
	imperial_red	: "#ED2939",
	royal_yellow	: "#FADA5E",
	dutch_white		: "#EFDFBB",
	malachite_green	: "#0BDA51",
	jade_green		: "#00A86B",
	emerald_green	: "#50C878",
	royal_purple	: "#7851A9",
	//ghost_white		: "#F8F8FF",
	//ecru			: "#C2B280",
	//champagne		: "#F7E7CE",
	//jet				: "#343434",
	//rose_quartz		: "#AA98A9",
	//slate_gray		: "#708090",
	ruby			: "#DC143C",
	desire			: "#EA3C53"
};

/*
 * Checks the agent being used to access the page, and calls addListeners() as well as sets variables based on screen dimensions
 *
 * @return	none
 */
function init()
{
	// From http://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
	// Adding a function to Object to allow for getting size
	Object.size = function(obj){
		var size = 0;
		var key;
		
		for(key in obj)
			if(obj.hasOwnProperty(key))
				size++;
		
		return size;
	};

	// window dimensions
	
	addListeners();
	
	console.log("colors array length: " + Object.size(COLORS));
}

/*
 * Adds event listeners to DOM elements on the page
 *
 * @return	none
 */
function addListeners()
{
	//window.addEventListener('scroll', onScroll, false);
}

function onScroll()
{
	// update scroll amount
	scrollAmnt = window.pageYOffset;
	//console.log(scrollAmnt);
	
	// check boundaries
	//if(scrollAmnt > 50)
	//{
		// grab nav bar
		/*var navigationBar = document.querySelector('#staticNav');
		
		if(navigationBar)
		{
			navigationBar.setAttribute('id', "fixedNav");
			//navigationBar.style.backgroundColor = COLORS.jet;
		}*/
	//}
	
	/*else
	{
		var navigationBar = document.querySelector('#fixedNav');
		
		if(navigationBar)
			navigationBar.setAttribute('id', "staticNav");
	}*/
}

// entry point
window.addEventListener('load', init, false);