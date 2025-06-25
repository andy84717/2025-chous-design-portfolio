 // JavaScript for mobile menu toggle
    const mainNav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');

    // 行動版選單切換邏輯
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('show-nav'); // 切換導覽列的顯示/隱藏類別
      hamburger.classList.toggle('is-active'); // 切換漢堡圖示的動畫類別
    });