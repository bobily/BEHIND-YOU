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
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=a1c7174969108fb6c85840639490a136&tid=443fd3ef02f3ddd6f2dfe82e5c2d371c",
    "https://www.maimemo.com/share/page?uid=25876147&pid=a1c7174969108fb6c85840639490a136&tid=4133f0f6f75f1819a4b76b7911a61d81",
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
