const modalBtn = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");


modalBtn.forEach(item => {
	item.addEventListener("click", event =>{
		let $this = event.currentTarget;
		let dataAtr = $this.getAttribute("data-modal");
		let elemId = document.getElementById(dataAtr);

		let modalContent = elemId.querySelector(".modal__content");


		document.body.classList.add("show__sidebar");
		elemId.classList.add("show");


		modalContent.addEventListener("click", event => {
			event.stopPropagation();
		});

		elemId.classList.add("show");
		document.body.classList.add("no-scroll");

		setTimeout(()=>{
			modalContent.style.transform = "none";
			modalContent.style.opacity = "1";
		}, 200);

	});
});

modalClose.forEach(item => {
	item.addEventListener("click", event =>{
		let currentModal = event.target.closest(".modal");
		removeModal(currentModal);
	})
});

modal.forEach(item =>{
	item.addEventListener("click", event =>{
		let currentModal = event.target;
		removeModal(currentModal);
	});
});

function removeModal(currentModal){
	let modalContent = currentModal.querySelector(".modal__content");
	modalContent.removeAttribute('style');


	setTimeout(()=>{
		document.body.classList.remove("show__sidebar");
		currentModal.classList.remove("show");
	}, 200);
}
