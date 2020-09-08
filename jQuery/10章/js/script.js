// 10章【ハンバーガーメニューを作ってみよう】
$(function(){
	$(".menu-trigger").on("click", function(event){
		$(this).toggleClass("active");
		$("#sp-menu").fadeToggle();
		event.preventDefault();
	});
});