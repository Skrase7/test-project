let menuButton = document.querySelector(".js-menu-toggle");
let header = document.querySelector(".js-header");


menuButton.onclick = ()=>{
	header.classList.toggle("menu-opened")
	let menuTitle = menuButton.querySelector(".header__nav-button-title");

	if(header.classList.contains("menu-opened")){
		menuTitle.innerText = "Закрыь";
	}else{
		menuTitle.innerText = "Меню";
	}
}


window.addEventListener("scroll", ()=>{

	if(scrollY > 0){
		header.classList.add("scrolled");
	}else{
		header.classList.remove("scrolled");
	}

});


let slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		//alert("!");
	}, duration);
}


let slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;

	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}


let slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}


let subnavToggle = document.querySelectorAll(".js-subnav-toggle");

subnavToggle.forEach(toggle => {

	let subnav = toggle.closest("li").querySelector(".header__nav-sublist");

	toggle.onclick = ()=>{
		if(window.innerWidth < 768){
			toggle.classList.toggle("active")
			slideToggle(subnav)
		}
	}

});