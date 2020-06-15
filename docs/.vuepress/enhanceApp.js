import { debounce, animationData, setCookie, getCookie } from './util'
import CursorEffects from './CursorEffects'

export default ({ Vue }) => {
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
  const comeback = '′▽`，我胡汉三又回来了'
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.querySelector('link[rel="icon"]').href = '/mayunhai/sad.ico'
      if(document.title !== comeback) title = document.title
      document.title = '宝宝心里苦，但我不说'
      clearTimeout(titleTime)
    }
    else {
      document.querySelector('link[rel="icon"]').href = '/mayunhai/favicon.ico'
      document.title = comeback
      titleTime = setTimeout(function () {
        document.title = title
      }, 1000);
    }
  }, false)

  // 夜间模式

  var lottie = document.createElement('script')
  lottie.setAttribute('type', 'text/javascript')
  lottie.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.6/lottie.min.js')
  document.body.appendChild(lottie)

  let anim
  let direction = 1

  const htmlDOm = document.querySelector('html')
  function toggleTheme() {
    anim.setDirection(direction)
    anim.play()
    direction = direction * -1

    if (direction == -1) {
      htmlDOm.style.filter = 'invert(90%)'
      document.getElementById('switch').style.filter = 'invert(100%)'
      setCookie('darkMode', 'true')
    } else {
      htmlDOm.style.filter = 'invert(0%)'
      document.getElementById('switch').style.filter = 'invert(0%)'
      setCookie('darkMode', 'false')
    }
  }

  // init darkMode
  const darkMode = getCookie('darkMode') ==='true'
  if (darkMode) {
    htmlDOm.style.filter = 'invert(90%)'
  }

  lottie.onload = function () {
    var div = document.createElement('div')
    div.setAttribute('id', 'switch')
    div.onclick = toggleTheme
    document.body.appendChild(div)
    var animData = {
      container: document.getElementById('switch'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData
    };
    anim = bodymovin.loadAnimation(animData)

    if (darkMode) {
      toggleTheme()
    }
  }

  // 三级路由跳转
  const href = window.location.href
  if (href.includes('#')) {
    setTimeout(() => {
      window.location.href = href
    }, 150);
  }
}
