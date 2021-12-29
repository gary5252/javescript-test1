//全域變數
let x = 10;
let radius = 10;
const PI = 3.1415926;
// let radius = prompt('輸入半徑:');
// console.log(typeof (radius), radius + 10)
let area = radius ** 2 * PI
// console.log(area)

// prompt() 等同於 Python 的 input()
{
    // 我是註解
    // Ctrl + / 註解快捷鍵(同 CSS)
    // 區域變數
    // 宣告 let 記得加 因為預設使用 var 會直接蓋過前面所有宣告那怕是在區域也會蓋過全域的
    // const 宣告常數
    //let 無法重複宣告 但可以重複 define
    let y = '20';
    // console.log(x + y);
}
// console.log(x);

// document.write(typeof (radius), area);

// document.write('<h2>' + area + '</h2>');

let email = 'gary@gmail.com';
// console.log(email);

//   初始     判斷式            遞增(i+=1)
for (let i = 0; i < email.length; i++) {
    // console.log(i, email[i]);
}
// console.log(email[email.length - 1]);

// console.log('A' < 'a');

// javascript 會自動轉換string -> number
// console.log(25 == '25');

// 三個等於為值跟型態一致
// console.log(25 === '25');

let z = '';
// '',0,null,Nan,undefine => False
// if/for/while ( 判斷式 ) { 程式區段 };
if (!z) {
    // console.log("OK");
}

x = 10;
y = 30;
z = 50;
if (x > y || x < z) {
    // console.log("OK");
}
// // 0~1 浮點數
// console.log(Math.random());
// // 0~9.99999... 浮點數
// console.log(Math.random() * 10);
// // 0~9 整數  floor 小於等於的最大整數
// console.log(Math.floor(Math.random() * 10));
// // 1~10 整數  ceil 大於等於的最小整數
// console.log(Math.ceil(Math.random() * 10));
// // 10~100 整數                      ( end - start +1(包含終止值) ) +start
// console.log(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
while (true) {
    let number = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    // console.log(number);
    if (number == 100) {
        break;
    }
}

const get_random_number = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

let lotto = ' ';
let list = ' ';
let start = 1;
let end = 49;

function getLottoNumber(start, end, numbers, special = false) {
    lotto = [];
    let count = 0;
    do {
        number = get_random_number(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            count++;
        }
    } while (count < numbers);
    lotto.sort((a, b) => {
        return a - b;
    });

    if (special) {
        number = get_random_number(start, end);
        lotto.push(number);
    }
    lotto.join(' ');
    return lotto;
}

let lottoEl = '<ul>';
for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 6; i++) {
        number = Math.floor(Math.random() * (end - start + 1)) + start;
        // lotto = `第${i + 1}個號碼為:${number}`;
        // console.log(lotto);
        // document.write('<h3>' + lotto + '</h3>') 同下下
        // ` 是 TAB 上面那顆 ${外接變數} 只有 ` `(反引號) 可以使用
        // document.write(`<h3>${lotto}</h3>`);
        list += (number + '&nbsp;&nbsp;&nbsp;');
    }
    // document.write(`<h3>第${j + 1}組號碼:${list}</h3>`);
    lottoEl += `<li>第${j + 1}組號碼:&nbsp;${list}</li>`;
    list = ' ';
}

lottoEl += '</ul>';
// document.write(lottoEl);

let students = [
    ['jerry', 78, 67, 89],
    ['mary', 100, 99, 88],
    ['kevin', 77, 99, 77],
];

for (let a = 0; a < students.length; a++) {
    // slice 切割(起始值, 終點值)
    const scores = students[a].slice(0, students[a].length);
    // document.write(scores + '<br>');

    // for (let b = 0; b < students[a].length; b++) {
    //     document.write(students[a][b] + '&nbsp;&nbsp;');
    // }
    // document.write('<br>');
}
// 宣告函式
function getBmi(height, weight, point = 2) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(point);
    return bmi;
}
// document.write(getBmi(178, 70, 2) + '<br>');
// 新版宣告函式 (轉換成類似宣告變數的寫法)
const get_bmi = (height, weight, point = 2) => (weight / ((height / 100) ** 2)).toFixed(point);
// document.write(get_bmi(178, 70, 2) + '<br>');
// document.write(`產生六個數字家特別:${getLottoNumber(1, 49, 6, true)}`);


const title = document.querySelector('h1');
const subtitle = document.querySelector('h3');
const lottoEl2 = document.querySelector('.lotto-number>ul');
const startBtn = document.querySelector('#start');

//  addEventListener 是讓後端監聽前端動作的函式 裡面也需要有能反應的函式
startBtn.addEventListener('click', () => {
    console.log('click!');     //  ()function
    lottoEl2.innerHTML = '<ul>';
    let list1 = '';
    for (let j = 0; j < 5; j++) {
        list1 += getLottoNumber(1, 49, 6, true);
        lottoEl2.innerHTML += '<li>' + list1 + '</li>';
        list1 = '';
    }
    lottoEl2.innerHTML += '</ul>';
});

title.innerText = '大樂透號碼';
subtitle.innerHTML = `<h2><i>${subtitle.innerText}即將開獎，請按鈕開始!</i></h2>`;

