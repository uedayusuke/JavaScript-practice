// 9章【トップに戻るを作ってみよう】

$(function(){
	// "calss"ではなく"id"のため$("#id名 要素名")で指定
	$("#back a").on("click", function(event){
		// #backの<a>タグがクリックされた時の処理
		$("body, html").animate({
			scrollTop:0
		}, 800);
		event.preventDefault();
	});
});