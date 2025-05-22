const texts = [
	'"Chuyến thám hiểm ở Nam Cực" là một bộ phim hoạt hình khoa học viễn tưởng trong series Doraemon Movie thực hiện bởi đạo diễn Takahashi Atsushi.',
	'Chủ đề chính là "Tình bạn này, 100.000 (mười vạn) năm sau vẫn sẽ không đóng băng"',
	"Tại Việt Nam, phim được khởi chiếu lần đầu vào ngày 26 tháng 5 năm 2017 với hai định dạng: phụ đề và lồng tiếng Việt. Phần lồng tiếng Việt được thực hiện bởi đội ngũ diễn viên lồng tiếng của công ty ACE Media.",
	"Sau này phiên bản lồng tiếng Việt được POPS Worldwide mua bản quyền và phát hành trên kênh YouTube POPS Kids vào ngày 15 tháng 5 năm 2024."
  ];
  
  const container = document.getElementById("typing-sequence");
  const cursor = document.getElementById("cursor");
  
  let paragraphIndex = 0;
  let charIndex = 0;
  let currentP, textSpan;
  
  function typeNextChar() {
	if (charIndex === 0) {
	  currentP = document.createElement("p");
	  textSpan = document.createElement("span"); // span chứa text
	  currentP.appendChild(textSpan);
	  currentP.appendChild(cursor); // cursor luôn đi sau textSpan
	  container.appendChild(currentP);
	}
  
	if (charIndex < texts[paragraphIndex].length) {
	  textSpan.textContent += texts[paragraphIndex][charIndex];
	  charIndex++;
  
	  setTimeout(typeNextChar, 35);
	} else {
	  charIndex = 0;
	  paragraphIndex++;
	  if (paragraphIndex < texts.length) {
		setTimeout(typeNextChar, 1000);
	  } else {
		setTimeout(resetTyping, 3000);
	  }
	}
  }
  
  function resetTyping() {
	container.innerHTML = "";
	container.appendChild(cursor); // giữ lại cursor
	paragraphIndex = 0;
	charIndex = 0;
	typeNextChar();
  }
  
  window.onload = typeNextChar;
  