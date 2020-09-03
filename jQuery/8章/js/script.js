// 8章【jQueryのプラグインを導入しよう】

$(".theTarget").skippr({
	transition : "fade",
	speed : 1000,
	easing : "easeOutQuart",
	navType : "block",
	childrenElementType : "div",
	arrows : false,
	autoPlay : true,
	autoPlayDuration : 2000,
	keyboardOnAlways : true,
	hidePrevious : false
});