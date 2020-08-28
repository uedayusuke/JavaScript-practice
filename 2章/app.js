// 2章【JavaScriptの基本文法】

// 変数
// var 変数名 = 内容;
var hello = "Hello World!";
alert(hello);

// 整数、負数を代入
var int1 = 1;
var int2 = -19;
alert(int1);
alert(int2);

// 小数点を代入
var float1 = 3.14;
alert(float1);

// 文字列を代入
var str1 = "本日も晴天なり";
alert(str1);

// 四則演算
// 足し算
alert(3 + 2);

// 引き算
alert(3 - 9);

// 掛け算
alert(2 * 9);

// 割り算
alert(10 / 4);

// 除算
alert(6 % 2);

// 文字列の結合
var str1 = "文字列の";
var str2 = "結合";
alert(str1 + str2);

// 条件分岐
var orange = 120;
var apple = 120;

if(orange < apple){
	alert("みかんはリンゴより安い");
}
else if(orange == apple){
	alert("みかんとリンゴは同じ値段");
}else{
	alert("みかんはリンゴより高い");
}

// 繰り返し処理
// while文
var max = 100;
var num = 1;
var count = 0;

// while(条件){処理}　
while(num < max){
	num = num * 2;
	count = count + 1;
}
alert("2を掛け続けて" + max + "超えるのに" + count + "回かかった。");

// for文
var i;
var num = 0;

// for(初期値;条件;増減値){処理}
for(i = 1; i < 11; i++){
	num = num + ;
}
alert("1から10まで足し算をした結果、合計は" + num + "です。");