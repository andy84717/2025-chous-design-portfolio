      const carousel = document.querySelector(".carousel");
      const carouselImages = document.querySelector(".carousel-images");
      const images = document.querySelectorAll(".carousel-images img");
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      let index = 0;

      function updateCarousel() {
        const width = carousel.clientWidth;
        carouselImages.style.transform = `translateX(-${index * width}px)`;
      }

      // 初始定位一次
      window.addEventListener("load", updateCarousel);
      // 當視窗尺寸變化時，也要更新一次
      window.addEventListener("resize", updateCarousel);

      nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
      });

      prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
      });

      // 監聽頁面滾動事件
      window.addEventListener("scroll", () => {
        // 判斷是否顯示回到頂部按鈕
        if (window.scrollY > 200) {
          // 當捲動超過 200px 時顯示
          scrollToTopBtn.classList.add("show");
        } else {
          scrollToTopBtn.classList.remove("show");
        }

        // 判斷是否顯示回到底部按鈕
        // 當前滾動位置 + 視窗高度 >= 整個文檔高度 - 200px (接近底部時隱藏或顯示)
        const scrollHeight = document.documentElement.scrollHeight; // 整個文檔的高度
        const clientHeight = document.documentElement.clientHeight; // 視窗可見高度
        const scrollTop = document.documentElement.scrollTop; // 當前滾動位置

        // 當不在最底部時顯示「回到底部」按鈕
        if (scrollTop + clientHeight < scrollHeight - 200) {
          // 離底部還有 200px 以上時顯示
          scrollToBottomBtn.classList.add("show");
        } else {
          scrollToBottomBtn.classList.remove("show");
        }
      });

      // 回到頂部按鈕點擊事件
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 平滑滾動
        });
      });

      // 回到底部按鈕點擊事件
      scrollToBottomBtn.addEventListener("click", () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight, // 滾動到整個文檔的底部
          behavior: "smooth", // 平滑滾動
        });
      });

      // 初始化：在頁面載入時檢查是否需要顯示按鈕
      window.addEventListener("load", () => {
        // 觸發一次滾動事件檢查，以設定按鈕初始狀態
        window.dispatchEvent(new Event("scroll"));
      });