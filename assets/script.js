const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slidImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const slideDot = document.getElementById("slideDot")
const left = document.getElementById("left");
const right = document.getElementById("right");
let i = 0;

right.addEventListener("click", function(){
	if(i + 1 < slides.length){
		i++;
		slideImage.src = (`./assets/images/slideshow/${slides[i].image}`);
		slideText.innerHTML = slides[i].tagLine;
		slideDot.children[i].className ="dot dot_selected";
		slideDot.children[i - 1].className ="dot";
	}else{ 
		i -= 3;
		slideImage.src = (`./assets/images/slideshow/${slides[i].image}`);
		slideText.innerHTML = slides[i].tagLine;
		slideDot.children[i].className ="dot dot_selected";
		slideDot.children[3].className ="dot";
	 }
});

left.addEventListener("click", function(){
	if(i > 0){
		i--;
		slideImage.src = (`./assets/images/slideshow/${slides[i].image}`);
		slideText.innerHTML = slides[i].tagLine;
		slideDot.children[i].className ="dot dot_selected";
		slideDot.children[i + 1].className ="dot";
	}else{
		i += 3;
		slideImage.src = (`./assets/images/slideshow/${slides[i].image}`);
		slideText.innerHTML = slides[i].tagLine;
		slideDot.children[i].className ="dot dot_selected";
		slideDot.children[0].className ="dot";
	}
});
