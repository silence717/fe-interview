var object = {
    a: 2
};

object.a = 3;
console.log(object.a);

Object.defineProperty(object, 'a', {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: false
});

console.log(object.a);
object.a = 5;
console.log(object.a);


console.log(object.propertyIsEnumerable('a'));

console.log(new Date); 
console.log(Date())


// setTimeout 是浏览器api,产生宏任务
var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
});
setTimeout(()=>console.log("d"), 0)
r.then(() => console.log("c"));
console.log("b")


// function sleep(duration) {
//     return new Promise(function(resolve, reject) {
//         console.log("b");
//         setTimeout(resolve,duration);
//     })
// }
// console.log("a");
// sleep(5000).then(()=>console.log("c"));