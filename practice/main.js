// // let number = +prompt('Enter your number:', '');
// // let arr = [];
// // function getDivisors(number) {
// //     for (let i = 0; i <= number; i++) {
// //         if (number % i == 0) {
// //             document.write(i + '<br>');
// //             arr.push(i);
// //         }
        
// //     }
// //     return arr;
// // }
// // // getDivisors(number);
// // alert(getDivisors(number));

// let obj = {
//     width: 1234,
//     colors: {
//         one: 'red',
//         two: 'black'
//     },
//     name: 'test'
// };


//     // for (let key in obj.colors) {
//     //     console.log(key + " : " + obj.colors[key]);
//     // }


// // let arr = [1,2,3,4,5];

// // arr.forEach(function(item, i, arr){

// // });

// function solution(str) {
//     var arr;
//     for (let i = 0; i < str.length; i++) {
//         if (str.length % 2 == 0) {
//             arr = str.split('',2);
//             console.log(arr);
//         }

 
//     }

// }
// solution('abcd');

//4

//1 ex
// function getDivisors (num){
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         if(num%i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// let num = +prompt("Введите число :");
// alert(getDivisors(num));


//2 ex max min
// function highAndLow (nums){
//     let arr = [];
//     let arrReturn = [];
//     arr = nums.split(' ');
//     let min = arr[0],max = arr[0];
//     //max
//     max = Math.max.apply(null, arr);
//     //min
//     min = Math.min.apply(null, arr);

//     arrReturn[0] = max;
//     arrReturn[1] = min;

//     let ret =  arrReturn.join(' ');
//     return ret;
// }

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");


//ex 3 Двоичная в десятичную 
// function binaryArrayToNumber (arr){
//     if(arr.length < 4){
//         return;
//     }
//     let revarr =[] ;
//     let retArr = [];
//     revarr = arr.reverse();
//     console.log(revarr);
//     let sum = 0;
//     for (let i = 0; i < revarr.length; i++) {
        
//         retArr[i] = (revarr[i] * (2**i));
//         c    
//     }
    
//     for (let i = 0; i < retArr.length; i++) {
//         sum += retArr[i];
        
//     }
//     return sum;
// }

// binaryArrayToNumber([0,0,0,1]);


//4

function tickets(money){
    let arrMoney = [];
    arrMoney[0]= money[0];
    console.log(arrMoney);
    let yes = 'YES' , no = 'NO';

    for (let i = 1; i < money.length; i++){ 
        //25
        if(money[i] == 25){
            arrMoney.push(25);
        }

        //50 
        if(money[i] == 50){
            for (let j = 0; j < arrMoney.length; j++) {
                if (arrMoney[j] == 25) {
                        arrMoney.splice(j,1);
                        arrMoney.push(50);
                        break;
                }
                else{
                    console.log(no);
                    return no;
                }
                
            }
        }
        let n = 0;
        //100

        if(money[i] == 100){
            console.log(n);
            for (let f = 0; f < money.length; f++) {
                if(money[f] == 50){
               
                    for (let c = 0; c < 3; c++) {
                        if(money[c] == 25){
                            arrMoney.splice(c,1);
                            arrMoney.splice(f,1);
                            arrMoney.push(100);
                            break;
                        }
                    }
                
                }
                else if(money[f] == 25){
                        if(arrMoney[f] == 25){
                            n++;
                            console.log(n);
                        }
                }
                if (n == 3) {
                    arrMoney.push(100);
                    console.log(arrMoney);
                }
            }
        }
    }
}
    
tickets([25,25,25,100]);