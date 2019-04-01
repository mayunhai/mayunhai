<p align="center">
  <img width="320" src="./docs/.vuepress/public/home.jpg">
</p>

使用方法：

```bash
npm install
npm run dev //开发环境
npm run build //打包
```
**Vuepress相关**

Escaping

```
::: tip
这里可以写一个关键性的小提示
:::

::: warning
这里可以写一个关键性的小警示
:::
```

Badge 标记
- text - string
- type - string, 可选值： "tip"|"warn"|"error"，默认值是： "tip"
- vertical - string, 可选值： "top"|"middle"，默认值是： "top"
```HTML
<Badge text="< 0.12.0" type='error'/>
<Badge text="< 0.12.0" type='warn'/>
<Badge text="0.12.0+"/>
```

Coming Soon

Base on [vuepress](https://vuepress.vuejs.org/zh/)

**本项目为个人博客**