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

// class属性を追加する／解除する
$(function(){
	$(".box2").mouseover(function(){
		$(".box2").addClass("box2-ext");
	});
	$(".box2").mouseout(function(){
		$(".box2").removeClass("box2-ext");
	});
})

// "click"の追加
$(function(){
	$(".box3").on("click", function(){
		$(".box3").addClass("box2-ext");
	});
	$(".box3").mouseout(function(){
		$(".box3").removeClass("box2-ext");
	})
});
