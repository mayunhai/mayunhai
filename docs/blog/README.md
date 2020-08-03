# 名词解释

:::tip
[web前端开发](/blog/#web前端开发)
[web前端与后端的区别](/blog/#web前端与后端的区别)
[MVC && MVVM](/blog/#mvc-mvvm)
[SSR](/blog/#ssr)
[SPA](/blog/#spa)
[PWA](/blog/#pwa)
[API（接口）](/blog/#api（接口）)
[语法糖](/blog/#语法糖)
[倒排索引](/blog/#倒排索引)
[JS事件捕获和冒泡](/blog/#js事件捕获和冒泡)
[堆、栈、队列](/blog/#堆、栈、队列)
[浮动精度](/blog/#浮动精度)
[非对称加密](/blog/#非对称加密)
[https](/blog/#https)
[token](/blog/#token)
[XSS攻击](/blog/#xss攻击)
[CSRF攻击](/blog/#csrf攻击)
[CSP](/blog/#csp)
[CRLF、CR、LF](/blog/#crlf、cr、lf)
:::




### web前端开发

web前端开发通俗易懂的解释就是写网站页面的，这里需要强调一点像微信公众号，小程序甚至部分APP所看到页面都是有web前端开发制作的

#### web前端开发三大组成部分：

html(骨架)、css(皮肉)、javascript(灵魂)


### web前端与后端的区别

可以说你看到的所有页面都是用前端构造的，那么为什么要有后端呢？举个例子淘宝有上千万个页面，我们没法再服务器真的就去写上千万的静态页面给用户去看，只有写上一套通用模板，然后配合后端程序读取数据库信息生产那么多页面


### MVC && MVVM

MVVM实际上是MVC升级版，先了解MVC之后，再去理解MVVM易如反掌

#### MVC

一个应用程序最主要的构成部分就是用于人机交互的
**视图(view)**
和服务器里面的数据处理，对于web前端开发人员而已理解视图轻而易举，
**模型(model)**
通俗理解就是服务器数据库上的增删改查，
**控制器(controller)**
则是两者之间的桥梁。MVC的协同作用下完成了一个应用程序，这种模式极为传统而且市场占比也是挺高，虽然目前MVVM的趋势已经很明显，但是还是有很多老的项目一直在用MVC

#### MVVM
MVVM,简单粗暴的理解就是用VM
**(视图模型ViewModel)**
替代了MVC里面的C
**(控制器controller)**
，ViewModel其实就是为View量身定制的一个model主要靠前端代码完成。MVVM 模式便是使用的是数据绑定基础架构

从实际开发角度来说，可以简单的理解为MVC模式下本该后端做的控制器，模板引擎(套数据)甚至路由全部交给前端通过前端框架数据绑定去完成

这样的好处在于真正意义上前后端分离，前后端可以更加专注自己的领域。后端专注开发接口和数据库，前端专注交互体验。还有一点则是原本很多判断以及一些简单逻辑计算都是在后端服务器来完成的，现在全部放在了前端，明显可以减轻服务器的压力，也行有人会觉得那些判断计算量不足为题，但是我想说积羽沉舟的道理大家都懂


### SSR

服务端渲染（Server-Side Rendering，SSR），MVC 渲染出来的页面就是 SSR

:::tip
- 优点：首屏速度快，VUE渲染的 [SPA](/blog/#spa) 页面之所以慢不是因为渲染需要多少时间，而是JS加载需要时间，即便做了路由懒加载，`vue.js` 的加载也是无法避免的
- 缺点：相比客户端渲染，渲染计算放在了服务端增加了服务端的负荷，虽然渲染一个页面可能消耗不了多少资源，但是积羽成舟
:::


### SPA

单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序，比如你现在看到这个网站就是一个基于 `vuepress` 的单页，不信的话你可点击左侧菜单切换一下链接，你会发现整站是无刷新的，避免刷新页面可能产生的空白而引发的盲视（Change Blindness）<br>

>变化盲视（Change Blindness） ：指视觉场景中的某些变化并未被观察者注意到的心理现象。产生这种现象的原因包括场景中的障碍物，眼球运动、地点的变化，或者是缺乏注意力等。——摘自《维基百科》

**特点**

- 速度：更好的用户体验，让用户在web app感受native app的速度和流畅<br>
- MVVM：经典MVVM开发模式，前后端各负其责<br>
- ajax：重前端，业务逻辑全部在本地操作，数据都需要通过AJAX同步、提交<br>
- 路由：在URL中采用#号来作为当前视图的地址,改变#号后的参数，页面并不会重载

缺点呢由于单页应用体量比较大，所以缺点就是首屏速度有些慢，不过这个在目前大部分硬件都较为优秀的移动互联网时代这些都不算什么大问题，其实在我刚做前端时候就想过早晚有一天会出现一个NB的网站不再会有跳转全部用ajax来无刷新体验一切，没想到到来的这么快


### PWA

PWA（Progressive Web App）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验,可以理解为一个能够放到桌面上基于 `H5` 的小程序


### API（接口）

对刚入门的小伙伴来说一开始理解接口这个词有点难度，尤其是起手学了 PHP 的 ```interface``` 之后更是一脸懵逼，其实很容易理解，你可以把它当做一个方法，你给它入参然后它就会返回你想要的东西，或者实现你想要的功能就是这么简单。

**这里需要强调一点，很多人在学习echart或者VUE的时候在官网常常会看到 ```API``` 这样的链接，点进去是接口文档，就误以为 ```API === '文档'```**


### 语法糖

百度百科上面说了一大堆个人觉得比较难懂，其实最直白的说法语法糖不过是你代码中的一种简写


### 倒排索引
Elasticsearch 使用一种称为倒排索引的结构，它适用于快速的全文搜索常用于文章日志管理系统

::: tip
有趣的是它的诞生是一个失业的程序员给她在学厨艺的女朋友写一个搜索菜谱程序得到的灵感，目前该方法普遍使用于各种搜索引擎
:::

想要理解这个首先得先理解两个小知识点：
- 数据库中的索引就好比是字典侧边a-z，其按照一定规律性的排列方便用户快速的查找到想要的内容

- 数据库服务器的瓶颈往往在于读写瓶颈，由于服务器硬盘需要保证数据可还原性所以多半使用的是机械硬盘，其读写速度也就100M/S - 200M/S,即便使用SSD固态硬盘，读写速度也就在500M/S

上面两点明白后，倒排索引就很容易理解，我们先看数据库的一张表

<table>
  <tr>
    <th style="width:30px">id</th>
    <th style="width:30px">title</th>
    <th>content</th>
  </tr>
  <tr>
    <td>1</td>
    <td>xxx</td>
    <td>xxx汽车xxx</td>
  </tr>
  <tr>
    <td>2</td>
    <td>xxx</td>
    <td>xxx娱乐xxx</td>
  </tr>
  <tr>
    <td>3</td>
    <td>xxx</td>
    <td>xxx旅游xxx</td>
  </tr>
    <tr>
    <td>4</td>
    <td>xxx</td>
    <td>xxx娱乐xxx</td>
  </tr>
  <tr>
    <td>5</td>
    <td>xxx</td>
    <td>xxx旅游xxx</td>
  </tr>
  <tr>
    <td>6</td>
    <td>xxx</td>
    <td>xxx汽车xxx</td>
  </tr>
  <tr>
    <td>7</td>
    <td>xxx</td>
    <td>xxx娱乐xxx</td>
  </tr>
  <tr>
    <td>8</td>
    <td>xxx</td>
    <td>xxx旅游xxx</td>
  </tr>
    <tr>
    <td>9</td>
    <td>xxx</td>
    <td>xxx娱乐xxx</td>
  </tr>
  <tr>
    <td>10</td>
    <td>xxx</td>
    <td>xxx旅游xxx</td>
  </tr>
</table>

然后我们再看一下 传统数据库 mysql 和 elasticsearch 索引结构的区别

<table>
  <tr>
    <th>mysql</th>
    <th>elasticsearch</th>
  </tr>
  <tr>
    <td>
      <table>
        <tr>
          <th style="width:30px">key</th>
          <th>value</th>
        </tr>
        <tr>
          <td>1</td>
          <td>xxx汽车xxx</td>
        </tr>
        <tr>
          <td>2</td>
          <td>xxx娱乐xxx</td>
        </tr>
        <tr>
          <td>3</td>
          <td>xxx旅游xxx</td>
        </tr>
        <tr>
          <td>4</td>
          <td>xxx娱乐xxx</td>
        </tr>
        <tr>
          <td>5</td>
          <td>xxx旅游xxx</td>
        </tr>
        <tr>
          <td>6</td>
          <td>xxx汽车xxx</td>
        </tr>
        <tr>
          <td>7</td>
          <td>xxx娱乐xxx</td>
        </tr>
        <tr>
          <td>8</td>
          <td>xxx旅游xxx</td>
        </tr>
        <tr>
          <td>9</td>
          <td>xxx娱乐xxx</td>
        </tr>
        <tr>
          <td>10</td>
          <td>xxx旅游xxx</td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <th style="width:30px">key</th>
          <th>value</th>
        </tr>
        <tr>
          <td>汽车</td>
          <td>[1, 6]</td>
        </tr>
        <tr>
          <td>娱乐</td>
          <td>[2, 4, 7, 9]</td>
        </tr>
        <tr>
          <td>旅游</td>
          <td>[3, 5, 8, 10]</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

如果到这里还是看不懂的话没有关系，我们看个需求（假设每篇文章大小为 1M ）

需求1： 查找所有汽车相关文章

需求2： 查找所有娱乐相关文章

显而易见

<table>
  <tr>
    <th style="width:50%">mysql</th>
    <th>elasticsearch</th>
  </tr>
  <tr>
    <td>无论需求1还是需求2都需要查询出所有文章（10M），然后再依次对文章内容（content）进行正则匹配</td>
    <td>
      <p>需求1：汽车相关文章有2篇，取 2M 数据</p>
      <p>需求2：娱乐相关文章有4篇，取 4M 数据</p>
    </td>
  </tr>
</table>

elasticsearch 的索引顺序相对于传统 mysql 的索引顺序是相反的，所以叫倒排索引，且对文章查询类场景有极大优势


### JS事件捕获和冒泡

HTML DOM `addEventListener()` 方法的第三个参数 `useCapture`(可选。布尔值，指定事件是否在捕获或冒泡阶段执行)

- true - 事件句柄在捕获阶段执行

- false - 默认，事件句柄在冒泡阶段执行

当一个DOM事件被触发时，它不仅仅只是单纯地在本身对象上触发一次，而是会经历三个不同的阶段

- 捕获阶段：先由文档的根节点document往事件触发对象，捕获事件对象（`从外向内`）
- 目标阶段：到达目标事件位置（事发地），触发事件
- 冒泡阶段：再从目标事件位置往文档的根节点方向回溯，冒泡事件对象（`从内向外`）

```html
<div id="outSide">
  <div id="midSide">
    <button id="inSide">test</button>
  </div>
</div>

<script>
  const arr = ['outSide', 'midSide', 'inSide']
  arr.forEach(v => {
    document.getElementById(v).addEventListener('click', function () {
      console.log(v, '冒泡')
    }, false)
  })
  arr.forEach(v => {
    document.getElementById(v).addEventListener('click', function () {
      console.log(v, '捕获')
    }, true)
  })
  // 点击按钮的结果
  // outSide 捕获
  // midSide 捕获
  // inSide 冒泡
  // inSide 捕获
  // midSide 冒泡
  // outSide 冒泡
</script>
```
<BubblesCapture />

这里和我们想象的可能不太一样，我们来调整一下冒泡和捕获的定义顺序看一下呢

```js
const arr = ['outSide', 'midSide', 'inSide']
arr.forEach(v => {
  document.getElementById(v).addEventListener('click', function () {
    console.log(v, '捕获')
  }, true)
})
arr.forEach(v => {
  document.getElementById(v).addEventListener('click', function () {
    console.log(v, '冒泡')
  }, false)
})
// 点击按钮的结果
// outSide 捕获
// midSide 捕获
// inSide 捕获
// inSide 冒泡
// midSide 冒泡
// outSide 冒泡
```
<BubblesCapture captureBubbles/>

可以看出在目标阶段的事发元素上的事件执行顺序是有事件注册顺序决定的

:::tip
冒泡和捕获对新手而言相对比较难理解，其实就是嵌套的标签，假设所有的标签点击事件都被绑定了不同的事件，那么当最中间的标签被点击后，这些事件触发的顺序,那么知道这些有什么用呢？我们知道可以使用 `event.preventDefault()` 阻止默认事件的触发，但是对于一些手动绑定的事件用上述方法就不那么管用，所以这里就要使用 `event.stopPropagation()` 阻止派发事件，所以这里就必须对事件的触发顺序非常清楚
:::


### 堆、栈、队列

- 堆 - 大块数据存储地，里面地址对应数据的存储方式

- 栈 - 后进先出（吃了吐）

- 队列 - 先进先出（吃了拉）

:::tip
队列先进先出，先来后到看起来毫无疑问，那为什么会有栈这种后进先出的存在呢？我们看个例子：
```js
function a(){
  b(c())
}
```
这里a调用b前要向栈保存a的返回地址，b调用c前要向栈保存b的返回地址，c执行结束要返回时，先要取出b的地址，而不是a，由此可见栈后进先出的价值就体现出来了
:::


### 浮动精度

所有的编程语言，包括 JavaScript，对浮点型数据的精确度都很难确定，直接上代码

```js
var x = 0.1
var y = 0.2
var z = x + y       // z 的结果为 0.30000000000000004
(z == 0.3) === true // 返回 false
```

为解决以上问题，可以用整数的乘除法来解决

更多内容可以参考：[JavaScript 中精度问题以及解决方案](https://www.runoob.com/w3cnote/js-precision-problem-and-solution.html)


### 非对称加密
简单的说信息通过一对 `私钥` `公钥` 来加密解密，一般 `私钥` 保密，`公钥` 公开

:::tip
- 通过 `私钥` 加密的信息只能由 `公钥` 来解密
- 通过 `公钥` 加密的信息只能由 `私钥` 来解密
:::

这样就能保证通信不会被截取窥看，至于原理推荐文章 [RSA算法原理（一）](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)、[RSA算法原理（二）](http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html)


### https
相比传统 `http` ，`https` 就运用了[非对称加密](/blog/#非对称加密)，有的人可能会有疑惑，如果坏人自己也创建一对 `私钥` `公钥`，然后在中间进行拦截转发，依然可以拦截获取到用户往服务器传输的信息，这里就需要第三方机构来统一管理 `公钥`，所以就有了 `https证书` 的相关服务


### token
身份令牌，就是在用户输入账号密码后服务端返回给用户一个随机的ID用于后面的操作鉴权，通常web会放在 `cookie` 中，这样在请求的时候会随带在头信息中用于权限校验


### XSS攻击
攻击者想办法在你的页面注入他写的 `js` 文件，然后执行偷取 `cookie` 或者植入小广告，运营商拦截其实也算一种XSS，这种植入就比较过分了，你的网站数据通过运营商的时候给你加个 `script` 标签发个小广告什么的，早些年你在微信公众号里面的 `wap页面` 经常看到右下角有个 `小礼盒` 点开一看是广告，你本以为是公众号自己做的广告，其实不是只不过被运营商劫持了，好在现在 [https](/blog/#https) 普及的现在能够有效的防止运营商劫持，至于最常见的XSS攻击就是在表单输入的时候直接输入 `script` 标签 + `js`，如果你不做任何屏蔽处理的话，有输入就有输出，当这段 `js` 被输出的时候，坏人就能利用代码为所欲为，要么偷掉你的cookie（[token](/blog/#token)），要么植入广告，预防的方法如下：

- 表单提交验证，输出时候禁止使用 `v-html` （Vue）

- 实现Session 标记（session [token](/blog/#token)s）

- cookie 防盗。避免直接在cookie中泄露用户隐私，例如email、密码，等等；通过使cookie和系统IP绑定来降低cookie泄露后的危险

- [CSP](/blog/#csp)确认接收的内容被妥善地规范化，仅包含最小的、安全的Tag（没有JavaScript），去掉任何对远程内容的引用（尤其是样式表和JavaScript），使用HTTPonly的cookie


### CSRF攻击

跨站请求攻击（Cross-site request forgery），简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买商品），实现原理就是诱导用户点击第三方链接，然后在他的链接用你之前登陆生成的cookie身份令牌进行接口请求，这种攻击其实预防措施非常简单

- 检查Referer字段

- 头信息添加 [token](/blog/#token)


### CSP
CSP(Content-Security-Policy)内容安全策略,通俗讲就是可以避免第三方 js css 引入，防[XSS攻击](/blog/#xss攻击)、或者运营商劫持，具体实现只要在 `head标签` 加个 `meta标签` 即可实现[配置详见](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

### CRLF、CR、LF

- `CR`：Carriage Return 对应ASCII中转义字符 `\r`，表示回车
- `LF`：Linefeed 对应ASCII中转义字符 `\n`，表示换行
- `CRLF`：Carriage Return & Linefeed 也就是`\r\n`，表示回车并换行

众所周知，Windows操作系统采用两个字符来进行换行，即CRLF(`\r\n`)；Unix/Linux/Mac OS X操作系统采用单个字符LF(`\n`)来进行换行；另外，MacIntosh操作系统（即早期的Mac操作系统）采用单个字符CR(`\r`)来进行换行

据野史记载，在很久以前的机械打字机时代，CR和LF分别具有不同的作用：LF会将打印纸张上移一行位置，但是保持当前打字的水平位置不变；CR则会将“Carriage”（打字机上的滚动托架）滚回到打印纸张的最左侧，但是保持当前打字的垂直位置不变，即还是在同一行

当CR和LF组合使用时，则会将打印纸张上移一行，且下一个打字位置将回到该行的最左侧，也就是我们今天所理解的换行操作

随着时间的推移，机械打字机渐渐地退出了历史舞台，当初的纸张变成了今天的显示器，打字机的按键也演变为了如今的键盘。在操作系统出现的年代，受限于内存和软盘空间的不足，一些操作系统的设计者决定采用单个字符来表示换行符，如Unix的LF、MacIntosh的CR。他们的意图都是为了进行换行操作，只是当初并没有一个国际标准,所以才有这样字符上的不同

:::tip
`.editorconfig` 里面 `end_of_line` 可以配置项目相关设置
:::

未完待续...


<style scoped>
.custom-block-title:first-of-type {
  display: none
}
.page p a {
  margin-right: 18px
}
.page p a:last-child {
  margin-right: 0
}
</style>
