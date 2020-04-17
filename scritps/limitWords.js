 function getCursortPosition(obj) {
            var cursorIndex = 0;
            if (document.selection) {
                // IE Support
                obj.focus();
                var range = document.selection.createRange();
                range.moveStart("character", -obj.value.length);
                cursorIndex = range.text.length;
            } else if (obj.selectionStart || obj.selectionStart == 0) {
                // another support
                cursorIndex = obj.selectionStart;
            }
            return cursorIndex;
        }

function setMaxlen(el) {
    let val = $(el).val(), //獲取value
        maxLen = 10, //獲取限制輸入的最大值
        len = val.replace(/[^\x00-\xff]/g, "**").length, //獲取input長度
        startLen = getCursortPosition(el), //獲取光標位置
        endLen = val.substring(startLen).replace(/[^\x00-\xff]/g, "**").length; //光標後面有幾個字符(計算後的)
    console.log("max len::::", $(el).data("max"));
    if (flag && len > maxLen) {
        let num = maxLen - endLen, //求出光標前面剩餘的字符長度
            str = val.substring(0, maxLen - endLen); //截取長度
        while (str.replace(/[^\x00-\xff]/g, "**").length > num) { //因涉及中文,循環截取
            if (str.length === 0) {
                str = "";
                break;
            }
            str = str.substring(0, str.length - 1);
        }
        $(el).val(str + val.substring(startLen)); //設置value
        //設置完value後需要重新設置下光標的位置。
        let newStrLen = $(el).val().length, //獲取設置完value後的長度
            setEnd = val.substring(startLen).length; //獲取原input光標後有幾個字符
        el.setSelectionRange(newStrLen - setEnd, newStrLen - setEnd); //設置光標位置
    }
}