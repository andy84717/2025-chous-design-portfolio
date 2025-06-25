const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

    // 檢查按鈕元素是否存在，以避免在沒有這些按鈕的頁面報錯
    if (scrollToTopBtn && scrollToBottomBtn) {
      // 監聽頁面滾動事件
      window.addEventListener("scroll", () => {
        // 顯示/隱藏「回到頂部」按鈕
        // 當捲動距離超過視窗高度的 0.5 倍時顯示
        if (window.scrollY > window.innerHeight * 0.5) {
          scrollToTopBtn.classList.add("show");
        } else {
          scrollToTopBtn.classList.remove("show");
        }

        // 顯示/隱藏「回到底部」按鈕
        const scrollHeight = document.documentElement.scrollHeight; // 整個文件的高度
        const clientHeight = document.documentElement.clientHeight; // 視窗的可見高度
        const scrollTop = document.documentElement.scrollTop; // 當前滾動的位置

        // 當不在最底部時顯示「回到底部」按鈕 (例如，距離底部還有 100px 以上時顯示)
        if (scrollTop + clientHeight < scrollHeight - 100) {
          scrollToBottomBtn.classList.add("show");
        } else {
          scrollToBottomBtn.classList.remove("show");
        }
      });

      // 「回到頂部」按鈕點擊事件
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 平滑滾動效果
        });
      });

      // 「回到底部」按鈕點擊事件
      scrollToBottomBtn.addEventListener("click", () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight, // 滾動到整個文件的底部
          behavior: "smooth", // 平滑滾動效果
        });
      });
    }