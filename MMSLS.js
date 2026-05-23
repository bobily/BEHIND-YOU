/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=a4aa1ee810ea452b60e204e8fe6d033b&tid=a7226d0e8602dd32a41607e3af9ebb52",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=a4aa1ee810ea452b60e204e8fe6d033b&tid=a7226d0e8602dd32a41607e3af9ebb52",
    "https://www.maimemo.com/share/page?uid=11035971&pid=a4aa1ee810ea452b60e204e8fe6d033b&tid=a7226d0e8602dd32a41607e3af9ebb52",
    ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
