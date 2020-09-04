// 9章【トップに戻るを作ってみよう】

$(function(){
	// "calss"ではなく"id"のため$("#id名 要素名")で指定
	$("#back a").on("click", function(event){
		// #backの<a>タグがクリックされた時の処理
		// "animate"でアニメーション効果を設定
		/*
		("セレクタ").animate({
			変化対象のプロパティ名:変化値
		}, アニメーションの動作時間);
		*/
		// bodyまたはhtmlを指定→ユーザーの利用環境で対象が変化するため
		$("body, html").animate({
			// scrollTopで到着点の指定→0なので最上部
			scrollTop:0
		}, 800);
		// event.preventDefault();でaタグの機能を無効にする
		event.preventDefault();
	});
});