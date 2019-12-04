const util = {
  /**
   * @method getText
   * @returns {string}
   * @desc getText
   */
  getText: function() {
    return "Knove's Hacker World"
  },
  /**
   * @method getQueryVal
   * @param name 参数名
   * @param url (可选)如果从当前页面URL中获取参数值，url参数可以不用指定
   * @returns {string}
   * @desc 根据参数名从当前地址或指定地址中获取参数值
   */
  getQueryVal: function(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r;
    url = url || window.location.href;
    // 如果url有指定，那么从指定的地址中取值
    if (url && url.indexOf("?") != -1) {
      r = url.split("?")[1].match(reg);
    } else {
      // 默认从当前页面地址中取值
      r = window.location.search.substr(1).match(reg); // r = ['匹配到的主串', $1, $2, $3, index, input]$1..9为正则表达式圆括号匹配的子串
    }
    if (r != null) {
      let rArr = r[2].split("#");
      return decodeURIComponent(rArr[0]);
    }
    return "";
  },
  /**
   * @method getCookie
   * @param cName 参数名
   * @returns {string}
   * @desc 根据参数名从当前地址获取参数值
   */
  getCookie(cName) {
    var strcookie = document.cookie; //获取cookie字符串
    var arrcookie = strcookie.split("; "); //分割
    //遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      if (arr[0] == cName) {
        // let str = ''
        // for(let j = 1,len = arr.length;j<len;j++){
        //   str = str ? str + ''
        // }
        let newArr = arr[1];
        if (arr.length > 2) {
          arr.splice(0, 1);
          newArr = arr.join("=");
        }
        if (newArr) {
          return newArr;
        }
      }
    }
    return "";
  },
  /**
   * @method setCookie
   * @desc 设置 cookie
   */
  setCookie(key, value, expireDays) {
    if (key) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + 60 * 20000000);
      // domain=.mi.com;
      document.cookie =
        key + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
    }
  },

  /**
   * @method changeURLArg
   * @param name 参数名
   * @param url (可选)如果从当前页面URL中获取参数值，url参数可以不用指定
   * @returns {string}
   * @desc 修改url的参数名 返回新的url
   */
  changeURLArg(url, arg, arg_val) {
    var pattern = arg + "=([^&]*)";
    var replaceText = arg + "=" + arg_val;
    if (url.match(pattern)) {
      var tmp = "/(" + arg + "=)([^&]*)/gi";
      tmp = url.replace(eval(tmp), replaceText);
      return tmp;
    } else {
      if (url.match("[?]")) {
        return url + "&" + replaceText;
      } else {
        return url + "?" + replaceText;
      }
    }
  }
};

export default util;
