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