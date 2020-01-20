<template>
  <div style="display:none">百度统计</div>
</template>

<script>
export default {
  beforeCreate() {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?ede2ba09d1e5c979d7ffc0075bd809e9";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  }
}
</script>