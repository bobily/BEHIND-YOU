/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=11035971&pid=a31a635985dac65985ba406308f63f1e&tid=1c121e1a471b3e8c2c569d62d79f29a2",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=765f728da4ef9261628dc2cf1bebb204&tid=7c3a50a6b211bf89a2ceb059ac07cfd8",
    "https://www.maimemo.com/share/page?uid=11035971&pid=765f728da4ef9261628dc2cf1bebb204&tid=7c3a50a6b211bf89a2ceb059ac07cfd8",
    "https://www.maimemo.com/share/page?uid=11035971&pid=765f728da4ef9261628dc2cf1bebb204&tid=7c3a50a6b211bf89a2ceb059ac07cfd8",
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
