// 6章【イベントを検出しよう】

// mouseover
// マウスが乗ると青色に変更
/*
$("セレクタ").イベント(function(){
	イベント発生時の処理
});
*/
$(function(){
	$(".box1").mouseover(function(){
		$(".box1").css({"background-color": "#0000FF"});
	});
	// mouseout
	// マウスが離れたら赤に戻る
	$(".box1").mouseout(function(){
		$(".box1").css({"background-color": "#FF0000"});
	});
});

