'use strict';

// FAQ SECTION
const animateFAQ = () => {
	document.querySelector('.faq__questions').addEventListener('click', ({ target }) => {
		if (!target.dataset.tab) return;

		// get active tab
		const activeTab = document.querySelector('.tab-active');
		// if user clicked active tab, dont animate
		if (target.dataset.tab === activeTab.dataset.tabTarget) return;

		// hide active tab and clicked tab
		activeTab.classList.remove('tab-active');

		document.querySelector(`[data-tab-target=${target.dataset.tab}]`).classList.add('tab-active');
	});
};

animateFAQ();
