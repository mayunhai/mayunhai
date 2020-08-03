/**
 * @description 去抖函数
 * @param {Function} func 触发的回调函数
 * @param {Number} wait 间隔时间（毫秒）
 * @param {Boolean} immediate 如果设定为immediate===true，则首次触发就会调用回调函数
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function setCookie(cname, cvalue, exdays = 99999) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}

export function getCookie(cname) {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
  }
  return ''
}

export function on(element, event, handler, capture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, capture)
  }
}

export function off(element, event, handler, capture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, capture)
  }
}

export const animationData = {
  v: '5.4.4',
  fr: 60,
  ip: 0,
  op: 40,
  w: 4056,
  h: 4056,
  nm: 'Artboard',
  ddd: 0,
  assets: [],
  fonts: {
    list: [{
      fName: 'PingFangTC-Semibold',
      fFamily: 'PingFang TC',
      fStyle: 'Semibold',
      ascent: 72.7996826171875
    }]
  },
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 3,
    nm: '▽ Group 6',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [2028, 2436, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [936, 846, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 14,
    ty: 3,
    nm: 'PPPPP',
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.144,
            y: 1
          },
          o: {
            x: 0.333,
            y: 0
          },
          t: 0,
          s: [533, 429, 0],
          e: [1369, 429, 0],
          to: [139.333, 0, 0],
          ti: [-139.333, 0, 0]
        }, {
          t: 40
        }],
        ix: 2
      },
      a: {
        a: 0,
        k: [339, 339, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 15,
    ty: 4,
    nm: 'Oval Copy 8',
    parent: 14,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [219, 243, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-1.93, 0],
              [0, 1.38],
              [1.93, 0],
              [0, -1.38]
            ],
            o: [
              [1.93, 0],
              [0, -1.38],
              [-1.93, 0],
              [0, 1.38]
            ],
            v: [
              [0, 2.5],
              [3.5, 0],
              [0, -2.5],
              [-3.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy 8',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 16,
    ty: 4,
    nm: 'Oval',
    parent: 14,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [561, 243, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-1.93, 0],
              [0, 1.38],
              [1.93, 0],
              [0, -1.38]
            ],
            o: [
              [1.93, 0],
              [0, -1.38],
              [-1.93, 0],
              [0, 1.38]
            ],
            v: [
              [0, 2.5],
              [3.5, 0],
              [0, -2.5],
              [-3.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 17,
    ty: 3,
    nm: '▽ Group',
    parent: 14,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [339, 339, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [339, 339, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 19,
    ty: 3,
    nm: '▽ Group 2',
    parent: 17,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [339.051, 99.333, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [171, 24, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 20,
    ty: 4,
    nm: 'Rectangle Copy',
    parent: 19,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.667,
            y: 1
          },
          o: {
            x: 0.333,
            y: 0
          },
          t: 0,
          s: [301.333, 23.179, 0],
          e: [301.333, -86.821, 0],
          to: [0, -18.333, 0],
          ti: [0, 18.333, 0]
        }, {
          t: 40
        }],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          t: 0,
          s: [-100, 100, 100],
          e: [0, 0, 100]
        }, {
          t: 40
        }],
        ix: 6
      }
    },
    ao: 0,
    ef: [{
      ty: 25,
      nm: 'Drop Shadow',
      np: 9,
      mn: 'ADBE Drop Shadow',
      ix: 1,
      en: 1,
      ef: [{
        ty: 2,
        nm: 'Shadow Color',
        mn: 'ADBE Drop Shadow-0001',
        ix: 1,
        v: {
          a: 0,
          k: [0.93725502491, 0.819607973099, 0.745097994804, 1],
          ix: 1
        }
      }, {
        ty: 0,
        nm: 'Opacity',
        mn: 'ADBE Drop Shadow-0002',
        ix: 2,
        v: {
          a: 0,
          k: 255,
          ix: 2
        }
      }, {
        ty: 0,
        nm: 'Direction',
        mn: 'ADBE Drop Shadow-0003',
        ix: 3,
        v: {
          a: 0,
          k: 180,
          ix: 3
        }
      }, {
        ty: 0,
        nm: 'Distance',
        mn: 'ADBE Drop Shadow-0004',
        ix: 4,
        v: {
          a: 0,
          k: 12,
          ix: 4
        }
      }, {
        ty: 0,
        nm: 'Softness',
        mn: 'ADBE Drop Shadow-0005',
        ix: 5,
        v: {
          a: 0,
          k: 48,
          ix: 5
        }
      }, {
        ty: 7,
        nm: 'Shadow Only',
        mn: 'ADBE Drop Shadow-0006',
        ix: 6,
        v: {
          a: 0,
          k: 0,
          ix: 6
        }
      }, {
        ty: 7,
        nm: 'GPU Rendering',
        mn: 'ADBE Force CPU GPU',
        ix: 7,
        v: {
          a: 0,
          k: 1,
          ix: 7
        }
      }]
    }],
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-6.761, -2.113],
              [6.759, -3.863],
              [6.759, 3.867],
              [-6.761, 3.867]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0.925490021706, 0.850979983807, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle Copy',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 21,
    ty: 4,
    nm: 'Rectangle',
    parent: 19,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.667,
            y: 1
          },
          o: {
            x: 0.333,
            y: 0
          },
          t: 0,
          s: [40.564, 23.179, 0],
          e: [40.564, -86.821, 0],
          to: [0, -18.333, 0],
          ti: [0, 18.333, 0]
        }, {
          t: 40
        }],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          t: 0,
          s: [100, 100, 100],
          e: [0, 0, 100]
        }, {
          t: 40
        }],
        ix: 6
      }
    },
    ao: 0,
    ef: [{
      ty: 25,
      nm: 'Drop Shadow',
      np: 9,
      mn: 'ADBE Drop Shadow',
      ix: 1,
      en: 1,
      ef: [{
        ty: 2,
        nm: 'Shadow Color',
        mn: 'ADBE Drop Shadow-0001',
        ix: 1,
        v: {
          a: 0,
          k: [0.93725502491, 0.819607973099, 0.745097994804, 1],
          ix: 1
        }
      }, {
        ty: 0,
        nm: 'Opacity',
        mn: 'ADBE Drop Shadow-0002',
        ix: 2,
        v: {
          a: 0,
          k: 255,
          ix: 2
        }
      }, {
        ty: 0,
        nm: 'Direction',
        mn: 'ADBE Drop Shadow-0003',
        ix: 3,
        v: {
          a: 0,
          k: 180,
          ix: 3
        }
      }, {
        ty: 0,
        nm: 'Distance',
        mn: 'ADBE Drop Shadow-0004',
        ix: 4,
        v: {
          a: 0,
          k: 12,
          ix: 4
        }
      }, {
        ty: 0,
        nm: 'Softness',
        mn: 'ADBE Drop Shadow-0005',
        ix: 5,
        v: {
          a: 0,
          k: 48,
          ix: 5
        }
      }, {
        ty: 7,
        nm: 'Shadow Only',
        mn: 'ADBE Drop Shadow-0006',
        ix: 6,
        v: {
          a: 0,
          k: 0,
          ix: 6
        }
      }, {
        ty: 7,
        nm: 'GPU Rendering',
        mn: 'ADBE Force CPU GPU',
        ix: 7,
        v: {
          a: 0,
          k: 1,
          ix: 7
        }
      }]
    }],
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-6.761, -2.113],
              [6.759, -3.863],
              [6.759, 3.867],
              [-6.761, 3.867]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0.925490021706, 0.850979983807, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 22,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 23,
    ty: 4,
    nm: 'Oval Copy 4',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [165.154, 252.077, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          t: 0,
          s: [100, 100, 100],
          e: [70, 70, 100]
        }, {
          t: 40
        }],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-8.01, 0],
              [0, 8.01],
              [8.01, 0],
              [0, -8.01]
            ],
            o: [
              [8.01, 0],
              [0, -8.01],
              [-8.01, 0],
              [0, 8.01]
            ],
            v: [
              [0, 14.5],
              [14.5, 0],
              [0, -14.5],
              [-14.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'gf',
        o: {
          a: 0,
          k: 100,
          ix: 10
        },
        r: 1,
        bm: 0,
        g: {
          p: 3,
          k: {
            a: 0,
            k: [0, 0.392, 0.275, 0.219, 0.5, 0.196, 0.137, 0.109, 1, 0, 0, 0, 0, 0.5, 0.5, 0.5, 1, 0.5],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [13.141, -12.689],
          ix: 5
        },
        e: {
          a: 0,
          k: [0, 14.5],
          ix: 6
        },
        t: 1,
        nm: 'Gradient Fill 1',
        mn: 'ADBE Vector Graphic - G-Fill',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.207801997662, 0.207801997662, 0.207801997662, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy 4',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 24,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 25,
    ty: 4,
    nm: 'Oval Copy 3',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [507.051, 252.077, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 1,
        k: [{
          i: {
            x: [0.667, 0.667, 0.667],
            y: [1, 1, 1]
          },
          o: {
            x: [0.333, 0.333, 0.333],
            y: [0, 0, 0]
          },
          t: 0,
          s: [100, 100, 100],
          e: [70, 70, 100]
        }, {
          t: 40
        }],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-8.01, 0],
              [0, 8.01],
              [8.01, 0],
              [0, -8.01]
            ],
            o: [
              [8.01, 0],
              [0, -8.01],
              [-8.01, 0],
              [0, 8.01]
            ],
            v: [
              [0, 14.5],
              [14.5, 0],
              [0, -14.5],
              [-14.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'gf',
        o: {
          a: 0,
          k: 100,
          ix: 10
        },
        r: 1,
        bm: 0,
        g: {
          p: 3,
          k: {
            a: 0,
            k: [0, 0.392, 0.275, 0.219, 0.5, 0.196, 0.137, 0.109, 1, 0, 0, 0, 0, 0.5, 0.5, 0.5, 1, 0.5],
            ix: 9
          }
        },
        s: {
          a: 0,
          k: [13.141, -12.689],
          ix: 5
        },
        e: {
          a: 0,
          k: [0, 14.5],
          ix: 6
        },
        t: 1,
        nm: 'Gradient Fill 1',
        mn: 'ADBE Vector Graphic - G-Fill',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.207801997662, 0.207801997662, 0.207801997662, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy 3',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 26,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 27,
    ty: 4,
    nm: 'Oval Copy 2',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [507.051, 252.077, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-9.87, 0],
              [0, 9.87],
              [9.87, 0],
              [0, -9.87]
            ],
            o: [
              [9.87, 0],
              [0, -9.87],
              [-9.87, 0],
              [0, 9.87]
            ],
            v: [
              [0.002, 17.872],
              [17.872, 0.002],
              [0.002, -17.868],
              [-17.868, 0.002]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [1, 1, 1, 1],
            e: [1, 0.843137323856, 0.474509835243, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy 2',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 28,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 29,
    ty: 4,
    nm: 'Oval',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [165.154, 252.077, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-9.87, 0],
              [0, 9.87],
              [9.87, 0],
              [0, -9.87]
            ],
            o: [
              [9.87, 0],
              [0, -9.87],
              [-9.87, 0],
              [0, 9.87]
            ],
            v: [
              [0.002, 17.872],
              [17.872, 0.002],
              [0.002, -17.868],
              [-17.868, 0.002]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [1, 1, 1, 1],
            e: [1, 0.843137323856, 0.474509835243, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 31,
    ty: 3,
    nm: '▽ Group 4',
    parent: 17,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [337.744, 265.41, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [48, 51, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 32,
    ty: 4,
    nm: 'Path 2',
    parent: 31,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [49.074, 90.236, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [-5.277, 0.03],
              [0, 0]
            ],
            o: [
              [0, 0],
              [5.276, -0.03],
              [0, 0]
            ],
            v: [
              [-7.696, -1.518],
              [-0.026, 2.339],
              [7.694, -1.518]
            ],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.207843005657, 0.207843005657, 0.207843005657, 1],
            e: [1, 1, 1, 1]
          }, {
            t: 40
          }],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 3,
          ix: 5
        },
        lc: 2,
        lj: 2,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Path 2',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 33,
    ty: 4,
    nm: 'Path',
    parent: 31,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [49.256, 73.473, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0]
            ],
            v: [
              [-0.003, -3.553],
              [-0.003, 3.557]
            ],
            c: false
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'st',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.207843005657, 0.207843005657, 0.207843005657, 1],
            e: [1, 1, 1, 1]
          }, {
            t: 40
          }],
          ix: 3
        },
        o: {
          a: 0,
          k: 100,
          ix: 4
        },
        w: {
          a: 0,
          k: 3,
          ix: 5
        },
        lc: 2,
        lj: 2,
        bm: 0,
        nm: 'Stroke 1',
        mn: 'ADBE Vector Graphic - Stroke',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Path',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 34,
    ty: 4,
    nm: 'Oval Copy 5',
    parent: 31,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [49.256, 26.077, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-3.47, 0],
              [0, 2.4],
              [3.46, 0],
              [0, -2.4]
            ],
            o: [
              [3.46, 0],
              [0, -2.4],
              [-3.47, 0],
              [0, 2.4]
            ],
            v: [
              [0.002, 4.344],
              [6.282, 0.004],
              [0.002, -4.346],
              [-6.278, 0.004]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.667],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.207843005657, 0.207843005657, 0.207843005657, 1],
            e: [1, 1, 1, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy 5',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 35,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 36,
    ty: 4,
    nm: 'Oval Copy',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.234],
            y: [1.003]
          },
          o: {
            x: [0.333],
            y: [0]
          },
          t: 0,
          s: [100],
          e: [0]
        }, {
          t: 40
        }],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [339, 266.564, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-9.87, 0],
              [0, 8.54],
              [9.87, 0],
              [0, -8.53]
            ],
            o: [
              [9.87, 0],
              [0, -8.53],
              [-9.87, 0],
              [0, 8.54]
            ],
            v: [
              [0.002, 15.457],
              [17.872, -0.003],
              [0.002, -15.453],
              [-17.868, -0.003]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0.925490021706, 0.850979983807, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval Copy',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 37,
    ty: 4,
    nm: '▨ Oval 2',
    parent: 39,
    td: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [0, 0, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [0.933332979679, 0.741176009178, 0.545098006725, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }, {
      ty: 'fl',
      c: {
        a: 0,
        k: [1, 0, 0, 1],
        ix: 4
      },
      o: {
        a: 0,
        k: 100,
        ix: 5
      },
      r: 1,
      bm: 0,
      nm: 'Fill 1',
      mn: 'ADBE Vector Graphic - Fill',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 38,
    ty: 4,
    nm: 'Combined Shape',
    parent: 17,
    tt: 1,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [{
          i: {
            x: [0.667],
            y: [1]
          },
          o: {
            x: [0.333],
            y: [0]
          },
          t: 0,
          s: [100],
          e: [0]
        }, {
          t: 40
        }],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.667,
            y: 1
          },
          o: {
            x: 0.333,
            y: 0
          },
          t: 0,
          s: [339, 556.308, 0],
          e: [339, 1180.308, 0],
          to: [0, 104, 0],
          ti: [0, -104, 0]
        }, {
          t: 40
        }],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [-18.22, 0],
              [-12.34, -9.44],
              [19.7, 0],
              [10.11, 15.27]
            ],
            o: [
              [12.34, -9.44],
              [18.23, 0],
              [-10.12, 15.27],
              [-19.69, 0],
              [0, 0]
            ],
            v: [
              [-47.144, -5.062],
              [-0.004, -20.282],
              [47.146, -5.062],
              [-0.004, 20.278],
              [-47.144, -5.062]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 0.925490021706, 0.850979983807, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Path',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 39,
    ty: 4,
    nm: 'Oval',
    parent: 17,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [339, 339, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [-31.2, 0],
              [0, 31.2],
              [31.2, 0],
              [0, -31.2]
            ],
            o: [
              [31.2, 0],
              [0, -31.2],
              [-31.2, 0],
              [0, 31.2]
            ],
            v: [
              [0, 56.5],
              [56.5, 0],
              [0, -56.5],
              [-56.5, 0]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.416],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.933332979679, 0.741176009178, 0.545098006725, 1],
            e: [0.105882361531, 0.105882361531, 0.105882361531, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Oval',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 40,
    ty: 3,
    nm: '▽ Group 3',
    parent: 14,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [339, 90, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [294, 78, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 41,
    ty: 4,
    nm: 'Path 3 Copy',
    parent: 40,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [509.406, 78, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [-100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-13.099, 13],
              [-9.259, -13.23],
              [13.101, -10.31]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.303],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.933332979679, 0.741176009178, 0.545098006725, 1],
            e: [0.105882361531, 0.105882361531, 0.105882361531, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Path 3 Copy',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 42,
    ty: 4,
    nm: 'Path 3',
    parent: 40,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [78.594, 78, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-13.099, 13],
              [-9.259, -13.23],
              [13.101, -10.31]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.255],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.933332979679, 0.741176009178, 0.545098006725, 1],
            e: [0.105882361531, 0.105882361531, 0.105882361531, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Path 3',
      np: 2,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 43,
    ty: 5,
    nm: '  ',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [4308, 2164, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    t: {
      d: {
        k: [{
          s: {
            s: 60,
            f: 'PingFangTC-Semibold',
            t: '  ',
            j: 0,
            tr: 41,
            lh: 72,
            ls: 0,
            fc: [1, 0.762, 0.5]
          },
          t: 0
        }]
      },
      p: {},
      m: {
        g: 1,
        a: {
          a: 0,
          k: [0, 0],
          ix: 2
        }
      },
      a: []
    },
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 44,
    ty: 5,
    nm: 'ON',
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [{
          i: {
            x: 0.144,
            y: 1
          },
          o: {
            x: 0.333,
            y: 0
          },
          t: 0,
          s: [1336.95, 416.191, 0],
          e: [548.95, 424.191, 0],
          to: [-131.333, 1.333, 0],
          ti: [131.333, -1.333, 0]
        }, {
          t: 40
        }],
        ix: 2
      },
      a: {
        a: 0,
        k: [53.251, -25.908, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [600, 600, 100],
        ix: 6
      }
    },
    ao: 0,
    ef: [{
      ty: 25,
      nm: 'Drop Shadow',
      np: 9,
      mn: 'ADBE Drop Shadow',
      ix: 1,
      en: 1,
      ef: [{
        ty: 2,
        nm: 'Shadow Color',
        mn: 'ADBE Drop Shadow-0001',
        ix: 1,
        v: {
          a: 1,
          k: [{
            i: {
              x: [0.833],
              y: [0.833]
            },
            o: {
              x: [0.167],
              y: [0.167]
            },
            t: 0,
            s: [0.923437476158, 0.923437476158, 0.923437476158, 1],
            e: [0.49358150363, 0.49358150363, 0.49358150363, 1]
          }, {
            t: 19
          }],
          ix: 1
        }
      }, {
        ty: 0,
        nm: 'Opacity',
        mn: 'ADBE Drop Shadow-0002',
        ix: 2,
        v: {
          a: 0,
          k: 255,
          ix: 2
        }
      }, {
        ty: 0,
        nm: 'Direction',
        mn: 'ADBE Drop Shadow-0003',
        ix: 3,
        v: {
          a: 0,
          k: 180,
          ix: 3
        }
      }, {
        ty: 0,
        nm: 'Distance',
        mn: 'ADBE Drop Shadow-0004',
        ix: 4,
        v: {
          a: 0,
          k: 12,
          ix: 4
        }
      }, {
        ty: 0,
        nm: 'Softness',
        mn: 'ADBE Drop Shadow-0005',
        ix: 5,
        v: {
          a: 0,
          k: 54,
          ix: 5
        }
      }, {
        ty: 7,
        nm: 'Shadow Only',
        mn: 'ADBE Drop Shadow-0006',
        ix: 6,
        v: {
          a: 0,
          k: 0,
          ix: 6
        }
      }, {
        ty: 7,
        nm: 'GPU Rendering',
        mn: 'ADBE Force CPU GPU',
        ix: 7,
        v: {
          a: 0,
          k: 1,
          ix: 7
        }
      }]
    }],
    t: {
      d: {
        k: [{
          s: {
            s: 60,
            f: 'PingFangTC-Semibold',
            t: 'ON',
            j: 0,
            tr: 41,
            lh: 72,
            ls: 0,
            fc: [1, 0.762, 0.5]
          },
          t: 0
        }, {
          s: {
            s: 60,
            f: 'PingFangTC-Semibold',
            t: 'OFF',
            j: 0,
            tr: 41,
            lh: 72,
            ls: 0,
            fc: [1, 0.762, 0.5]
          },
          t: 13
        }]
      },
      p: {},
      m: {
        g: 1,
        a: {
          a: 0,
          k: [0, 0],
          ix: 2
        }
      },
      a: [{
        nm: 'Animator 1',
        s: {
          t: 0,
          xe: {
            a: 0,
            k: 0,
            ix: 7
          },
          ne: {
            a: 0,
            k: 0,
            ix: 8
          },
          a: {
            a: 0,
            k: 100,
            ix: 4
          },
          b: 1,
          rn: 0,
          sh: 1,
          r: 1
        },
        a: {
          fc: {
            a: 1,
            k: [{
              i: {
                x: [0.833],
                y: [0.833]
              },
              o: {
                x: [0.167],
                y: [0.167]
              },
              t: 0,
              s: [0.189016550779, 0.189016550779, 0.189016550779, 1],
              e: [1, 1, 1, 1]
            }, {
              t: 19
            }],
            ix: 12
          }
        }
      }]
    },
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 45,
    ty: 4,
    nm: 'Rectangle Copy 3',
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [936, 438, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-144, -62],
              [144, -62],
              [144, 62],
              [-144, 62]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'rd',
        nm: 'Round Corners 1',
        r: {
          a: 0,
          k: 62,
          ix: 1
        },
        ix: 2,
        mn: 'ADBE Vector Filter - RC',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 1,
          k: [{
            i: {
              x: [0.144],
              y: [1]
            },
            o: {
              x: [0.333],
              y: [0]
            },
            t: 0,
            s: [0.875168502331, 0.875168502331, 0.875168502331, 1],
            e: [0.326700359583, 0.326700359583, 0.326700359583, 1]
          }, {
            t: 40
          }],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle Copy 3',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }, {
    ddd: 0,
    ind: 46,
    ty: 4,
    nm: 'Rectangle Copy 2',
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [936, 438, 0],
        ix: 2
      },
      a: {
        a: 0,
        k: [0, 0, 0],
        ix: 1
      },
      s: {
        a: 0,
        k: [100, 100, 100],
        ix: 6
      }
    },
    ao: 0,
    ef: [{
      ty: 25,
      nm: 'Drop Shadow',
      np: 9,
      mn: 'ADBE Drop Shadow',
      ix: 1,
      en: 1,
      ef: [{
        ty: 2,
        nm: 'Shadow Color',
        mn: 'ADBE Drop Shadow-0001',
        ix: 1,
        v: {
          a: 0,
          k: [0.691538989544, 0.691538989544, 0.691538989544, 0.5],
          ix: 1
        }
      }, {
        ty: 0,
        nm: 'Opacity',
        mn: 'ADBE Drop Shadow-0002',
        ix: 2,
        v: {
          a: 0,
          k: 127.5,
          ix: 2
        }
      }, {
        ty: 0,
        nm: 'Direction',
        mn: 'ADBE Drop Shadow-0003',
        ix: 3,
        v: {
          a: 0,
          k: 180,
          ix: 3
        }
      }, {
        ty: 0,
        nm: 'Distance',
        mn: 'ADBE Drop Shadow-0004',
        ix: 4,
        v: {
          a: 0,
          k: 84,
          ix: 4
        }
      }, {
        ty: 0,
        nm: 'Softness',
        mn: 'ADBE Drop Shadow-0005',
        ix: 5,
        v: {
          a: 0,
          k: 96,
          ix: 5
        }
      }, {
        ty: 7,
        nm: 'Shadow Only',
        mn: 'ADBE Drop Shadow-0006',
        ix: 6,
        v: {
          a: 0,
          k: 0,
          ix: 6
        }
      }, {
        ty: 7,
        nm: 'GPU Rendering',
        mn: 'ADBE Force CPU GPU',
        ix: 7,
        v: {
          a: 0,
          k: 1,
          ix: 7
        }
      }]
    }],
    shapes: [{
      ty: 'gr',
      it: [{
        ind: 0,
        ty: 'sh',
        ix: 1,
        ks: {
          a: 0,
          k: {
            i: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            o: [
              [0, 0],
              [0, 0],
              [0, 0],
              [0, 0]
            ],
            v: [
              [-156, -73],
              [156, -73],
              [156, 73],
              [-156, 73]
            ],
            c: true
          },
          ix: 2
        },
        nm: 'Path 1',
        mn: 'ADBE Vector Shape - Group',
        hd: false
      }, {
        ty: 'rd',
        nm: 'Round Corners 1',
        r: {
          a: 0,
          k: 73,
          ix: 1
        },
        ix: 2,
        mn: 'ADBE Vector Filter - RC',
        hd: false
      }, {
        ty: 'fl',
        c: {
          a: 0,
          k: [1, 1, 1, 1],
          ix: 4
        },
        o: {
          a: 0,
          k: 100,
          ix: 5
        },
        r: 1,
        bm: 0,
        nm: 'Fill 1',
        mn: 'ADBE Vector Graphic - Fill',
        hd: false
      }, {
        ty: 'tr',
        p: {
          a: 0,
          k: [0, 0],
          ix: 2
        },
        a: {
          a: 0,
          k: [0, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [600, 600],
          ix: 3
        },
        r: {
          a: 0,
          k: 0,
          ix: 6
        },
        o: {
          a: 0,
          k: 100,
          ix: 7
        },
        sk: {
          a: 0,
          k: 0,
          ix: 4
        },
        sa: {
          a: 0,
          k: 0,
          ix: 5
        },
        nm: 'Transform'
      }],
      nm: 'Rectangle Copy 2',
      np: 3,
      cix: 2,
      bm: 0,
      ix: 1,
      mn: 'ADBE Vector Group',
      hd: false
    }],
    ip: 0,
    op: 3600,
    st: 0,
    bm: 0
  }],
  markers: [],
  chars: [{
    ch: 'O',
    size: 60,
    style: 'Semibold',
    w: 77.5,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [10.977, 0],
                [6.244, -7.251],
                [0, -10.977],
                [-6.042, -6.848],
                [-11.078, 0],
                [-6.345, 7.05],
                [0, 11.078],
                [6.042, 6.747]
              ],
              o: [
                [-11.078, 0],
                [-6.042, 6.848],
                [0, 10.876],
                [6.244, 7.05],
                [10.977, 0],
                [6.042, -6.747],
                [0, -11.078],
                [-6.345, -7.15]
              ],
              v: [
                [38.974, -73.315],
                [12.991, -62.54],
                [4.028, -35.852],
                [12.991, -9.265],
                [38.974, 1.41],
                [64.957, -9.164],
                [74.02, -35.852],
                [64.957, -62.64]
              ],
              c: true
            },
            ix: 2
          },
          nm: 'O',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }, {
          ind: 1,
          ty: 'sh',
          ix: 2,
          ks: {
            a: 0,
            k: {
              i: [
                [-7.452, 0],
                [-4.028, -4.834],
                [0, -8.459],
                [3.928, -4.733],
                [7.452, 0],
                [4.028, 4.935],
                [0, 8.157],
                [-3.928, 4.834]
              ],
              o: [
                [7.452, 0],
                [3.928, 4.834],
                [0, 8.459],
                [-4.028, 4.733],
                [-7.452, 0],
                [-3.928, -4.834],
                [0, -8.258],
                [4.129, -5.035]
              ],
              v: [
                [38.974, -62.943],
                [56.195, -55.792],
                [62.137, -35.852],
                [56.195, -16.113],
                [38.974, -8.963],
                [21.652, -16.415],
                [15.811, -35.852],
                [21.652, -55.389]
              ],
              c: true
            },
            ix: 2
          },
          nm: 'O',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'O',
        np: 5,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'PingFang TC'
  }, {
    ch: 'N',
    size: 60,
    style: 'Semibold',
    w: 73.2,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              v: [
                [7.05, -71.906],
                [7.05, 0],
                [18.832, 0],
                [18.832, -52.57],
                [19.235, -52.57],
                [55.188, 0],
                [66.669, 0],
                [66.669, -71.906],
                [54.785, -71.906],
                [54.785, -20.041],
                [54.382, -20.041],
                [18.832, -71.906]
              ],
              c: true
            },
            ix: 2
          },
          nm: 'N',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'N',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'PingFang TC'
  }, {
    ch: 'F',
    size: 60,
    style: 'Semibold',
    w: 58.2,
    data: {
      shapes: [{
        ty: 'gr',
        it: [{
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 0,
            k: {
              i: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              o: [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ],
              v: [
                [7.05, -71.906],
                [7.05, 0],
                [18.832, 0],
                [18.832, -31.824],
                [53.979, -31.824],
                [53.979, -41.895],
                [18.832, -41.895],
                [18.832, -61.835],
                [56.094, -61.835],
                [56.094, -71.906]
              ],
              c: true
            },
            ix: 2
          },
          nm: 'F',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        }],
        nm: 'F',
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: 'ADBE Vector Group',
        hd: false
      }]
    },
    fFamily: 'PingFang TC'
  }, {
    ch: ' ',
    size: 60,
    style: 'Semibold',
    w: 33.3,
    data: {},
    fFamily: 'PingFang TC'
  }]
}
