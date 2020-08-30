// 4章【jQueryを使ってみよう】
/*
$(document).ready(function(){
	jQueryプログラムの内容
})
↓省略形
$(function(){
	jQueryプログラムの内容
})
*/
/*
プログラムの書き方
$(セレクタ).メソッド.(パラメーター);
セレクタは対象箇所
メソッドは何を行うのか
パラメーターは内容
→"どこに何をするか"を記述
*/
$(document).ready(function () {
	$('body').html('<h1>Hello jQuery!!</h1>');
});

$(function(){
	$("body").html("<h2>省略形</h2>");
})