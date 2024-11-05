// getElementById("") => 取得id,不用#
// getElementsByTagName("") =>取得屬性
// querySelector("")=>取得標籤/id("#")/class(".")
// querySelectorAll(" > ")=>取得標籤裡的子元素

// 取得元素節點
// 根據ID屬性 getElementById 不用加#
let myjs=document.getElementById("js");
console.log(myjs); // 得到空值
// textContent=>取得該標籤的文字內容
console.log(myjs.textContent); 

// 根據html標籤
let myLi =document.getElementsByTagName("li")

console.log(myLi);
// 變數.item(位置)
// 進入集合物件拆開來
console.log(myLi.item(1).textContent); 
console.log(myLi[1].textContent); 

// 顯示所有li 用for迴圈
for(let i=0;i<myLi.length;i++){
    console.log(myLi.item(i).textContent); 
}
console.log("_querySelector_");
console.log(document.querySelector("h1"));
console.log("_getElementsByTagName_");
console.log(document.getElementsByTagName("h1")[0].textContent);

// 使用類別名稱
// 特定的用id(#)
// 共同的用class(.) =>getElementsByClassName
let mySubject=document.getElementsByClassName("subject");
console.log(mySubject);
// 取得所有.subject的文字內容
for(let i=0;i<mySubject.length;i++){
    console.log(mySubject[i].textContent);
    console.log(mySubject.item(i).textContent);
}
// 取得單一的.subject,用#id名稱呼叫
console.log(mySubject["html"].textContent)

// 取得id#p1的內容
console.log(document.getElementById("p1").textContent);
console.log(document.querySelector("#p1").textContent);
console.log(document.getElementsByTagName("p")[1].textContent);

// 取得子元素段落p
console.log(document.querySelectorAll("div>p"));
