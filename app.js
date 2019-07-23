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

for(let i = 1; i <= 30; i++) {
  // i % 3 == 0
  // 3で割った時の余りが０になる時
  if(i % 3 == 0){
    console.log('あほ');
  }else{
    console.log(i);
  }
}