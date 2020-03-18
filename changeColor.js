//=>1、获取box中所有的li （我们需要先获取box）
var oBox = document.getElementById('box');
//=>想要修改box的样式
//1.通过style修改行内样式
// oBox.style.backgroundColor = 'pink';

//2.基于className 属性修改box的样式类，从而改变样式
// oBox.className='box bgColor';
//要用空格隔开
// oBox.className += ' bgColor';

// var boxList = oBox.getElementsByTagName('li');

//=>2、做个循环来完成我们的样式赋值
// for (var i = 1; i < boxList.length; i+=2) {
//
//     //=>索引是奇数代表偶数行
//     boxList[i].style.backgroundColor='red';
//
// }

// for (var i = 0; i < boxList.length; i++) {
//
//     //=>索引是奇数代表偶数行
//    if(i%2 != 0){
//        // boxList[i].style.backgroundColor='pink'
//        boxList[i].className='bgColor';
//    }
//
// }

var boxList = oBox.getElementsByTagName('li');


for (var i = 0; i < boxList.length; i++) {
    if(i%3 ===0){
        boxList[i].style.color='red';
    }else if(i%3 ===1 ){
        boxList[i].style.color='green';
    }else{
        boxList[i].style.color='pink';
    }

}
