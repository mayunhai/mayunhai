/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac6c09d106dcdabfde91eede36e36082"
  },
  {
    "url": "array/Conversion.html",
    "revision": "999d3493db7f96b3c1db73466e796979"
  },
  {
    "url": "array/DealWith.html",
    "revision": "65cc2a1c955e85b19bfe21d062c93929"
  },
  {
    "url": "array/Ergodic.html",
    "revision": "c26c4c64af32d57fd0f11478dbd5a488"
  },
  {
    "url": "array/index.html",
    "revision": "451abb09e35f7b18229383db139d336c"
  },
  {
    "url": "array/Judge.html",
    "revision": "8ba9dcf0bb1895a71d2b637b339c93c5"
  },
  {
    "url": "assets/css/0.styles.20f199e2.css",
    "revision": "faa330605cc1d56988bbc6f74c2127ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f20bb296.js",
    "revision": "1f74d76e615e328fe099e6a2d01e0921"
  },
  {
    "url": "assets/js/11.3096fc76.js",
    "revision": "bcd5b997219ce8ee15a762e752a16b57"
  },
  {
    "url": "assets/js/12.a1d9e77b.js",
    "revision": "a708ef089f9c2743f74a13dbfe280e47"
  },
  {
    "url": "assets/js/13.54f8d328.js",
    "revision": "d6f5f2a13bc0f91c0c3917c4a279c042"
  },
  {
    "url": "assets/js/14.51bcec62.js",
    "revision": "51f445962e00bd30a5f8a4180949011a"
  },
  {
    "url": "assets/js/15.129e2828.js",
    "revision": "aaac472fca382bb402fbb66959b2bb82"
  },
  {
    "url": "assets/js/16.d562e4fb.js",
    "revision": "3b1e4339ea2ae7475b1897a4aabeeee6"
  },
  {
    "url": "assets/js/17.209427ee.js",
    "revision": "f1ed6750fc391bb77c9ee9635025cb32"
  },
  {
    "url": "assets/js/18.064d59c5.js",
    "revision": "6ffb1000027431177149212b61634e12"
  },
  {
    "url": "assets/js/19.632835e5.js",
    "revision": "ed775a5d2665a9be9d9c02bc6f0fa7ba"
  },
  {
    "url": "assets/js/2.f955f218.js",
    "revision": "21ddc2939ce638202991b6aedff37c7c"
  },
  {
    "url": "assets/js/20.d5696074.js",
    "revision": "8f7b0239e2bed6fbed9a55ec7950c62e"
  },
  {
    "url": "assets/js/21.282e3bed.js",
    "revision": "302bd05d84961db6a87bb19afc968641"
  },
  {
    "url": "assets/js/22.ebca9cb3.js",
    "revision": "12f19e10c0c2c5992de4ee304751e393"
  },
  {
    "url": "assets/js/23.2ea5fc74.js",
    "revision": "0641ff4726f0f69e20567be73fa286eb"
  },
  {
    "url": "assets/js/24.336a5cb9.js",
    "revision": "850ee01967d1aa9e62268dfe536dd55f"
  },
  {
    "url": "assets/js/25.7c449262.js",
    "revision": "2533fd1c43197919077f42972c5f152b"
  },
  {
    "url": "assets/js/26.4cbc02e1.js",
    "revision": "dbb942e6962c7c93932caa36624775b7"
  },
  {
    "url": "assets/js/27.4db20911.js",
    "revision": "e2b90ae6a4905cbffd00aeedd92599cf"
  },
  {
    "url": "assets/js/28.e326325a.js",
    "revision": "0568634e00575cdc899dab122257a1bd"
  },
  {
    "url": "assets/js/29.71bc5817.js",
    "revision": "393c76e2b9e864d7c07be674f9c46688"
  },
  {
    "url": "assets/js/3.4919b817.js",
    "revision": "f78308fcf4afdc17f53d62730eabd54b"
  },
  {
    "url": "assets/js/30.ac0aa78a.js",
    "revision": "20b9216bfe8e65a41cee3c8980ed4cb0"
  },
  {
    "url": "assets/js/31.dd41c270.js",
    "revision": "86bbde62451657b80cdb85d06894de4e"
  },
  {
    "url": "assets/js/32.103d21d6.js",
    "revision": "fd4883d81ee935e8efaef74daad06133"
  },
  {
    "url": "assets/js/33.be778db3.js",
    "revision": "1085fe258bc7c765d905dd270b32672a"
  },
  {
    "url": "assets/js/34.f90d02c4.js",
    "revision": "8ba376ac6f83ad7f31b302f9c2a21145"
  },
  {
    "url": "assets/js/35.2c8b3ad2.js",
    "revision": "17f30dbd21613b5545a5bb736596fcd4"
  },
  {
    "url": "assets/js/36.de182728.js",
    "revision": "0b1285639130374bd40fae4ac4b54032"
  },
  {
    "url": "assets/js/37.2d304f84.js",
    "revision": "d762824a7b4996c3e3091ee023b88890"
  },
  {
    "url": "assets/js/38.8b0c4554.js",
    "revision": "44cbf6418b5529d6603e6a14ee58070a"
  },
  {
    "url": "assets/js/39.140b493a.js",
    "revision": "f66b83e1b1483daaa2374d2d5c0cc51f"
  },
  {
    "url": "assets/js/4.6971d544.js",
    "revision": "b304213c4a201cb9208b161686d87f5c"
  },
  {
    "url": "assets/js/40.31bb63dc.js",
    "revision": "de1ac2c2c0cdfa9b59edce3f9227d1d4"
  },
  {
    "url": "assets/js/41.1eb2cbbd.js",
    "revision": "deb07750e09b8ac842053fc0b29b5336"
  },
  {
    "url": "assets/js/42.6e127469.js",
    "revision": "4089aed834213f7ace5c9ca4aacc0e6c"
  },
  {
    "url": "assets/js/43.0215d670.js",
    "revision": "02296db475c51b92f4e67cafc588a900"
  },
  {
    "url": "assets/js/44.8148a45b.js",
    "revision": "dfa08c5de853eff7a51acb47a45ac1ec"
  },
  {
    "url": "assets/js/45.dff2794a.js",
    "revision": "b04d9ba4f7bd9da49679118243b684ea"
  },
  {
    "url": "assets/js/46.7516bb0b.js",
    "revision": "e25b394e54d8724480951fbe0b891a26"
  },
  {
    "url": "assets/js/47.666ffb76.js",
    "revision": "99af56f597edc890ecb5b172c382dc12"
  },
  {
    "url": "assets/js/48.03def4dd.js",
    "revision": "c3695158d4ae711e4dd8116ee62d38ab"
  },
  {
    "url": "assets/js/49.dae21900.js",
    "revision": "2abc8a42707312e2012f32222b638ec4"
  },
  {
    "url": "assets/js/5.36704b8c.js",
    "revision": "bccf04eb2dcee0b85a3cd3bb5d082b3a"
  },
  {
    "url": "assets/js/50.581be928.js",
    "revision": "bee6d210f1acd9d4355ec5e9727dfebd"
  },
  {
    "url": "assets/js/51.c4295e69.js",
    "revision": "70599e204582c89974879555ef382c78"
  },
  {
    "url": "assets/js/52.723b67c0.js",
    "revision": "d23886027913c7da55ac2f3e1723de46"
  },
  {
    "url": "assets/js/53.06a22d5f.js",
    "revision": "29849759335df4ea882d0106f96f3ca7"
  },
  {
    "url": "assets/js/54.ad81c45e.js",
    "revision": "da719af43fd19847089e5aa6450f35c1"
  },
  {
    "url": "assets/js/55.9c99ef54.js",
    "revision": "c07e988a4e7e6d60be672bd140b87eac"
  },
  {
    "url": "assets/js/56.3fcfa58f.js",
    "revision": "cf229ceeac40671eab72dba5ea267a88"
  },
  {
    "url": "assets/js/57.7cabfc52.js",
    "revision": "8a13f2916e0df52e22bab2f40ff04bfd"
  },
  {
    "url": "assets/js/58.3a39be14.js",
    "revision": "7fdca1fef8220941da41e9c0d525e3ef"
  },
  {
    "url": "assets/js/6.d4a2e720.js",
    "revision": "47a3b30a674500a2a19addbbe78167f4"
  },
  {
    "url": "assets/js/7.63d44e9b.js",
    "revision": "e760731592cb00a2eb61370eba48cd14"
  },
  {
    "url": "assets/js/8.ef65947b.js",
    "revision": "ed221df9ad849b5bb1701fd18570c761"
  },
  {
    "url": "assets/js/9.b2379340.js",
    "revision": "b875fb3f969e5e94535b23cac6fc8744"
  },
  {
    "url": "assets/js/app.31cf851b.js",
    "revision": "5ea2cf523e1c450c091d2007ba3b2583"
  },
  {
    "url": "blog/CSS.html",
    "revision": "ecfee4672eb16645403773474bf27ec3"
  },
  {
    "url": "blog/CSS/500字重不能正常显示的问题.html",
    "revision": "57000be2bd7ea329b4b0ace548a75055"
  },
  {
    "url": "blog/CSS/CSS3自适应四个关键词.html",
    "revision": "5f6e38b32c08476a38e3966f2f00bd1e"
  },
  {
    "url": "blog/CSS/CSS动画性能优化will-change.html",
    "revision": "bc85a90ee3ef8319ae3141758dca783e"
  },
  {
    "url": "blog/CSS/CSS十个灵活运用小技巧.html",
    "revision": "7887703c2ecae38d6ffeb420465ead23"
  },
  {
    "url": "blog/CSS/CSS实现毛玻璃导航.html",
    "revision": "98514db4c9fc2d1a27b18973fd25e5f6"
  },
  {
    "url": "blog/CSS/margin重叠.html",
    "revision": "a7d593d5f7c1e0bb160f5370401a9e84"
  },
  {
    "url": "blog/CSS/px、em、rem.html",
    "revision": "2169b1f37037e1cd8337edcca42d8f69"
  },
  {
    "url": "blog/CSS/white-space实现换行.html",
    "revision": "283b9f29b2f249013efd9c8372da1224"
  },
  {
    "url": "blog/CSS/垂直居中.html",
    "revision": "72e1ab7e3d77595495e77e0cafbf208f"
  },
  {
    "url": "blog/CSS/多个span迷之间距.html",
    "revision": "a111237badbbf972381fb28a52295f89"
  },
  {
    "url": "blog/CSS/文字前面的绝对垂直居中小圆点.html",
    "revision": "52f371f4213e92f68f41784abd4aca21"
  },
  {
    "url": "blog/CSS/渐变色文字.html",
    "revision": "961faff86e5e9a375632b90a7eae6937"
  },
  {
    "url": "blog/HTML.html",
    "revision": "c8c47b1b19f2bf9deab21c1973a262a1"
  },
  {
    "url": "blog/HTML/element UI 十个小细节.html",
    "revision": "68d088674728ef9da604202d686bd869"
  },
  {
    "url": "blog/HTML/切图一定要切偶数像素图片.html",
    "revision": "cfc510b88cbea24ddf0aac2f05228ee8"
  },
  {
    "url": "blog/HTML/块行标签.html",
    "revision": "ce7501fabebcaeace6ea2076e65db82c"
  },
  {
    "url": "blog/index.html",
    "revision": "2d03ea41c5802b3ecccf02871cd3b17b"
  },
  {
    "url": "blog/Javascript.html",
    "revision": "5d6fe806f355b3486fa4ea20277f5210"
  },
  {
    "url": "blog/Javascript/15行简单实现 Promise.html",
    "revision": "854b21f44982a6c4773a0af505133101"
  },
  {
    "url": "blog/Javascript/17行手写 promiseAll.html",
    "revision": "13e3783741d162c642d1f2f9b8de6897"
  },
  {
    "url": "blog/Javascript/20行简单实现全局事件 EventBus.html",
    "revision": "c879c4c0699062c329adba8e27fc8661"
  },
  {
    "url": "blog/Javascript/async函数容易忽视的问题.html",
    "revision": "31a108a16e80127746edaca2153c94f3"
  },
  {
    "url": "blog/Javascript/IntersectionObserver监听可视区域.html",
    "revision": "922d973d4442fac37e8073cf69afc12d"
  },
  {
    "url": "blog/Javascript/JS 多线程编程.html",
    "revision": "caf94f68aaad477a31cefccf0f30b88d"
  },
  {
    "url": "blog/Javascript/let、const、var区别.html",
    "revision": "cd78045868917961694435761b144970"
  },
  {
    "url": "blog/Javascript/setTimeout的理解.html",
    "revision": "cd4cecc39148dfd200f73e5eb320ff24"
  },
  {
    "url": "blog/Javascript/VUE十个需要注意的细节.html",
    "revision": "d4b0caff0c75ec45d89a7d6967f80556"
  },
  {
    "url": "blog/Javascript/webpack 4 动态加载依赖.html",
    "revision": "88780c4ebd0252c080d0a4dd02c845f4"
  },
  {
    "url": "blog/Javascript/优雅地巧妙使用运算符.html",
    "revision": "aa61df0f00f91f46f5ddd557110b0e18"
  },
  {
    "url": "blog/Javascript/遍历同步异步.html",
    "revision": "3f6e64394eed4410342fb7f54791f04f"
  },
  {
    "url": "column-select.gif",
    "revision": "f2eeb9a9bb032105c9489bbdc6e74e97"
  },
  {
    "url": "heapSort.gif",
    "revision": "658d0f58eed41a5c11cd1d1c039269ba"
  },
  {
    "url": "home.png",
    "revision": "c50d80ad99f38853e1516813909f45ff"
  },
  {
    "url": "icons/home.png",
    "revision": "c50d80ad99f38853e1516813909f45ff"
  },
  {
    "url": "index.html",
    "revision": "22e8bd06fa4f0467b0c423d9dcddadd1"
  },
  {
    "url": "Regular/index.html",
    "revision": "51b1f6687dbea48c5bada659dfd8c37c"
  },
  {
    "url": "sort/index.html",
    "revision": "6c8a706f9091f074ab717a3b0b8f34a1"
  },
  {
    "url": "sort/One.html",
    "revision": "85fdbf285344c528c9933bdb8c2509d5"
  },
  {
    "url": "sort/Other.html",
    "revision": "bb8d3bf4b48c1a4b0d0fdd4e27e8d797"
  },
  {
    "url": "sort/Two.html",
    "revision": "104eb15cd70c63f0e67b97c18962d799"
  },
  {
    "url": "util/index.html",
    "revision": "c5f0ed30df0898a7a3a75a7367fa8340"
  },
  {
    "url": "VScode/index.html",
    "revision": "5887b003129b29e1902d104059df6c68"
  },
  {
    "url": "website/index.html",
    "revision": "4963ce23bb5474fd5f4a05383d82c2d0"
  },
  {
    "url": "website/Recommend.html",
    "revision": "db19fa57ffe547f8d42e79f07356d0a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
