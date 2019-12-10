const util = {
  /**
   * @method getText
   * @returns {string}
   * @desc getText
   */
  getText() {
    return 'Knove s Hacker World';
  },
  /**
   * @method getQueryVal
   * @param name 参数名
   * @param getUrl (可选)如果从当前页面URL中获取参数值，url参数可以不用指定
   * @returns {string}
   * @desc 根据参数名从当前地址或指定地址中获取参数值
   */
  getQueryVal(name, getUrl) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    let r;
    const url = getUrl || window.location.href;
    // 如果url有指定，那么从指定的地址中取值
    if (url && url.indexOf('?') !== -1) {
      r = url.split('?')[1].match(reg);
    } else {
      // 默认从当前页面地址中取值
      r = window.location.search.substr(1).match(reg); // r = ['匹配到的主串', $1, $2, $3, index, input]$1..9为正则表达式圆括号匹配的子串
    }
    if (r != null) {
      const rArr = r[2].split('#');
      if (name === 'channel') {
        return (
          decodeURIComponent(rArr[0]) ||
          util.getCookie('channel') ||
          util.getCookie('cid')
        );
      }
      return decodeURIComponent(rArr[0]);
    }
    return '';
  },
  /**
   * @method getCookie
   * @param cName 参数名
   * @returns {string}
   * @desc 根据参数名从当前地址获取参数值
   */
  getCookie(cName) {
    const strcookie = document.cookie; // 获取cookie字符串
    const arrcookie = strcookie.split('; '); // 分割
    // 遍历匹配
    for (let i = 0; i < arrcookie.length; i += 1) {
      const arr = arrcookie[i].split('=');
      if (arr[0] === cName) {
        let newArr = arr[1];
        if (arr.length > 2) {
          arr.splice(0, 1);
          newArr = arr.join('=');
        }
        if (newArr) {
          return newArr;
        }
      }
    }
    return '';
  },
  /**
   * 设置Cookie
   */
  setCookie(key, value, expireDays) {
    if (key) {
      const Days = 30;
      const exp = new Date();
      exp.setTime(exp.getTime() + 60 * 20000000); // 过期时间 2分钟
      document.cookie = `${key}=${value};expires=${exp.toGMTString()};path=/`;
    }
  },
  /**
   * 修改 URL 参数
   */
  changeURLArg(url, arg, argVal) {
    const pattern = `${arg}=([^&]*)`;
    const replaceText = `${arg}=${argVal}`;
    if (url.match(pattern)) {
      let tmp = `/(${arg}=)([^&]*)/gi`;
      // eslint-disable-next-line no-eval
      tmp = url.replace(eval(tmp), replaceText);
      return tmp;
    }
    if (url.match('[?]')) {
      return `${url}&${replaceText}`;
    }
    return `${url}?${replaceText}`;
  },
};

export default util;
