// 5章【jQueryでHTMLのCSS要素を操作しよう】
// box1を青色長方形に変更
$(function(){
	$(".box1").css({
		"background-color": "#0000FF",
		"height": "100px"
	});
});

// box2を上から下へスライド
$(function(){
	$(".box2").slideDown();
});

// box3を下から上のスライド
$(function(){
	$(".box3").slideUp();
});

// box4を非表示から表示
$(function(){
	$(".box4").show();
});

// box5を表示から非表示
$(function(){
	$(".box5").hide("slow");
});