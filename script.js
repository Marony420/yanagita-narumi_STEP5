// =====================
// HTMLの要素を取得
// =====================

// 入力欄を取得
const textInput = document.getElementById("textInput");

// 表示ボタンを取得
const displayBtn = document.getElementById("displayBtn");

//　背景色変更ボタンを取得
const bgBtn = document.getElementById("bgBtn");

// ハイライト切り替えボタンを取得
const highlightBtn = document.getElementById("highlightBtn");

//　表示エリアを取得
const displayArea = document.getElementById("displayArea");

//　テーブル本体を取得
const tableBody = document.getElementById("tableBody");

// =====================
// 変数
// =====================

// 背景色の配列
const colors =[
    "lightblue",
    "lightgreen",
    "lightcoral"
];

//　現在の背景色番号
let colorIndex = 0;

// =====================
// 設問１・４
// 表示ボタン
// =====================

displayBtn.addEventListener("click", function () {

    // 入力値を取得
    const text = textInput.value;

    //空だったらアラート
    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    //表示エリアへ表示
    displayArea.textContent = text;

    // ---------------------
    // テーブル行作成
    // ---------------------

    // tr作成
    const tr = document.createElement("tr");

    //td作成
    const textTd = document.createElement("td");

    // 入力文字をセット
    textTd.textContent = text;

    // 削除ボタン列
    const deleteTd = document.createElement("td");

    //　ボタン作成
    const deleteBtn =document.createElement("button");

    //　ボタン文字
    deleteBtn.textContent = "削除";

    // =====================
    // 削除ボタン
    // =====================

    deleteBtn.addEventListener("click", function () {

        //行を削除
        tr.remove();
});

    // tdの中にボタンを入れる
    deleteTd.appendChild(deleteBtn);

    // trの中にtdを入れる
    tr.appendChild(textTd);
    tr.appendChild(deleteTd);

    //テーブルへ追加
    tableBody.appendChild(tr);

    // 4行目以降は1番古い行を削除
    if (tableBody.children.length > 3) {
        tableBody.removeChild(tableBody.firstElementChild);
    }

    //　入力欄を空にする
    textInput.value = "";

});

// =====================
// 設問２
// 背景色変更
// =====================

bgBtn.addEventListener("click", function () {

    //　配列の色を適用　//
    document.body.style.backgroundColor =
      colors[colorIndex];
    
    //　次の番号へ
    colorIndex++;

    //　最後まで行ったら最初に戻る
    if(colorIndex >= colors.length) {
     colorIndex = 0;
    }
});


// =====================
// 設問３
// ハイライトの切り替え
// =====================

highlightBtn.addEventListener("click", function () {

    // highlightクラスをつけたり外したりする
    displayArea.classList.toggle("highlight");

});


// =====================
// 設問７
// ループ処理
// =====================

for (let i = 1; i <= 5; i++) {

    console.log(i);
}    //　ボタン文字
    deleteBtn.textContent = "削除";

    // =====================
    // 削除ボタン
    // =====================

    deleteBtn.addEventListener("click", function () {

        //行を削除
        tr.remove();

        //　件数を減らす
        count--;

        // 3件未満なら表示ボタン復活
        if (count < 3) {
            displayBtn.style.display = "inline-block";
        }
    });

    // tdの中にボタンを入れる
    deleteTd.appendChild(deleteBtn);

    // trの中にtdを入れる
    tr.appendChild(textTd);
    tr.appendChild(deleteTd);

    //テーブルへ追加
    tableBody.appendChild(tr);

    // 件数カウント
    count++;

    // 3件以上ならボタン非表示
    if (count >= 3) {
        displayBtn.style.display = "none";
    }

    //　入力欄を空にする
    textInput.value = "";

});

// =====================
// 設問２
// 背景色変更
// =====================

bgBtn.addEventListener("click", function () {

    //　配列の色を適用　//
    document.body.style.backgroundColor =
      colors[colorIndex];
    
    //　次の番号へ
    colorIndex++;

    //　最後まで行ったら最初に戻る
    if(colorIndex >= colors.length) {
     colorIndex = 0;
    }
});


// =====================
// 設問３
// ハイライトの切り替え
// =====================

highlightBtn.addEventListener("click", function () {

    // highlightクラスをつけたり外したりする
    displayArea.classList.toggle("highlight");

});


// =====================
// 設問７
// ループ処理
// =====================

for (let i = 1; i <= 5; i++) {

    console.log(i);
}
