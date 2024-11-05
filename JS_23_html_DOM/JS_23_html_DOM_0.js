// 使用name屬性,取得元素內容
let myDrinks=document.getElementsByName("drinks");
console.log(myDrinks);

// 抓取資料內容
for(let i=0;i<myDrinks.length;i++){
    console.log(myDrinks[i].value);
}

// 取得勾選的項目內容
// #1 宣告變數找到按鈕
let myBtn=document.querySelector("#btn");
// #2 監聽按鈕是否被碰觸(click=>左鍵一下事件)
// addEventListener("事件",執行內容 function(){} )
myBtn.addEventListener("click",function(){
    // 建立一個陣列,保存被勾選項目
    let arr=[];
    let arrNot=[];
    // 逐一檢查是否被勾選=>checked
    for(let i=0;i<myDrinks.length;i++){
        // 檢查是否被勾選
        if(myDrinks[i].checked){
            arr.push(myDrinks[i].value);
        }else{arrNot.push(myDrinks[i].value);}
    }
    console.log(`有被勾選:${arr}`);
    console.log(`沒被勾選:${arrNot}`);
    return arr;
});

// 將有無勾選顯示在螢幕上
// 宣告變數抓取
// 被勾選.沒被勾選.按鈕.飲料
let yes=document.querySelector("#yes");
let no=document.querySelector("#no");
let btnNew=document.querySelector("#btn");
// 錯誤#2 getElementsByName跟getElementsByclassName 不要搞混
let drinksNew=document.getElementsByName("drinks");

// 監聽按鈕有無被勾選
// 錯誤#1 click !
btnNew.addEventListener("click",function(){
    // 建立陣列存放
    let yesDrinks=[];
    let noDrinks=[];
    // 用迴圈逐一檢查
    for(let i=0;i<drinksNew.length;i++){
        // 判斷是否被勾選
        if(drinksNew[i].checked){
            // 錯誤#3 記得.value ,不然抓不到文字
            yesDrinks.push(drinksNew[i].value);
        }else{noDrinks.push(drinksNew[i].value);}
    }
    // 將結果加入到html中
    // .join(", ")可加可不加
    yes.innerHTML=`有被勾選:${yesDrinks}`
    no.innerHTML=`沒被勾選:${noDrinks.join(", ")}`

})


