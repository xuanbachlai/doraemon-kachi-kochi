const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.style.zIndex = 1000;

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const flakes = [];

function createFlakes(count) {
    for (let i = 0; i < count; i++) {
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            speedY: Math.random() * 1 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.5
        });
    }
}

function drawFlakes() {
    ctx.clearRect(0, 0, width, height);

    for (let f of flakes) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(173, 216, 230, ${f.opacity})`; // màu tuyết xanh nhạt
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    moveFlakes();
}

function moveFlakes() {
    for (let f of flakes) {
        f.y += f.speedY;
        f.x += f.speedX;

        // Khi bông tuyết rơi xuống quá đáy màn hình, đặt lại từ trên
        if (f.y > height) {
            f.y = -f.radius;
            f.x = Math.random() * width;
        }

        // Nếu ra khỏi trái/phải, cho quay lại
        if (f.x < 0) f.x = width;
        if (f.x > width) f.x = 0;
    }
}

function animate() {
    drawFlakes();
    requestAnimationFrame(animate);
}

createFlakes(100); // Số lượng bông tuyết
animate();
