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
    "revision": "31ed4b906302bd51e7fbeb9a16656e3c"
  },
  {
    "url": "array/Conversion.html",
    "revision": "3644e34562c63a6984027ea87ec58766"
  },
  {
    "url": "array/DealWith.html",
    "revision": "d095f0145827cc504b290af2abd4444d"
  },
  {
    "url": "array/Ergodic.html",
    "revision": "ffbb587e9894f6da3f2124f4aced0e3e"
  },
  {
    "url": "array/index.html",
    "revision": "478f1b1c0d3d1d23dc169c63d7f30471"
  },
  {
    "url": "array/Judge.html",
    "revision": "462c8c6bfe56b9c43af4aa2a9a6ca993"
  },
  {
    "url": "assets/css/0.styles.e3e0187d.css",
    "revision": "31a68507fb55bb0b3f77010a161822c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.736d421a.js",
    "revision": "beb07e884935cc276afaf3e9b4f5905e"
  },
  {
    "url": "assets/js/11.3f3e2ec3.js",
    "revision": "899ca9c1fd38702cd7ec26e1c7d38614"
  },
  {
    "url": "assets/js/12.63d994e8.js",
    "revision": "aff2f3b64e7ff7ae4ed4794d50a5d271"
  },
  {
    "url": "assets/js/13.c47e4477.js",
    "revision": "a941d991004e1366c0d698a4516114a1"
  },
  {
    "url": "assets/js/14.71f88c81.js",
    "revision": "4f1c39157af994e1defd6b57b2cf3b91"
  },
  {
    "url": "assets/js/15.049973e0.js",
    "revision": "08b99ab2dda7dd4f2114e560d84fea0d"
  },
  {
    "url": "assets/js/16.465d59a9.js",
    "revision": "8b86e6d2a5fa447c2dbce49eb79ffca2"
  },
  {
    "url": "assets/js/17.8ef32ded.js",
    "revision": "d91729d79e4b446423539e63cbff1169"
  },
  {
    "url": "assets/js/18.2a930842.js",
    "revision": "d2e8fd6921b2b5dff4c612e83a4afaa8"
  },
  {
    "url": "assets/js/19.40d170e2.js",
    "revision": "bfed24b7e8303f21098512a407d4d1d2"
  },
  {
    "url": "assets/js/2.0f5848a7.js",
    "revision": "1880dc4f7903b5b7257283b6966b3064"
  },
  {
    "url": "assets/js/20.79294299.js",
    "revision": "fd563b87023322c9b1972a96564396e0"
  },
  {
    "url": "assets/js/21.7bebb312.js",
    "revision": "01853304b2b98e46947a10b2061fdc93"
  },
  {
    "url": "assets/js/22.530a9e42.js",
    "revision": "c2ac69ed817bfda94620e20fda922830"
  },
  {
    "url": "assets/js/23.5e166573.js",
    "revision": "238b6a2a910177f16be6c968317122c9"
  },
  {
    "url": "assets/js/24.078b13d0.js",
    "revision": "b341c87dbf9652f65e3625c8be95b785"
  },
  {
    "url": "assets/js/25.517d6f6a.js",
    "revision": "480c1d43bbb75abec2629215087ebc1b"
  },
  {
    "url": "assets/js/26.74611af4.js",
    "revision": "5e6e5188ecd286910665786088ed952d"
  },
  {
    "url": "assets/js/27.2762a158.js",
    "revision": "1b2c310ed7a622956b1923800e28dd88"
  },
  {
    "url": "assets/js/28.61c0c85f.js",
    "revision": "a5191ac0d08a77e9e2c5374c686f2e9a"
  },
  {
    "url": "assets/js/29.d1b6b644.js",
    "revision": "eff445ee2484d065495361beaa76df75"
  },
  {
    "url": "assets/js/3.6ee593e4.js",
    "revision": "d14a422c13346a499a1a440fac7be69e"
  },
  {
    "url": "assets/js/30.06a27b9f.js",
    "revision": "e84a16651c86a277409b6df0da1bb8bf"
  },
  {
    "url": "assets/js/31.8e8b1934.js",
    "revision": "a1c1179aff52fb720b40be5bfc32fb4c"
  },
  {
    "url": "assets/js/32.cafb6f55.js",
    "revision": "92999a9a72b5cdc26c9af43b068c5c41"
  },
  {
    "url": "assets/js/33.1d2a1917.js",
    "revision": "71c331eec8602ddcc029914c5eb3ba35"
  },
  {
    "url": "assets/js/34.711545ad.js",
    "revision": "578826d990d5c64d0795a85fffb9679d"
  },
  {
    "url": "assets/js/35.d38f3711.js",
    "revision": "e0184b43d48261ac94bad657f1c1653c"
  },
  {
    "url": "assets/js/36.0f46ea4f.js",
    "revision": "073806f88a8644abaec7042574e16b05"
  },
  {
    "url": "assets/js/37.e2eba600.js",
    "revision": "51c8693bcbb675bae430fbf815712b12"
  },
  {
    "url": "assets/js/38.379c69fe.js",
    "revision": "019efd189698a7db88b09c2f070711e1"
  },
  {
    "url": "assets/js/39.4a761867.js",
    "revision": "c8c1d922cbd02e5598add43a4352744e"
  },
  {
    "url": "assets/js/4.71d6e31c.js",
    "revision": "c642ab2c007fa9d2b2345f0985b330da"
  },
  {
    "url": "assets/js/40.123b2161.js",
    "revision": "1f0c06b53af88b9c930b82e8f867a65d"
  },
  {
    "url": "assets/js/41.7a614a9d.js",
    "revision": "2712cc27d5b83a7b2db73ad4781a3b18"
  },
  {
    "url": "assets/js/42.7534e77c.js",
    "revision": "eaa52e2ddbf88ef913640fe79a14970c"
  },
  {
    "url": "assets/js/43.4a9ee715.js",
    "revision": "ad22cf5829ed0f740e8d4f61f68ea99c"
  },
  {
    "url": "assets/js/44.dbdc5b4a.js",
    "revision": "636a03ddab1962e4704744b999a1e478"
  },
  {
    "url": "assets/js/45.30ebd3bc.js",
    "revision": "14a583d2e6de9b7dcf42cb8a28ea3525"
  },
  {
    "url": "assets/js/46.4785b4cf.js",
    "revision": "f3f00c6aba46fdfff47f5417bcdf75e4"
  },
  {
    "url": "assets/js/47.cb2ba38b.js",
    "revision": "0be056f8d7c3fa256363e905ffca6bb8"
  },
  {
    "url": "assets/js/48.2af2c5d9.js",
    "revision": "3c81f9bae5f147c986c23e73d5b24fd4"
  },
  {
    "url": "assets/js/49.d654285b.js",
    "revision": "8238f8a2e8d3a748135d4458941d98a3"
  },
  {
    "url": "assets/js/5.b5146041.js",
    "revision": "193d4d29d83f710d980770f729c1970d"
  },
  {
    "url": "assets/js/50.e79201d8.js",
    "revision": "139d902238d96ee31fa1a4e03555ea21"
  },
  {
    "url": "assets/js/51.41ca1204.js",
    "revision": "ad6577529df4eb87ce5a5aa3df62ac07"
  },
  {
    "url": "assets/js/52.9bcaa6c1.js",
    "revision": "92ba7fb9fa7b59f5838aa732cca2e1ad"
  },
  {
    "url": "assets/js/53.8ceb5989.js",
    "revision": "392e0ab4e2a1fd4a2dcd568e500af6c7"
  },
  {
    "url": "assets/js/54.b3ebd786.js",
    "revision": "13f84b88571486e1a41aa9f8c423cb9a"
  },
  {
    "url": "assets/js/55.b2cbcb3d.js",
    "revision": "27f845d63a77100a148151791a6188dc"
  },
  {
    "url": "assets/js/56.bdda37e0.js",
    "revision": "7b6e0c7dbfd1271a33c0907ea626c594"
  },
  {
    "url": "assets/js/57.ee18eddd.js",
    "revision": "35243b3acaac504e7f08423a5e834fb9"
  },
  {
    "url": "assets/js/6.be91d9b2.js",
    "revision": "3acd970866d01c0393f7d794988062b7"
  },
  {
    "url": "assets/js/7.0f133f31.js",
    "revision": "097af8577589fa1400abcd0bddf312f7"
  },
  {
    "url": "assets/js/8.7b5cb65f.js",
    "revision": "f762f3658bacbc29ad9763a2b3bbb517"
  },
  {
    "url": "assets/js/9.0ee887a2.js",
    "revision": "6155422af7d86400c78496d56e8291c8"
  },
  {
    "url": "assets/js/app.ab6a6edf.js",
    "revision": "5326c7248cc98599071c6af4502fb996"
  },
  {
    "url": "blog/CSS.html",
    "revision": "b9fd10c42df99b4800b631ed1a255c86"
  },
  {
    "url": "blog/CSS/500字重不能正常显示的问题.html",
    "revision": "ed626335af4c8768af8f315ec66617d8"
  },
  {
    "url": "blog/CSS/CSS3自适应四个关键词.html",
    "revision": "1cbab5325c7fb566cf5c0636d9249ade"
  },
  {
    "url": "blog/CSS/CSS动画性能优化will-change.html",
    "revision": "ce6937170eac8fe06199842d64a6b1f1"
  },
  {
    "url": "blog/CSS/CSS十个灵活运用小技巧.html",
    "revision": "6f95d84d189253401f8f3f85a76316a8"
  },
  {
    "url": "blog/CSS/CSS实现毛玻璃导航.html",
    "revision": "7b2cead52ddb68c7c0a8857c605cbc41"
  },
  {
    "url": "blog/CSS/margin重叠.html",
    "revision": "16177d5c5676d8b0343f72248691834a"
  },
  {
    "url": "blog/CSS/px、em、rem.html",
    "revision": "79f643193f167b76975adf423275a814"
  },
  {
    "url": "blog/CSS/white-space实现换行.html",
    "revision": "76e06bd73acd4d8cec07c99f2fdfe376"
  },
  {
    "url": "blog/CSS/垂直居中.html",
    "revision": "0e1b374656dfd7dc12ddf9833c347ad1"
  },
  {
    "url": "blog/CSS/多个span迷之间距.html",
    "revision": "5629313449d5a864ee75414c6de74161"
  },
  {
    "url": "blog/CSS/文字前面的绝对垂直居中小圆点.html",
    "revision": "58b82856ca36799118576c73ad134851"
  },
  {
    "url": "blog/CSS/渐变色文字.html",
    "revision": "1c372f87d1cca7f999ed14a355142b22"
  },
  {
    "url": "blog/HTML.html",
    "revision": "1d7caf5c9ba92ee54cbea013c927e2a0"
  },
  {
    "url": "blog/HTML/element UI 十个小细节.html",
    "revision": "b4d8f3b6a0348c1db2aea5b38194e8ee"
  },
  {
    "url": "blog/HTML/切图一定要切偶数像素图片.html",
    "revision": "0c81789ed8c3020cee09eaac65a1e67e"
  },
  {
    "url": "blog/HTML/块行标签.html",
    "revision": "148f531225efc8c440507a1eccebc058"
  },
  {
    "url": "blog/index.html",
    "revision": "937ca27432db85354d84bff5062874af"
  },
  {
    "url": "blog/Javascript.html",
    "revision": "4ddee86d6135e470c26313eb9624a9dc"
  },
  {
    "url": "blog/Javascript/15行简单实现 Promise.html",
    "revision": "67de082cd9cea6f06dfe9d46e4e54054"
  },
  {
    "url": "blog/Javascript/20行简单实现全局事件 EventBus.html",
    "revision": "1f8deab31b7723e9ade558b38bfa5a22"
  },
  {
    "url": "blog/Javascript/async函数容易忽视的问题.html",
    "revision": "99e68a1e82001651af75e42515ff4d6d"
  },
  {
    "url": "blog/Javascript/IntersectionObserver监听可视区域.html",
    "revision": "4b73902e9ef30cb5bed9c5946dd9ae06"
  },
  {
    "url": "blog/Javascript/JS 多线程编程.html",
    "revision": "fe6a7cddcc8d8e432f64f918fb9ab41b"
  },
  {
    "url": "blog/Javascript/let、const、var区别.html",
    "revision": "22ef150d59cca4a0e68351c338b834e5"
  },
  {
    "url": "blog/Javascript/setTimeout的理解.html",
    "revision": "8940b41e8253294ef842ce6e633577c6"
  },
  {
    "url": "blog/Javascript/VUE十个需要注意的细节.html",
    "revision": "29eac17cc2cb609b8036ba6bf4ad1782"
  },
  {
    "url": "blog/Javascript/webpack 4 动态加载依赖.html",
    "revision": "a41cdc7cfa57a720a21c12b0e1085cd7"
  },
  {
    "url": "blog/Javascript/优雅地巧妙使用运算符.html",
    "revision": "eda677a50972d3c8b665ca0c8e664c09"
  },
  {
    "url": "blog/Javascript/遍历同步异步.html",
    "revision": "bf99c09f35072445ab4e4c0ca3db1040"
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
    "revision": "845dd8305c80e83b3d406d9082875b0a"
  },
  {
    "url": "Regular/index.html",
    "revision": "500bc4a7864ff9779615a3b2f3bbc1ec"
  },
  {
    "url": "sort/index.html",
    "revision": "77380284fdbb2fd640aba2410c5435bf"
  },
  {
    "url": "sort/One.html",
    "revision": "1ed4258abdb5b0f9d5ca47d7d9bcf96d"
  },
  {
    "url": "sort/Other.html",
    "revision": "89d0f6c81c0d86dfc7761b3a7bf374d0"
  },
  {
    "url": "sort/Two.html",
    "revision": "b9a7c4af064b1c64ef22b2b9b3b45921"
  },
  {
    "url": "util/index.html",
    "revision": "b103b7312ab5c62b39b283a0f8d6be4e"
  },
  {
    "url": "VScode/index.html",
    "revision": "e0b707a33d82ee92bf2c1f2e833ad1ac"
  },
  {
    "url": "website/index.html",
    "revision": "b7fd6c11d27b71025f2a35130580c0a7"
  },
  {
    "url": "website/Recommend.html",
    "revision": "3fdafdaea4fad136f889a178b835fa83"
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
