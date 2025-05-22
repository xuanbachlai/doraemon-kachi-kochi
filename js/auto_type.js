const text = '"Chuyến thám hiểm ở Nam Cực" là một bộ phim hoạt hình khoa học viễn tưởng trong series Doraemon Movie lấy cốt truyện của cố tác giả Fujiko.F.Fujio.';
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // tốc độ gõ
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      typeWriter();
    }, 3000); // đợi 2s rồi gõ lại
  }
}

window.onload = typeWriter;