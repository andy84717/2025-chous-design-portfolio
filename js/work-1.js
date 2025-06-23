const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

      if (scrollToTopBtn && scrollToBottomBtn) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > window.innerHeight * 0.5) {
            scrollToTopBtn.classList.add("show");
          } else {
            scrollToTopBtn.classList.remove("show");
          }

          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;
          const scrollTop = document.documentElement.scrollTop;

          if (scrollTop + clientHeight < scrollHeight - 100) {
            scrollToBottomBtn.classList.add("show");
          } else {
            scrollToBottomBtn.classList.remove("show");
          }
        });

        scrollToTopBtn.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });

        scrollToBottomBtn.addEventListener("click", () => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });

        window.addEventListener("load", () => {
          window.dispatchEvent(new Event("scroll"));
        });
      }