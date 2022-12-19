

// ====素数判定：しらみぶつし=== //

// primenumberというボタンがクリックされると...という関数を作る

function primeNumber() { 
  const number = Number(document.getElementById('inputNumber').value);
  
  // Is it 1?
  if (number === 1){
   console.log('素数ではありません')
   document.getElementById('result').innerHTML = '素数ではありません';
  }

  // Is it greater than 1?
  else if (number > 1) {
 
    // 2 から number-1 まで順にあてはめていき
    for(let i = 2; i < number; i++){
  
      //numberがiで割り切れた場合 
      if (number % i === 0) {
        // isPrime = false;
        document.getElementById('result').innerHTML = '素数ではありません';
        console.log('素数ではありません')
        break;
      } else{
      // isPrime = true;
      document.getElementById('result').innerHTML = '素数です';
      console.log('素数です')
    }
   } 
 }
}

// enterキーでも判定するように設定
const inputNumber = document.getElementById('inputNumber');
inputNumber.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    console.log('aiueo');
    primeNumber();
  }
})


// ====２．素数判定：平方根のしらみぶつし=== //

function primeNumber2() { 
  const number2= Number(document.getElementById('inputNumber2').value);
  
  // Is it 1?
  if (number2 === 1){
   console.log('素数ではありません')
   document.getElementById('result2').innerHTML = '素数ではありません';
  }
  else if (number2 > 1) {
 
    // 2 から number2の平方根 まで順にあてはめていき
    for(let i = 2; i < Math.sqrt(number2); i++){
  
      if (number2 % i === 0) {
        // isPrime = false;
        document.getElementById('result2').innerHTML = '素数ではありません';
        console.log('素数ではありません')
        break;
      } else{
      // isPrime = true;
      document.getElementById('result2').innerHTML = '素数です';
      console.log('素数です')
    }
   } 
 }
}

const inputNumber2 = document.getElementById('inputNumber2');
inputNumber2.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    primeNumber2();
  }
})

// ====３．全ての素数=== //

function getPrimeSet() {
    const number3 = Number(document.getElementById('primeSetInput').value);  

    // 入力された数字(number3)と同数の配列sieveを作る。
    // 例：number3が5なら[〇,〇,〇,〇,〇]という５つの空の要素？
    // それとも[1,2,3,4,5]という配列？？
    const sieve = new Array(number3 + 1);
    
    // スタート時点では配列の中は全部trueとする。
    // [true, true, true, true, true]等
    sieve.fill(true);

    // １は素数ではない。
    // number3=1 の場合、配列内の要素は[1]のみ。
    sieve[1] = false;

    // ブーリアン配列の中で繰り返すループを作る
    for (let i = 2; i <= number3 + 1; i++) {

      
      // trueだったら、どうするか、というif文。
       // 最初に全部trueにしている。
       // iは2から始まるので、まず2について処理する。
       // i=2の時、sieve配列は[true,true]、だからif文に従い処理が開始される。

      if(sieve[i] === true){
      
        // その倍数をふるい落とす。倍数といっても×２ではなく、＋２＋２＋２という足し算でふるい落とす（注２）
          // ループの中で、更に別条件で繰り返すjを使った第二ループを作る。
          // jはi×2 から始まる。i=2なら、最初のjは4。jをiから始めると、２，３，５といった素数が除かれてしまう。i*2から始めれば、2の倍数を除く時は４から、3の倍数を除く時は9から除ける（6は2の倍数で除外済み）。
          // 次のjは、「j+=i」つまり、[j = j + i] なので、最初のj（=4）=j（=4) ＋i (=2)=4+2=6（注１）
          // 次のjは、6＋2＝8....と２の倍数が選ばれる

       for(let j = i *2 ; j <= number3 + 1; j += i){
          sieve[j] = false;
        }
      }
    }
    let numbers = [];
    for(let i = 0; i <= number3 + 1; i++) {
      if(sieve[i] === true){
        // console.log(i)
        numbers.push(i);
      }
      const primes = new Array(Number(sieve[i]===true.value))
      document.getElementById('result3').innerHTML = number3 + '以下の素数は'+ numbers;
    }
}

const primeSetInput = document.getElementById('primeSetInput');
primeSetInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    getPrimeSet();
  }
})

// ==注意==
// （注１）j+=iにすることで、i=2なら+2+2+2+2、i=3なら+3+3+3+3となる。
  // これが仮に、j++としてしまうと、最初j=4の後のjは5になってしまい、5が消える。その次は6になり6が消える。
  // 結果、4以上は全部falseになってしまう。

  // （注２）i=11 だったらどうだろう。ワードメモ参照。

// ==疑問点==

// sieveがboolean(ture, falseタイプ）とはどこで指定しているのか？
//iが素数だったら、その倍数をふるい落とす
  // for(let j = i * 2; j <= num2; j += i)
  // j = i * 2 のどこが倍数なのか？2倍では？　
  // 例えば、num2=11, i=5 だとすると、j=5*2=10,  
  // 「j += i」とは「j = j + i」の意味なので、新しいjは10＋5＝15???




// function primeNumber(number) {
  // if (number === 1){
    // return '素数ではありません'
  // }　if (number === 2){
    // return '素数です！'
  // }　if (number )
