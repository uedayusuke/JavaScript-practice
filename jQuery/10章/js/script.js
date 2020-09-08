// 10章【ハンバーガーメニューを作ってみよう】
$(function(){
	$(".menu-trigger").on("click", function(event){
		// menu-triggerをクリックした時のアクション
		// thisは要素（menu-trigger）を指す
		// toggleClassでクリックされた時"active"が追加され、もう一度クリックすると削除される
		$(this).toggleClass("active");
		// fadeToggleで要素をフェードアウトさせる
		$("#sp-menu").fadeToggle();
		event.preventDefault();
	});
});