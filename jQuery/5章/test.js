// 5章確認問題

// boxを青色長方形に変更
$(function(){
	$(".box").css({
		"background-color": "blue",
		"width": "200px"
	});
});

// boxを下から上にスライド
$(function(){
	$(".box").slideUp();
});


// boxを1秒かけて再表示
$(function(){
	$(".box").show(1000);
});

// boxをf1.5秒けてadeout
$(function(){
	$(".box").fadeOut(1500);
});