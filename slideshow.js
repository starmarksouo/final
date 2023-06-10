var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

function showSlide(n) {
// 隱藏當前活躍的幻燈片
slides[currentSlide].classList.remove('active');

// 設置要顯示的下一個幻燈片
currentSlide = (n + slides.length) % slides.length;

// 顯示新的幻燈片
slides[currentSlide].classList.add('active');
}

// 初始顯示第一個幻燈片
showSlide(0);
// 自動切換幻燈片的時間間隔（以毫秒為單位）
var interval = 3000;

// 自動切換幻燈片的函數
function autoSwitchSlide() {
showSlide(currentSlide + 1); // 切換到下一張幻燈片
}

// 啟動自動切換幻燈片的定時器
var timer = setInterval(autoSwitchSlide, interval);
if (currentSlide === slides.length - 1) {
currentSlide = 0; // 回到第一張幻燈片
} 