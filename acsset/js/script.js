

var seconds = 1;
 function myFunction2() {
    if ( seconds <= 100) {
        var firstNum = Math.floor(Math.random()* 10000);
        var secondNum = Math.floor(Math.random()* 10000);
        var thirdNum = Math.floor(Math.random()* 10000);
        var fourthNum = Math.floor(Math.random()* 10000);
        document.getElementById("frist-num").innerHTML = firstNum.toString();
        document.getElementById("second-num").innerHTML = secondNum.toString();
        document.getElementById("third-num").innerHTML = thirdNum.toString();
        document.getElementById("fourth-num").innerHTML = fourthNum.toString();
    }
    seconds += 1;
     
 }
 function myFunction() {
     
    setInterval(myFunction2, 50);
 }



 var courses = [
   {
      id : 1,
      name : 'javascript',
      coin : 250
   },
   {
      id: 2,
      name: 'python',
      coin: 0
   },
   {
      id: 3,
      name: 'html,css',
      coin: 10
   },
   {
      id: 4,
      name: 'c#',
      coin: 350
   },
   {
      id: 5,
      name: 'ruby',
      coin: 250
   }
 ];
// forEach : lặp qua từng phần tử
 courses.forEach(function(course,index) {
   console.log(index,course);
 })    


//  Every: return boolen, kiểm tra tất cả các phần tử của mảng 
//  thỏa mãn một điều kiện gì đó
 var isFree = courses.every(function(course,index) {
      return course.coin !== 0;
 });
 console.log(isFree);



 // Some: return boolen, kiểm tra một trong các phần tử của mảng
 // thỏa mãn điều kiện gì đó

 var isFree = courses.some(function(course,index) {
   return course.coin === 0;
});
console.log(isFree);




// Find: return ra phần tử đầu tiền thỏa mãn điều kiện của mảng

var iscourse = courses.find(function(course,index){
      console.log(index);
      return course.name === "python";
});
console.log(iscourse);




// filter : giống find nhưng return nhiều phần tử nếu chúng thỏa mãn đk

var listcourse = courses.filter(function(course,index) {
      return course.coin === 250;
});
console.log(listcourse);



// map : Thay đổi, chỉnh sửa element của mảng



var newCourses = courses.map(function(course,index) {
      return {
         id: course.id,
         name: `khóa học: ${course.name}`,
         coin: course.coin,
         coinText: `Giá: ${course.coin}`
      }
});
console.log(newCourses);



// reduce(): sử dụng khi muốn nhận về một giá trị duy nhất sau khi
// lặp qua mảng
// vd: Nhận về tổng số coin của khóa học 


var totalCoin = courses.reduce(function(total,course){
      return total + course.coin;
}, 0);
console.log(totalCoin);


// Bài tập về reduce()

var defthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArray = defthArray.reduce(function(flatOuput, defthItem){
      return flatOuput.concat(defthItem);
}, []);

console.log(flatArray);


// bài tập 2

var topics = [
   {
      topic: "fontEnd",
      course: [
         {
            id: 1,
            title: 'html, css'
         },
         {
            id: 2,
            title: 'javascript'
         }
      ]
   },
   {
      topic: "backEnd",
      course: [
         {
            id: 1,
            title: 'PHP'
         },
         {
            id: 2,
            title: 'NodeJs'
         }
      ]
   }
];

var newCourse = topics.reduce(function(course, name){
      return course.concat(name.course);
}, []);

console.log(newCourse);

var htmls = newCourse.map(function(course){
      return
      `<div>
         <h2>${course.title}</h2>
         <p> ${course.id}cxdasrtyhrtysfhfjyxrtdfghbcvxz ``
         </p>
      </div>`

});
console.log(htmls.join(''));



// console.log(document);

