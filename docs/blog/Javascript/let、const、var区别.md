## let、const、var区别

### let、const、var作用域
对于这个概念其实网上说的最多的就是 `块作用域` `函数作用域`,这个算是一个新手比较难以理解的问题，下面看段代码理解一下

```JS
// 块作用域
{
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a) // 1
    console.log(b) // 2
    console.log(c) // 3
}
console.log(a) // 1
console.log(b) // 报错 b is not defined
console.log(c) // 报错 c is not defined

// 函数作用域
(function () {
    var d = 5
    let e = 6
    const f = 7
    console.log(d) // 5
    console.log(e) // 6  
    console.log(f) // 7 
})();
console.log(d) // 报错 d is not defined
console.log(e) // 报错 e is not defined
console.log(f) // 报错 c is not defined
```

由此可见

- 除了 `var` 能够跨越块作用域 `{}`，let、const不能跨越快作用域

- let、const、var 都不能跨越函数作用域 `(function(){})()`

实际上 `var` 之所以能够跨越块作用域实际上，在非函数作用域中 `var` 赋值实际上就是对 `window` 赋值，下面看段代码就能很容易理解

```JS
window.print() // 浏览器会弹出打印

var print = () => {
    console.log('window.print()方法以及被改变啦')
}
window.print() // 浏览器不再弹出打印 而是控制台打印 'window.print()方法以及被改变啦'
```

let、const、var作用域区别应该是他们最重要也是最容易引起出错的区别，没看懂的可以多看看多写写多试试就好了

### let、const、var其他区别

- `const` 的值不能改变，其他两个的赋值可以被改变，举个简单的例子
```JS
const a = 1
a = 2 // 报错 Assignment to constant variable
```

::: tip
这里值得一提的是数组对象记录的是地址且不变所以在定义数组对象时候直接用 `const`
```JS
// 所以这样是没问题的
const a = []
a.push(1)
const b = {}
b.name = 'mayunhai'
```

这里关于地址这块也是新手非常容易模糊出错的地方，经常会莫名的发现连续同时调用同一个对象或者数组的时候，第二次值会覆盖掉第一次的值，遇到这类问题处理起来其实也很简单，使用浅拷贝（`[...arr]` `{...obj}`）或者[深拷贝](/util/#克隆一个对象或者数组-深拷贝)即可
:::


- 正因为 `const` 的值不能改变所以在初始化的时候必须赋值，其他则不需要，比如
```JS
let a
var b
console.log({a, b}) // {a: undefined, b: undefined}

const c // 报错 Missing initializer in const declaration
```

- var存在变量提升,let、const不存在
"变量提升"乍一看有点难理解，其实只要记住下面一句话就很容易理解

let、const必须准守 "先准守，后使用" 的原则，来直接看代码

```JS
console.log(a) // undefined
var a = 1
console.log(b) // 报错 Cannot access 'b' before initialization
let b = 1
console.log(c) // 报错 Cannot access 'c' before initialization
const c = 1
```

- var可以重复申明，let、const则不需
```JS
var a = 1
var a = 2
console.log(a)

let b = 1
let b = 2 // 报错 Identifier 'b' has already been declared

const c = 1
const c = 2 // 报错 Identifier 'c' has already been declared

var a = 1
let a = 2 // 报错 Identifier 'a' has already been declared
const a = 2 // 报错 Identifier 'a' has already been declared
```
