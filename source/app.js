import storage from './storage';

export default function increment() {
	console.log('increment')
	const h1 = document.getElementById('count');
	h1.innerHTML = --storage.clicks;
}