let countInputs = document.querySelectorAll(".js-count-input");

let changeInputWidth = (input)=>{
	if( input.value.length >1){
		input.style.width = "2ch";
	}else{
		input.style.width = "1ch";
	}
}

countInputs.forEach(element => {
	let input = element.querySelector(".count-input__element-counter");
	let min = parseInt(input.getAttribute("min"));
	let max = parseInt(input.getAttribute("max"));
	let minus = element.querySelector(".count-input__button_minus");
	let plus = element.querySelector(".count-input__button_plus");

	minus.onclick = ()=>{
		if(input.value > min){
			input.value = parseInt(input.value) - 1;
		}
		changeInputWidth(input);
	}

	plus.onclick = ()=>{
		if(input.value < max){
			input.value = parseInt(input.value) + 1;
		}
		changeInputWidth(input);
	}

	input.onchange = ()=>{
		changeInputWidth(input);
	}

	input.oninput = ()=>{
		changeInputWidth(input);
	}
	
});