function filterOne(n) {
    return n + 10
}
function filterTwo(n) {
    return n + 20
}
// 去除空格 type 1-所有空格  2-前后空格  3-前空格  4-后空格
function trim(value,trim) {
    switch(trim) {
        case 1:
            return value.replace(/\s+/g,'')
        case 2: 
            return value.replace(/(^\s*)|(\s*$)/g,'')
        case 3: 
            return value.replace(/(^\s*)/g,'')
        case 4: 
            return value.replace(/(\s*$)/g,'')
        default: 
            return value
    }
}

// 日期处理
// 使用格式
// {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd hh:mm:ss) }} 
// {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd) }} 
// {{ '2018-09-14 01:05' | formaDate(MM/dd) }} 等
function formaDate(value, fmt) {
    var date = new Date(value);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "w+": date.getDay(), //星期
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
      if(k === 'w+') {
        if(o[k] === 0) {
          fmt = fmt.replace('w', '周日');
        }else if(o[k] === 1) {
          fmt = fmt.replace('w', '周一');
        }else if(o[k] === 2) {
          fmt = fmt.replace('w', '周二');
        }else if(o[k] === 3) {
          fmt = fmt.replace('w', '周三');
        }else if(o[k] === 4) {
          fmt = fmt.replace('w', '周四');
        }else if(o[k] === 5) {
          fmt = fmt.replace('w', '周五');
        }else if(o[k] === 6) {
          fmt = fmt.replace('w', '周六');
        }
      }else if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
}

//字母大小写切换
/*type
 1:首字母大写
 2：首页母小写
 3：大小写转换
 4：全部大写
 5：全部小写
 * */
function changeCase(str, type) {
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

// 字符串循环复制
function repeatStr(str,count) {
    var text = ''
    for(var i = 0; i < count; i++) {
        text += str
    }
    return text
}

// 替换字符串
function replaceAll(str,aFindText,aRepText) {
    var raRegExp = new RegExp(aFindText,'g')
    return str.replace(raRegExp,aRepText)
}

// 字符替换*，隐藏手机号或者身份证号
// replaceStr(字符串，字符格式，替换方式，替换的字符（默认*）)
//ecDo.replaceStr('18819322663',[3,5,3],0)
//result：188*****663
//ecDo.replaceStr('asdasdasdaa',[3,5,3],1)
//result：***asdas***
//ecDo.replaceStr('1asd88465asdwqe3',[5],0)
//result：*****8465asdwqe3
//ecDo.replaceStr('1asd88465asdwqe3',[5],1,'+')
//result："1asd88465as+++++"
function replaceStr(str, regArr, type, ARepText) {
    var regtext = '',
        Reg = null,
        replaceText = ARepText || '*';
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    else if (regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
        Reg = new RegExp(regtext);
        var replaceCount1 = repeatStr(replaceText, regArr[0]);
        var replaceCount2 = repeatStr(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }
    else if (regArr.length === 1 && type === 0) {
        regtext = '(^\\w{' + regArr[0] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    else if (regArr.length === 1 && type === 1) {
        regtext = '(\\w{' + regArr[0] + '}$)'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}

export {
    filterOne,
    filterTwo,
    trim,
    formaDate,
    changeCase,
    repeatStr,
    replaceAll,
    replaceStr
}