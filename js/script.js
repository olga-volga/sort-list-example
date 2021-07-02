"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const list = document.querySelector('.sort__list'),
		  listItem = document.querySelectorAll('li'),
		  btn = document.querySelector('.sort__btn');

	function sortList() {
		let cityList = [];

		listItem.forEach(item => {
			cityList.push(item.innerHTML);
		});

		cityList.sort();

		list.innerHTML = "";

		cityList.forEach(item => {
			list.innerHTML += `<li>${item}</li>`;
		});
	}

	btn.addEventListener('click', sortList);

});