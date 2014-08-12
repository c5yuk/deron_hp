$(document).ready(function() {
 
//ページトップボタンにつけたid名を入れてください 
 var topBtn = $('#pagetop');
 topBtn.hide();
 
 //スクロールが100に達したらボタン表示
 $(window).scroll(function () {
if ($(this).scrollTop() > 500) {
 topBtn.fadeIn();
 } else {
 topBtn.fadeOut();
 }
 });

});