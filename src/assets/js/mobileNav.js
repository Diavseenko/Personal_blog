const burger = document.querySelector("#sidebarToggle");
const mask = document.querySelector(".page");

burger.addEventListener("click", ()=>{

	if (document.body.classList.contains("show-sidebar")){
	removeMask()}
	else{
		addMask();
	}

});

function addMask(){
	document.body.classList.add("show-sidebar");
	let div_mask = document.createElement("div");
	div_mask.addEventListener("click", removeMask);
	div_mask.classList.add("mask");
	mask.appendChild(div_mask);
};

function removeMask(){
	document.body.classList.remove("show-sidebar");
	let div_mask = mask.querySelector(".mask");
	mask.removeChild(div_mask);
	document.body.classList.remove("show-sidebar");

};
