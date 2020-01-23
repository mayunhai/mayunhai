import { debounce } from './util'
import CursorEffects from './CursorEffects'

export default () => {
  // 百度统计
  window._hmt = window._hmt || [];
  (function() {
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?ede2ba09d1e5c979d7ffc0075bd809e9';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(hm, s);
  })();

  // 点击特效
  let cursorEffects = new CursorEffects()
  cursorEffects.init()
  window.addEventListener('resize', debounce(function() {
    cursorEffects.destroy()
    cursorEffects = new CursorEffects()
    cursorEffects.init()
  }, 300), false)

  // title 变化
  let title = 'MaYunHai'
  let titleTime
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.querySelector('link[rel="icon"]').href = '/mayunhai/sad.ico'
      title = document.title
      document.title = '宝宝心里苦，但我不说'
      clearTimeout(titleTime)
    }
    else {
      document.querySelector('link[rel="icon"]').href = '/mayunhai/favicon.ico'
      document.title = '′▽`，我胡汉三又回来了'
      titleTime = setTimeout(function () {
        document.title = title
      }, 1000);
    }
  }, false)
}
