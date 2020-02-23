import 'normalize.css';
import { dependency } from './dependency';
import './index.scss';

const response = dependency(true);
console.log('works?:', response);

// init
window.addEventListener('DOMContentLoaded', () => {
	const loadingSection = document.getElementById('loadingSection');
	if (loadingSection) {
		loadingSection.classList.add('hidden');
	}

	const mainSection = document.getElementById('mainSection');
	if (mainSection) {
		mainSection.classList.remove('hidden');
	}
});

const divWorks = document.getElementById('works');
if (divWorks) {
	divWorks.innerHTML = response;
}
