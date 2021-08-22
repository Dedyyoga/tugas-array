// No 1
let number = [1, 2, 3];
let total = 0;
for (let i = 0; i < number.length; i++) {
  total += number[i];
}
console.log(total);

// No 2
function reverseArray(array1) {
  var newArray = [];
  let array = 0;
  for (var i = array1.length - 1; i >= 0; i--) {
    let arr = array1[i].toString();
    let kebalikan = "";
    for (let j = arr.length - 1; j >= 0; j--) {
      kebalikan += arr[j];
    }
    newArray[array] = Number(kebalikan);
    array++;
  }
  return newArray;
}
console.log(reverseArray([123, 456, 789101112]));

// untuk line 26 sama 27 di pindahin ke line 24 jadilah asterik loop dalam array (ga sengaja nemu) tolong bisa dijelasin knp

// No 3

function uniQue(array) {
  let hasil = [];
  for (let i = 0; i < array.length; i++) {
    let tem = 0;
    for (let j = 0; j < hasil.length; j++) {
      if (array[i] === hasil[j]) {
        tem = 1;
      }
    }
    if (!tem) {
      hasil.push(array[i]);
    }
  }
  return hasil;
}
console.log(uniQue([1, 2, 3, 4, 4]));
// maaf kak saya belum ngerti caranya

// No 4
function jajanBoba(uangJajan) {
  const listBoba = [
    ["Xing Fu Tang", 38000],
    ["OneZo", 53500],
    ["KOI The", 36000],
    ["Chatime", 25000],
    ["Kokumi", 42000],
    ["Bubble Station Milk", 13000],
  ];
  console.log(`David mulai jajan dengan uang jajan ${uangJajan} rupiah`);
  // pengecekan panjang list boba
  for (let i = 0; i < listBoba.length; i++) {
    if (uangJajan > listBoba[i][1]) {
      console.log(`Dengan uang ${uangJajan}, Bisa membeli ${listBoba[i][0]}, Setelah membeli ${listBoba[i][0]}, Uangnya Berkurang ${listBoba[i][1]}`);
      uangJajan -= listBoba[i][1];
    } else {
      console.log(`Dengan uang ${uangJajan}, Tidak bisa membeli ${listBoba[i][0]}`);
    }
    while (i === 5) {
      console.log(`David pulang dengan uang tersisa ${uangJajan}`);
      break;
    }
  }

  return uangJajan;
}
jajanBoba("100000");

// maaf saya belum sempat kerjain karena saya tidak terlalu mengerti cara nya.
