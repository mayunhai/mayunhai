Coming Soon

Base on `vuepress`

在线地址：https://mayunhai.github.io/mayunhai

个人 Blog 文章地址: https://mayunhai.github.io/mayunhai/blog/js.html

**本项目为个人技术收藏级，里面会不定期分享一些作者平时常用的库，或者网站和小工具。同时作者也会在上面不定期的写一些简单的博文**

**如果你有好的推荐你可以提 issue 或者 pr 来告诉作者**

- [名词解释](#%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A)
  - [web 前端开发](#web%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91)
  - [web 前端三大技术的个人理解](#web%E5%89%8D%E7%AB%AF%E4%B8%89%E5%A4%A7%E6%8A%80%E6%9C%AF%E7%9A%84%E4%B8%AA%E4%BA%BA%E7%90%86%E8%A7%A3)
  - [web 前端与后端的区别](#web%E5%89%8D%E7%AB%AF%E4%B8%8E%E5%90%8E%E7%AB%AF%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [MVC && MVVM](#mvc--mvvm)
    - [MVC](#mvc)
    - [MVVM](#mvvm)
  - [SPA](#spa)
  - [API（接口）](#api%E6%8E%A5%E5%8F%A3)
  - [语法糖](#%E8%AF%AD%E6%B3%95%E7%B3%96)

# 名词解释

本博客主要分析 web 前端开发相关技术文章，尽可能地用最直白简单的白话去描述介绍

## web 前端开发

web 前端开发通俗易懂的解释就是写网站页面的，这里需要强调一点像微信公众号，小程序甚至部分 APP 所看到页面都是有 web 前端开发制作的

## web 前端三大技术的个人理解

html(骨架)、css(皮肉)、javascript(灵魂)

## web 前端与后端的区别

可以说你看到的所有页面都是用前端构造的，那么为什么要有后端呢？举个例子淘宝有上千万个页面，我们没法再服务器真的就去写上千万的静态页面给用户去看，只有写上一套通用模板，然后配合后端程序读取数据库信息生产那么多页面

## MVC && MVVM

MVVM 实际上是 MVC 升级版，先了解 MVC 之后，再去理解 MVVM 易如反掌

#### MVC

一个应用程序最主要的构成部分就是用于人机交互的
**视图(view)**
和服务器里面的数据处理，对于 web 前端开发人员而已理解视图轻而易举，
**模型(model)**
通俗理解就是服务器数据库上的增删改查，
**控制器(controller)**
则是两者之间的桥梁。MVC 的协同作用下完成了一个应用程序，这种模式极为传统而且市场占比也是挺高，虽然目前 MVVM 的趋势已经很明显，但是还是有很多老的项目一直在用 MVC

#### MVVM

MVVM,简单粗暴的理解就是用 VM
**(视图模型 ViewModel)**
替代了 MVC 里面的 C
**(控制器 controller)**
，ViewModel 其实就是为 View 量身定制的一个 model 主要靠前端代码完成。MVVM 模式便是使用的是数据绑定基础架构

从实际开发角度来说，可以简单的理解为 MVC 模式下本该后端做的控制器，模板引擎(套数据)甚至路由全部交给前端通过前端框架数据绑定去完成

这样的好处在于真正意义上前后端分离，前后端可以更加专注自己的领域。后端专注开发接口和数据库，前端专注交互体验。还有一点则是原本很多判断以及一些简单逻辑计算都是在后端服务器来完成的，现在全部放在了前端，明显可以减轻服务器的压力，也行有人会觉得那些判断计算量不足为题，但是我想说积羽沉舟的道理大家都懂

## SPA

单页 Web 应用（single page web application，SPA），就是只有一张 Web 页面的应用，是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序，比如你现在看到这个网站就是一个基于 `vuepress` 的单页，不信的话你可点击左侧菜单切换一下链接，你会发现整站是无刷新的，避免刷新页面可能产生的空白而引发的盲视（Change Blindness）<br>

> 变化盲视（Change Blindness） ：指视觉场景中的某些变化并未被观察者注意到的心理现象。产生这种现象的原因包括场景中的障碍物，眼球运动、地点的变化，或者是缺乏注意力等。——摘自《维基百科》

**特点**

- 速度：更好的用户体验，让用户在 web app 感受 native app 的速度和流畅<br>
- MVVM：经典 MVVM 开发模式，前后端各负其责<br>
- ajax：重前端，业务逻辑全部在本地操作，数据都需要通过 AJAX 同步、提交<br>
- 路由：在 URL 中采用#号来作为当前视图的地址,改变#号后的参数，页面并不会重载

缺点呢由于单页应用体量比较大，所以缺点就是首屏速度有些慢，不过这个在目前大部分硬件都较为优秀的移动互联网时代这些都不算什么大问题，其实在我刚做前端时候就想过早晚有一天会出现一个 NB 的网站不再会有跳转全部用 ajax 来无刷新体验一切，没想到到来的这么快

## API（接口）

对刚入门的小伙伴来说一开始理解接口这个词有点难度，尤其是起手学了 PHP 的 `interface` 之后更是一脸懵逼，其实很容易理解，你可以把它当做一个方法，你给它入参然后它就会返回你想要的东西，或者实现你想要的功能就是这么简单。

**这里需要强调一点，很多人在学习 echart 或者 VUE 的时候在官网常常会看到 `API` 这样的链接，点进去是接口文档，就误以为 `API === '文档'`**

## 语法糖

百度百科上面说了一大堆个人觉得比较难懂，其实最直白的说法语法糖不过是你代码中的一种简写

- [https://delly.me](https://delly.me/aff.php?aff=94)

  一个很不错的翻墙工具，10 块钱 100GB 不限时，网速可以，看视频不卡的哦 ( -\_,- )

- [https://www.iconfont.cn](https://www.iconfont.cn)

  非常棒的一个阿里图标库，可以直接下载 SVG AI PNG 格式

- [https://stackoverflow.com](https://stackoverflow.com)

  一个与程序相关的 IT 技术问答网站

- [https://caniuse.com](https://caniuse.com)

  浏览器兼容性查询

- [https://www.npmtrends.com](https://www.npmtrends.com/vue-vs-react-vs-angular)

  npm 下载量趋势对比可视化

- [https://uimovement.com](https://uimovement.com)

  各种好看酷炫前端设计

- [https://jsperf.com](https://jsperf.com)

  一个不错的 JS 性能对比测试网站

- [https://ant.design/docs/spec/introduce-cn](https://ant.design/docs/spec/introduce-cn)

  `Ant Design` 是阿里的一套非常棒的 UI，`bootstrap` 的时代已经过去，当然我这里更想介绍的是它关于
  **页面设计交互**
  的一些
  **规范总结**
  ，说的非常到位，可能做前端开发这么多年，你会觉得里面说的许多都是理所当然，当很少有人能够像它一样可以这么系统的说的清清楚楚

- [https://cloud.tencent.com/developer/devdocs](https://cloud.tencent.com/developer/devdocs)

  腾讯云出品的一个不错的开发手册集合，里面集合了前后端比较常用的框架、工具的使用手册

- [https://www.colorbox.io](https://www.colorbox.io)

  非常舒服的一个全站配色网站

- [https://www.flipkart.com](https://www.flipkart.com)

  印度的电商网站，个人认为这个相对同类型网站做的真好看

- [https://towardsdatascience.com](https://towardsdatascience.com)

  一个很多有趣文章的网站（但是要收费差评）

<br>
<br>
<br>
未完待续...
