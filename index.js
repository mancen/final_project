const menuBtn = document.querySelector(".menu-button"); // 行動版選單按鈕（漢堡按鈕）元素
const navList = document.querySelector(".nav-list"); // 主導覽選單元素

// 事件監聽器（白話翻譯版：當使用者點擊漢堡選單按鈕，我要做什麼事情）
menuBtn.addEventListener("click", function () {
    navList.classList.toggle("active"); // 我要切換主導覽選單元素上的 class，如果有 active 就移除，沒有就加上
});