### 面试刷题

#### javascript

1. 数据类型有哪些？
- Undefined

- Null

- Boolean

- String

- Number

- Symbol

- Object



2. 为什么有的编程规范要求用 void 0 代替 undefined？  

Undefined类型表示未定义，它的类型只有一个值，就是undefined。任何变量在赋值前是Undefined类型、值为undefined，一般我们可以用全局变量undefined（就是名为undefined的这个变量）来表达这个值，或者void运算来把任意一个表达式变成 undefined 值。



因为javascripr的代码 undefined 是一个变量，而并非是一个关键字，所以我们为了避免无意中篡改，建议使用 void 0 来获取 undefined 值。



3. Undefined 和 Null 差别？

Null表示定义了但是为空。Null类型只有一个值，就是null，null是javascript关键字，所以在任何代码中都可以放心用null关键字累获取null值。



实际编程时，我们不要把变量赋值为undefined，这样可以保证所有值为 undefined 的变量都是从未赋值的自然状态。



4. 字符串有最大长度吗？
   
   String用于表示文本数据。最大长度是 2^53 - 1。因为string的意义并非“字符串”，而是字符串的UTF16编码，我们字符串的操作charAt、charCodeAt、length等方法针对的都是UTF16编码。所以字符串的最大长度，实际上是受字符串编码长度影响的。
   
   

5. 0.1 + 0.2 == 0.3 ?
   
   false。
   
   Javascript中的Number类型基本符合IEEE754-2008规定的双精度浮点数规则。根据浮点数的定义，非整数的Number类型无法用 == 和 === 来比较。浮点数运算的精度问题导致左右的结果并不是严格相等，而是相差了微小的值。因此错误的不是结论，而是比较的方法，正确的比较方法如下：
   
   ```javascript
   Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON 
   // true
   // Number.EPSILON 表示最小精度值
   ```
   
   

6. 为什么给对象添加的方法能用在基本类型上？
   
   因为`.`运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。


