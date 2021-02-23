### javascript

#### 数据类型有哪些？

- Undefined

- Null

- Boolean

- String

- Number

- Symbol

- Object

#### 为什么有的编程规范要求用 void 0 代替 undefined？

Undefined类型表示未定义，它的类型只有一个值，就是undefined。任何变量在赋值前是Undefined类型、值为undefined，一般我们可以用全局变量undefined（就是名为undefined的这个变量）来表达这个值，或者void运算来把任意一个表达式变成 undefined 值。

因为javascripr的代码 undefined 是一个变量，而并非是一个关键字，所以我们为了避免无意中篡改，建议使用 void 0 来获取 undefined 值。

#### Undefined 和 Null 差别？

Null表示定义了但是为空。Null类型只有一个值，就是null，null是javascript关键字，所以在任何代码中都可以放心用null关键字累获取null值。

实际编程时，我们不要把变量赋值为undefined，这样可以保证所有值为 undefined 的变量都是从未赋值的自然状态。

#### 字符串有最大长度吗？

String用于表示文本数据。最大长度是 2^53 - 1。因为string的意义并非“字符串”，而是字符串的UTF16编码，我们字符串的操作charAt、charCodeAt、length等方法针对的都是UTF16编码。所以字符串的最大长度，实际上是受字符串编码长度影响的。

#### 0.1 + 0.2 == 0.3 ?

false。

Javascript中的Number类型基本符合IEEE754-2008规定的双精度浮点数规则。根据浮点数的定义，非整数的Number类型无法用 == 和 === 来比较。浮点数运算的精度问题导致左右的结果并不是严格相等，而是相差了微小的值。因此错误的不是结论，而是比较的方法，正确的比较方法如下：

```javascript
   Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
   // true
   // Number.EPSILON 表示最小精度值
```

#### 为什么给对象添加的方法能用在基本类型上？

因为`.`运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。

#### javascript是面向对象吗？

**对象是下列事物之一：**

1、一个可以触摸或者可以看见的东西

2、人的智力可以理解的东西

3、可以指导思想或行动的东西

**对象的特点：**

1、 对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。

```javascript
   var o1 = { a: 1 };
   var o2 = { a: 1 };

   console.log( o1 == o2); // false
```

2、对象有状态：同一个对象处于不同状态之下。

3、对象具有行为：对象的状态可能因为它的行为发生变迁。


对象的状态和行为：在c++中叫作“成员变量”和“成员函数”，java中成为“属性”和“方法”。在javascript中统一抽象为“属性”。例如下面代码，O是一个对象，d是一个属性，函数f也是一个属性，尽管写法不同，但是对javascript而言，d和f就是两个普通属性。

```javascript
   var o = {
       d: 1,
       f() {
           console.log(this.d);
       }
   }
```

**javascript对象独有的特点：**

对象具有高度的动态性，这是因为javascript赋予了使用者在你运行时为对象添改状态和行为的能力。

**javscript对象的两类属性**

javascript用一组特征（attribute）来描述属性（property）。

一、数据属性：

- value: 属性的值

- wiitable：属性能否被赋值

- enumerable：决定 for in 能否枚举该属性

- configurable：决定该属性能否被删除或者改变特征值。

二、访问器属性：允许使用者在写和读属性时，得到完全不同的值，一种函数语法糖。

- getter：函数或 undefined，在取属性值时被调用。

- setter：函数或 undefined，在设置属性值时被调用。

- enumerable：决定 for in 能否枚举该属性。

- configurable：决定该属性能否被删除或者改变特征值。

我们通常用于定义属性的代码会产生数据属性，其中writable、enumerable、configurable 都默认为 true。我们可以使用内置函数 getOwnPropertyDescriptor 来查看。

如果想改变属性的特征，或者定义访问器属性，可以使用`Object.defineProperty`，这样会修改属性的`writable`和`enumerable`。

```javascript
   var o = { a: 1 };
   Object.defineProperty(o, "b", {value: 2, writable: false, enumerable: false, configurable: true});
   //a和b都是数据属性，但特征值变化了
   Object.getOwnPropertyDescriptor(o,"a"); 
   // {value: 1, writable: true, enumerable: true, configurable: true}
   Object.getOwnPropertyDescriptor(o,"b"); 
   // {value: 2, writable: false, enumerable: false, configurable: true}
   o.b = 3;
   console.log(o.b); // 2
```

实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。

对象是一个属性的索引结构（索引结构是一类常见的数据结构，我们可以把它理解为一个能够以比较快的速度用 key 来查找 value 的字典）。

#### in 和 hasOwnProperty 区别？

in 操作符会检查属性是否在对象及其[[Property]]原型链中。

hasOwnProperty 只会检查属性是否存在在当前对象，不会查找原型链。

#### Javascript中的对象分类？

一、宿主对象

前端最熟悉的浏览器环境中。全局对象为window，window上有很多属性，比如document。

二、内置对象

- 固有对象：由标准规定，随着js运行时创建而自动创建的对象实例。

- 原生对象：
  - 基本类型：Boolean,String.Number,Symbol,Object
  - 基础功能和数据结构：Array,Date,RegExp,Promise
  - 错误类型：Error,EvalError,RangeError
  - 二进制操作：ArrayBuffer,SharedArrayBuffer,DataView
  - 带类型的数组：Float32Array

- 普通对象：使用{} 、object构造器或者class关键字定义类创建的对象 。

#### Promise 里的代码为什么比 setTimeout 先执行？

**宏任务**：宿主发起的任务，比如setTimeout、event、I/O，setIterval、requestAnimationFrame、setImmediate（node）。

**微任务**： javascript引擎发起的任务，例如 MutationObserver（浏览器），process.nextTick（node）,Promise.then catch finally。

javascript 引擎等待宿主环境分配宏观任务，在操作系统中，通常等待的行为都是一个事件循环，所在的node术语中，也会把这个部分称为事件循环。整个循环做的事情就是反复“等到 -- 执行”。

这里每次的执行过程就是一个宏观任务。大概可以理解为：宏观任务的队列就相当于事件循环。在宏观任务中，js的Promise还会产生异步代码，js必须保证这些异步嗲吗在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列。

new Promise 在实例化过程中所执行的代码都是同步的，而then中注册的回调是异步执行的，在同步代码执行完成后才会去检查是否有异步任务完成，并执行对应回调，而微任务又是在宏任务之前执行的。

**异步执行的顺序总结：**

- 首先我们分析有多少个宏任务；

- 在每个宏任务中，分析有多少个微任务；

- 根据调用次序，确定宏任务中的微任务执行次序；

- 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；

- 确定整个顺序。

### 浏览器

#### 浏览器的主要的进程有哪些？渲染进程有哪些线程？

**进程**：

**线程**：


#### 浏览器的重排和重绘？

### React

#### setState的原理是什么？setTimeout的callback中调用setState，state的值会立马更新吗？

#### ref转发？