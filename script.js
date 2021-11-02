'use strict';

const question = document.getElementById('question');
const result = document.getElementById('result');
const resultBtn = document.getElementById('resultBtn');
const backBtn1 = document.getElementById('backBtn1');
const backBtn2 = document.getElementById('backBtn2');
const copyBtn = document.getElementById('copyBtn');
const error = document.getElementById('error');
let btn = document.getElementsByClassName("btn");
backBtn1.style.display = 'none';
backBtn2.style.display = 'none';
result.style.display = 'none';

resultBtn.addEventListener('click', () => {
  let count = 0;
  var sum = 0;
  // i++ = i +1
  // iが0からbtn.lengthである間に、iに1ずつ追加していく
  //iはカウンターの変数（習慣）
  for (let i = 0; i < btn.length; i++) {
    //もしボタンのi個目がチェックされたのがtrueなら、
    if (btn[i].checked) {
      //カウンターに1を追加
      count++;
      //i個目のボタンのvalueを変数化
      let countVal = btn[i].value;
      //+=  sum = sum + parseInst(countVal)
      //parseInt文字列を整数に変換する
      // sum = sum + i個目のボタンのvalue
      sum += parseInt(countVal);
    }
  }
  if (count < 4) {
    error.innerHTML = "選択されていない項目があります。";
  } else {
    backBtn1.style.display = 'block';
    backBtn2.style.display = 'block';
    result.style.display = 'block';
    resultBtn.style.display = 'none';
    copyBtn.style.display = 'block';
    error.innerHTML = "";



    function checkedQuestion(id) {
      return document.getElementById(id).checked
    }
    function displayAnswer(id) {
      return document.getElementById(id).style.display = 'block';
    }

    if (checkedQuestion('q2-btob')) {
      displayAnswer('a2-btob');
    } else if (checkedQuestion('q2-btoc')) {
      displayAnswer('a2-btoc');
    } else if (checkedQuestion('q2-both')) {
      displayAnswer('a2-both');
    }

    if (checkedQuestion('q1-video')) {
      displayAnswer('a1-video');
    } else if (checkedQuestion('q1-doc') || checkedQuestion('q1-ebook')) {
      displayAnswer('a1-doc');
    }

    if (checkedQuestion('q3-notAround') && checkedQuestion('q4-second')) {
      displayAnswer('a3-notAround-a4-second');
    } else if (checkedQuestion('q3-notAround') && (checkedQuestion('q4-first') || checkedQuestion('q4-third'))) {
      displayAnswer('a3-notAround');
    } else if (checkedQuestion('q3-talked')) {
      displayAnswer('a3-talked');
    }

    if (checkedQuestion('q1-video') && (checkedQuestion('q4-first') || checkedQuestion('q4-second'))) {
      displayAnswer('a1-video-a4-firstOrSecond');
    } else if ((checkedQuestion('q1-doc') || checkedQuestion('q1-ebook')) && (checkedQuestion('q4-first') || checkedQuestion('q4-second'))) {
      displayAnswer('a1-doc-a4-firstOrSecond');
    } else if ((checkedQuestion('q1-doc') || checkedQuestion('q1-ebook') || checkedQuestion('q1-video')) && checkedQuestion('q4-third')) {
      displayAnswer('a1-docOrVideo-a4-third');
    }

  }

});


//戻るボタンを押したとき
backBtn2.addEventListener('click', () => {
  location.reload();
});

backBtn1.addEventListener('click', () => {
  location.reload();
});

//コピーボタン
const copyText = (result) => {
  // テキストの選択
  document.getSelection().selectAllChildren(result);
  //選択範囲のコピー
  document.execCommand("copy");
  // テキスト選択の解除
  document.getSelection().empty(result);
  alert("Copied to clipboard!");
}

copyBtn.addEventListener('click', () => {
  copyText(result);
});






