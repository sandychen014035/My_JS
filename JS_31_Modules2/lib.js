// 加法函式
let add=function(n1,n2){
console.log(n1+n2);
};

// 乘法函式
let multiply=function(n1,n2){
    console.log(n1*n2);
};

// 將兩個函式合成物件
let math={add:add,multiply:multiply};

// 全部輸出
export default math;

// 單獨輸出
export{add,multiply};



// // 預設的輸出(default)
// let x ="Hello";
// // export default x;

// // 非預設的輸出
// let data=[5,6,7];
// let obj={x:10,y:5};
// // export{data,obj};

// // 一起輸出
// export{x as default,data,obj};