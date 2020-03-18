// var a = 12;
// var b = a;
// b=13;
// console.log(a);
//
// var obj1={n:100};
// var obj2 = obj1;
// obj2['n'] =200;
// console.log(obj1.n)
//
// alert(obj1.n);
// confirm(obj1.n)
//
// var obj= {
//   n:10,
//   m:'obj.n *10'
// };
// console.log(obj.m)


// var ary1 = [3,4];
// var ary2 = ary1;
// ary2[0] = 1;
// ary2 = [4,5];
// ary2[1] = 2;
// ary1[1] = 0;
// console.log(ary1,ary2)

//
// var num = 12;
// if(num > 10){
//     num++; //=>num=num+1  num+=1
// }else if(num>0 && num<=10){
//     num--
// }else{
//     num+=2
// }
// console.log(num);

//
// var num = 10;
// if(num>5){
//     num+=2;
// }else if(num>8){
//     num+= 3;
// }else{
//     num+=4
// }
// console.log(num)

// var num = parseInt('width:35.5px');
// if(num==35.5){
//     alert(0);
// }else if(num==35){
//     alert(1);
// }else if(num==NaN) {
//     alert(2);
// }else if(typeof num =='number'){
//     alert(3);
// }else{
//     alert(4);
// }

// var num = 12;
// if(num>10){
//     num++;
// }else if(num>0 && num<10){
//     num--;
// }else{
//     num+=2;
// }


// var num = 0;
// num>10?num++:(num>0 && num<10?num--:num+=2);
// console.log(num);

// var num = parseInt('31.5px');
//
// if(num==31.5){
//     alert(1);
// }else if(num==31){
//     alert(2);
// }else if(typeof num == 'number'){
//     alert(3);
// }else{
//     alert(4);
//
// }

// var num = 12;
//
// switch (num){
//     case 10:
//     num++;
//     break;
//     case 12:
//     num--;
//     break;
//     defaule:
//     mum+=2;
// }
// console.log(num);

// var ary=[12,23,34];
/**
 * 0:12
 * 1:23
 * 2:34
 * length:3
 * 输出数组中的每一项内容
 */
/*itar [TAB] 自动补全循环代码*/
// for ( var i = 0; i < ary.length; i++) {
//     //->第一次循环 i=0 i<3 ...i=1  =>ary[0]
//     //->第二次循环 i=1 i<3 ...i=2  =>ary[1]
//     //->第三次循环 i=2 i<3...i=3   =>ary[2]
//     //->第四次循环 i=3 i<3...循环结束（本次没有循环）
//     console.log(ary[i]);
//
//
// }
// var ary=[12,23,34];
//=>ary.length-1:当前数组中最后一个项的属性名（索引）
// for (var i = ary.length-1; i>=0; i--) {
//     console.log(ary[i]) ;
//
// }

//=>输出基数向的内容
// var ary=[12,23,34,45,56,67,78,89];
//
// for(var i=0; i<ary.length; i++){
//     //i=0 第一项 奇数项目
//     //i=1  第二项 偶数项
//     //i=2 第三项 奇数向
//
//     //索引为偶数，代表的是奇数项，如何判断当前i的值是奇数还是偶数？
//     //12%5:%称为模，用12除以5取余数
//     if(i%2 != 0){
//         console.log(ary[i])
//     }
//     // console.log(ary[i]);
//
// }


// for(var i = 0; i<10; i++){
//     if (i<5){
//         i++;
//         continue;//=>结束本轮循环（循环体中continue后面的代码将不再执行，继续执行下一轮循环）
//     }
//     if(i>7){
//         i+=2;
//         break; //=>强制结束整个循环，不做任何处理i++也不再添加
//     }
//     i+=1
// }
// console.log(i);



// for(var i = 1; i <= 10; i+=2){
//
//     if(i<=5){
//         i++;
//         continue;
//     }else{
//         i-=2;
//         break;
//     }
//     i--;
//     console.log(i);
// }
// console.log(i);



