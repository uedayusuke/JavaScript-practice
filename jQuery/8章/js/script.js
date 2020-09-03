// 8章【jQueryのプラグインを導入しよう】

$(".theTarget").skippr({
	// スライドショーの設定(fade か slide)
	transition : "fade",
	// 変化にかける時間(ミリ秒)
	speed : 1000,
	// easingの種類→アニメーションの進行速度
	easing : "easeOutQuart",
	// ナビゲーションの形(block か buddle)
	navType : "buddle",
	// 子要素の種類(div か img)
	childrenElementType : "div",
	// ナビゲーション矢印の表示(true か false)
	arrows : false,
	// 自動再生(true か false)
	autoPlay : true,
	// 自動再生時の間隔(ミリ秒)
	autoPlayDuration : 2000,
	// キーボードの矢印キーにスライドを送る設定(true か false)
	keyboardOnAlways : true,
	// 1枚目に戻る矢印をつけるか否か(true:矢印を隠す か false:矢印を隠さない)
	hidePrevious : false
});