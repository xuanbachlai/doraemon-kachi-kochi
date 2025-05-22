const panel = document.getElementById('panel');
let offset = 0;
let startY = 0;

// Cuộn bằng chuột (PC)
window.addEventListener('wheel', (e) => {
  const delta = e.deltaY;
  offset -= delta * 0.5; // Điều chỉnh độ nhạy chuột
  applyTransform();
});

// Vuốt tay (Mobile)
window.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener('touchmove', (e) => {
  const deltaY = e.touches[0].clientY - startY;
  offset += deltaY * 0.5; // Điều chỉnh độ nhạy vuốt
  startY = e.touches[0].clientY; // cập nhật lại vị trí bắt đầu để liên tục tính
  applyTransform();
});

function applyTransform() {
  // Giới hạn offset nếu muốn, ví dụ:
  const maxOffset = 500;   // Giới hạn trượt xuống
  const minOffset = -500;  // Giới hạn trượt lên
  offset = Math.max(Math.min(offset, maxOffset), minOffset);

  panel.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
}