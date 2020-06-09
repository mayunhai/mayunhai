## 插件推荐

<table>
  <tr>
    <th style="width: 300px;">插件名</th>
    <th style="width: calc(100% - 300px);min-width: 300px;">作用</th>
  </tr>
  <tr>
    <td class="c_orange">Auto Rename Tag</td>
    <td>自动补全标签</td>
  </tr>
  <tr>
    <td class="c_orange">Autoprefixer</td>
    <td>自动补全css兼容写法</td>
  </tr>
  <tr>
    <td class="c_orange">Beautify</td>
    <td>格式化代码</td>
  </tr>
  <tr>
    <td class="c_orange">Beautify css/sass/scss/less</td>
    <td>格式化CSS代码</td>
  </tr>
  <tr>
    <td class="c_orange">Bookmarks</td>
    <td>书签(可以精确到行)</td>
  </tr>
  <tr>
    <td class="c_orange">Bracket Pair Colorizer</td>
    <td>彩色括号匹配</td>
  </tr>
  <tr>
    <td class="c_orange">Chinese (Simplified) Language Pack for Visual Studio Code</td>
    <td>中文翻译</td>
  </tr>
  <tr>
    <td class="c_orange">Color Highlight</td>
    <td>标记所有颜色背景为其对于颜色</td>
  </tr>
  <tr>
    <td class="c_orange">Color Info</td>
    <td>颜色信息及转换</td>
  </tr>
  <tr>
    <td class="c_orange">Debugger for Chrome</td>
    <td>Chrome调试工具</td>
  </tr>
  <tr>
    <td class="c_orange">EditorConfig for VS Code</td>
    <td>EditorConfig自动识别配置</td>
  </tr>
  <tr>
    <td class="c_orange">ESLint</td>
    <td>ES语法检测且能设置保存自动格式化</td>
  </tr>
  <tr>
    <td class="c_orange">filesize</td>
    <td>左下角显示文件大小(点击可看Gzipped大小)</td>
  </tr>
  <tr>
    <td class="c_orange">Git History</td>
    <td>git历史查询插件</td>
  </tr>
  <tr>
    <td class="c_orange">GitLens — Git supercharged</td>
    <td>git可视化工具</td>
  </tr>
  <tr>
    <td class="c_orange">Guides</td>
    <td>缩进指示线</td>
  </tr>
  <tr>
    <td class="c_orange">Highlight Matching Tag</td>
    <td>高亮匹配标签</td>
  </tr>
  <tr>
    <td class="c_orange">HTML CSS Support</td>
    <td>HTML CSS 输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">HTML Snippets</td>
    <td>HTML 输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">IntelliSense for CSS class names in HTML</td>
    <td>CSS 标签调用输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">JavaScript (ES6) code snippets</td>
    <td>ES6 输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">Minify</td>
    <td>压缩 CSS JS 文件</td>
  </tr>
  <tr>
    <td class="c_orange">Open In Default Browser</td>
    <td>右键直接在默认浏览器中打开</td>
  </tr>
  <tr>
    <td class="c_orange">Path Intellisense</td>
    <td>文件、图片路径自动提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">Power Mode</td>
    <td>有趣的打字特效</td>
  </tr>
  <tr>
    <td class="c_orange">Settings Sync</td>
    <td>在github上远程备份vscode设置</td>
  </tr>
  <tr>
    <td class="c_orange">stylelint</td>
    <td>CSS检测且能设置保存自动格式化</td>
  </tr>
  <tr>
    <td class="c_orange">Sublime Text Keymap and Settings Importer</td>
    <td>Sublime 快捷键</td>
  </tr>
  <tr>
    <td class="c_orange">Theme - Seti-Monokai</td>
    <td>超级舒适的黑色背景配色</td>
  </tr>
  <tr>
    <td class="c_orange">Vetur</td>
    <td>VUE 输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">VSCode Great Icons</td>
    <td>文件名彩色图标</td>
  </tr>
  <tr>
    <td class="c_orange">Vue 2 Snippets</td>
    <td>VUE2 输入提示补全</td>
  </tr>
  <tr>
    <td class="c_orange">VS Code Counter</td>
    <td>代码行数统计</td>
  </tr>
</table>


## 设置

  在点击 `文件(F)` -> `首选项` -> `设置` 里面我们可以找到 VScode 的设置部分，里面功能很全很细都有中文解释我就不细说，只想要强调两点硬核一些的设置

  - 控制是否搜索中控制符号链接

  :::tip
  是不是很难懂什么意思，我其实也不是特别懂，但是在配置特别差的电脑上面关掉这个设置你会发现无比的畅快
  :::

  ```JSON
  {
    "search.followSymlinks": false,
  }
  ```

  - 保存时候自动安装 eslint stylelint 配置规则对文档进行格式化

  ```JSON
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
  }
  ```



## 使用技巧

- `Ctrl` + `D`

  快速选择多个单词，并进行多行编辑，多用于重命名变量，当然你也可用 `F2`

- `Shift` + `Alt` + 鼠标点击拖动选择多行

  快速选择多行，进行多行编辑，在特殊场景下会很好用

  ![Shift + Alt + 鼠标点击拖动选择多行](/mayunhai/column-select.gif)
  
- `Ctrl` + `Shift` + `D`

  选择单行多行直接复制在下方

- 电脑配置过低时候会觉得卡，可以设置 `settings.json` `"search.followSymlinks": false,`

  设置路径 `文件` -> `首选项` -> `设置`

- `Ctrl` + `P`

  快速查找文件，这个在 `chrome` 浏览器 `F12` 里面 `Sources`同样适用

- `Ctrl` + `Shift` + `P`

  各种扩展命令快捷搜索

- `Ctrl` + `~`

  打开终端

- `Ctrl` + `/` `Ctrl` + `A` `Ctrl` + `S`

  注释代码 全选 保存
 


<br>
未完待续...
