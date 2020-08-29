// 3章 【関数】

// 宣言
var alertString;
alertString = addString("WecCamp");

// alertで呼び出し
alert(alertString);

// function 関数名(引数){処理 return}
function addString(strA){
	var addStr = "Hello" + strA;
	return addStr;
}