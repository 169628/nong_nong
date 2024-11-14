import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

/* 浮動購物車按鈕，主選單看不見時才出現 */
document.addEventListener("scroll", (event) => {
    if (document.documentElement.scrollTop > 200) {
        document.querySelector('.page-cart').style.opacity = "1";
    } else {
        document.querySelector('.page-cart').style.opacity = "0";
    }
});