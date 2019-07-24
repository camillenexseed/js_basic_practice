let score = 60;

if (score >= 80) {
  console.log(`${score}点、合格`)
} else if (score >= 50) {
  console.log(`${score}点、惜しい`);
} else if (score >= 30) {
  console.log(`${score}点、残念`);
} else {
  console.log(`${score}点、また来年`);
}

// ifとforの練習
for(let i = 1; i <= 30; i++) {
  // i % 3 == 0
  // 3で割った時の余りが０になる時
  if(i % 3 == 0){
    console.log('あほ');
  }else{
    console.log(i);
  }
}

// 5の倍数と3の倍数の時にメッセージ
// console.log
// それ以外は数字
// 1 ~ 100まで

for(let i = 1; i <= 100; i++) {
   if(i % 3 == 0 || i % 5 == 0){
     console.log('Hello, Wold');
   } else {
     console.log(i);
   }
}

// 3で割り切れるときはFizz
// 5で割り切れるときはBuzz
// 両方で割り切れるときはFizzBuzz
// それ以外は1 ~ 100まで
// 値はconsole.logで出力
// できた人はswitchでも書いてみる(宿題)

// for(let i = 1; i <= 100; i++) {
//   if(i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 == 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

for(let i = 1; i <= 100; i++) {
  switch(0){
    case i % 15:
      console.log('FizzBuzz');
      break;
    case i % 5:
      console.log('Buzz');
      break;
    case i % 3:
      console.log('Fizz');
      break;
    default:
      console.log(i);
      break;
  }
}

// 昨日の復習
// alert(),confirm(),prompt()
// かえってきた値を利用して分岐
// let fish = confirm('あなたは魚が好きですか？');

// if (fish) {
//   console.log('たまにはお肉も食べてね。');
// } else {
//   console.log('背が伸びませんよ。');
// }

// let fruit = prompt('あなたが好きなフルーツな何ですか?');

// // テンプレートリテラル
// // console.log(`私の所属先は、${schoolName}です`);
// // 私の好きなフルーツは変数です。
// // まずはconsole.logで出力する

// console.log(`私の好きなフルーツは${fruit}です。`);

// switchで切り替える

// りんご 青森産が美味しいです
// みかん 温州みかんがお勧めです
// バナナ フィリピンが名産です
// 桃 といえば岡山ですね!
// その他 何かしらのメッセージ

// switch(fruit){
//   case 'りんご':
//     console.log('青森産が美味しいです');
//     break;
//   case 'みかん':
//     console.log('温州みかんがお勧めです');
//     break;
//   case 'バナナ':
//     console.log('フィリピンが名産です');
//     break;
//   case '桃':
//     console.log('といえば岡山ですね!');
//     break;
//   default:
//     console.log('何かしらのメッセージ');
//     break;
// }

// // 発展系
// switch(fruit){
//   case 'りんご':
//     console.log(`${fruit}青森産が美味しいです`);
//     break;
//   case 'みかん':
//     console.log(`${fruit}温州みかんがお勧めです`);
//     break;
//   case 'バナナ':
//     console.log(`${fruit}フィリピンが名産です`);
//     break;
//   case '桃':
//     console.log(`${fruit}といえば岡山ですね!`);
//     break;
//   default:
//     console.log(`${fruit}何かしらのメッセージ`);
//     break;
// }

// あなたは生まれ年を入れたら幾つかを出力する
// 2019(今年)

function getAge(age){
  console.log(2019 - age);
}

getAge(1977);
getAge(2000);

// 1 ~ 100 の繰り返し処理
// n で割り切れる数だけを出力する関数を作ってください
// 出力は console.log

// ポイント
// 分解する(必ずこれを先にやる!!!)
// まずは 1 ~ 100 までの繰り返し処理を行う >> 出力
// i が n で割り切れる時の処理を追加する >> 出力

function calc(n) {
  for(let index = 1; index <= 100; index++){
    if(index % n === 0) {
      console.log(index);
    }
  }
}

calc(15);