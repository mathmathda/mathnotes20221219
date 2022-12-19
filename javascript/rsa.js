function factorize() {
  const num = Number(document.getElementById('primeFactor').value);  
  // 長さが未指定の配列[]を作る(new Array(3)とかは長さを指定する配列）
  const factors = [];


  // 割る数divisorが一つずつ増えるループを作る。範囲は2～num）
  for (let i = 2; i <= num; i++;) {
    if(num % i === 0){
      // iで割り切れた場合は、そのiを配列に足す（push()メソッド＝配列の末尾に要素を足す）
      factors.push(i);

      // numをそのdivisorで割った数に変える。例：num=12だった、2で割り切れたので、新しいnumは6。
      num = num / i;

      // ループ内で繰り返す。num=6, i=2も割り切れるので、また2が配列に加えられる。
      // 6÷2=3なので、新しいnum=3
  } 
  return factors;
  } 
  console.log(factorize().join(', '));
}    


//   factors.fill(true);
// factors[i] === true;
// } else {
  // factors[i] === false; 
// }
// console.log(i)
// document.getElementById('result').innerHTML = num + ' = ' + factors;
