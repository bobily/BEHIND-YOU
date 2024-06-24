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
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=464f468abc2aeb9d80b744007a6098aa&tid=17d9314cc4c6a4db4d0322968e83db5b",
    "https://www.maimemo.com/share/page?uid=11035971&pid=464f468abc2aeb9d80b744007a6098aa&tid=17d9314cc4c6a4db4d0322968e83db5b",
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
