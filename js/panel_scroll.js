const panel = document.getElementById('panel');
let offset = 0;

window.addEventListener('wheel', (e) => {
	const delta = e.deltaY;
	offset -= delta * 0.5; // Điều chỉnh độ nhạy
	panel.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
});
