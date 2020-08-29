// 3章 【関数】

/* 宣言
var alertString;
alertString = addString("WecCamp");

// alertで呼び出し
alert(alertString);

// 関数
// function 関数名(引数){処理 return}
function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
} */

// 入力ダイアログ
// 宣言
var promptStr = prompt("何か好きな文字を入力してください。");
// promptStrで入力された内容を出力
alert(promptStr)

//複数の関数を定義
// じゃんけん
// promptでじゃんけんの手を選ばせる
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

// ランダムに手を選択する関数を呼び出し、js_handに代入
var js_hand = getJShand();


// 勝敗を決める関数にそれぞれの手を代入したものを呼び出し、judgeに代入
var judge = winLose(user_hand, js_hand);

// 結果を出力
// \nで改行
alert("あなたの選んだ手は" + user_hand + "です。\n僕が選んだ手は" + js_hand + "です。\nよって結果はあなたの" + judge);

// ランダムに手を選択する関数
function getJShand(){
  // Math.random 0~1の間で浮動小数点の乱数を作る
  // Math.floor 引数より小さい最大の整数を返す
  // 結果0~2の整数がランダムで生まれる
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;

  // 条件分岐でjs_hund_numにじゃんけんの手を付与
  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }

  // 戻り値でじゃんけんの手を出力
  return hand_name;
}

// 勝敗を決める関数
function winLose(user, js){
  var winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  }else if(user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    } else if (js == "パー") {
      winLoseStr = "勝ち";
    }
  }else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr == "あいこ";
    }
  }

  return winLoseStr;
}