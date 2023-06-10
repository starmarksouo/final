document.addEventListener("DOMContentLoaded", function() {
    // 獲取所有的頁籤元素
    var tabs = document.getElementsByClassName("tab");
  
    // 綁定頁籤的點擊事件
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function(e) {
        e.preventDefault();
        // 獲取目前被點擊的頁籤的ID
        var currentTabId = this.getAttribute("href").substring(1);
  
        // 隱藏所有的內容區塊
        var tabContents = document.getElementsByClassName("tab-content");
        for (var j = 0; j < tabContents.length; j++) {
          tabContents[j].style.display = "none";
        }
  
        // 顯示與目前被點擊的頁籤相對應的內容區塊
        var currentTabContent = document.getElementById(currentTabId);
        currentTabContent.style.display = "block";
      });
    }
  });
setTimeout(function() {
    var image = document.getElementById("image");
    image.classList.remove("hidden");
    image.classList.add("visible");

    setTimeout(function() {
        image.classList.add("fade-out");

        setTimeout(function() {
            image.style.display = "none";
            var text = document.getElementById("text");
            text.style.display = "block";
        }, 200); 
    }, 500); 
}, 1500); 