// 7章【thisとchildren】
// children
// ".children()"でHTML要素直下全ての子要素を取得
$(function(){
	$("button").on("click", function(){
		$("ul").children().css("color","red");
	});
});