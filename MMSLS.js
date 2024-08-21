/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=5b3ca27a009b27cc406d8c841eb1a59a",
    "https://www.maimemo.com/share/page?uid=11035971&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=5b3ca27a009b27cc406d8c841eb1a59a",
    "https://www.maimemo.com/share/page?uid=25876147&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=1851f2a06690404a800a2adbaf7e8c57",
    "https://www.maimemo.com/share/page?uid=25876147&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=1851f2a06690404a800a2adbaf7e8c57",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=e504a94a4f6bb7e29fe661717c566c84&tid=2f46085a572b7a38892d51997171cd51",
    "https://www.maimemo.com/share/page?uid=11035971&pid=e504a94a4f6bb7e29fe661717c566c84&tid=2f46085a572b7a38892d51997171cd51",
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
