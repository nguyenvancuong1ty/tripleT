var hidden = document.querySelector('.header__opstion-icon');

var disHidden = document.querySelector('.header__navbar-hidden');
console.log(disHidden) ;
hidden.onclick = function() {
    var eml = window.getComputedStyle(disHidden).getPropertyValue('display');
    disHidden.style.display = 'block';
}

var ovlElement = document.querySelector('.overlay');

ovlElement.onclick = function() {
    disHidden.style.display = 'none';
}

const backDown = document.querySelector('.back-down');
document.body.onscroll = function() {
    backDown.style.display = 'block';
}



const arrr = [1,2,3,4,5,6,7,8,9];
Array.prototype.myReduce = function(callback, init){

    for( let i = 0; i < this.length; i ++){
        callback();    
    }
}

const obj = [{
        name: 'Height',
        key: 9
    },
    {
        name: 'Width',
        key: 5
    },
    {
        name: 'Cao',
        key: 6
    }
]




// function arrToObj(ar) {
//     return ar.reduce(function(results,arr){
//         results[arr[0]] = arr[1];
//         return results;
//     },{})
// }
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


const divElements = document.querySelectorAll('br');
const arr =  Array.from(divElements);
arr.forEach(function(div) {
    div.classList.add('div');
})

const json = '{"name":"Cường đẹp chai","age": "18 Tuổi"}';
const jsonParse = JSON.parse(json);
console.log(JSON.stringify(jsonParse));


const backUp = document.querySelector('.back-up');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        backUp.classList.add('up');
        backDown.classList.add('up');
    }
    else {
        backUp.classList.remove('up');
    }
    
}
