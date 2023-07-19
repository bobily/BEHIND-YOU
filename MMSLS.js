/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=4a346c1ebd9103383b98e17007a6a089&tid=1f280eca787cbd59dabc8ecc2bb991f2",
    "https://www.maimemo.com/share/page?uid=25876147&pid=4a346c1ebd9103383b98e17007a6a089&tid=ce45e32e4f30d48ba0c03c8211b4af76",
    "https://www.maimemo.com/share/page?uid=11035971&pid=4a346c1ebd9103383b98e17007a6a089&tid=1f280eca787cbd59dabc8ecc2bb991f2",
    "https://www.maimemo.com/share/page?uid=25876147&pid=4a346c1ebd9103383b98e17007a6a089&tid=ce45e32e4f30d48ba0c03c8211b4af76",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=11035971&pid=623607b6ee359f0b14692c782e79e110&tid=eec2850df2b1bc77a293c140216ff540",
    "https://www.maimemo.com/share/page?uid=20240907&pid=623607b6ee359f0b14692c782e79e110&tid=2d87fb15a0ecbeaa9fe64fdaf480e56c",
    "https://www.maimemo.com/share/page?uid=25876147&pid=623607b6ee359f0b14692c782e79e110&tid=ceb3585a9b43f0322b7bb081a0733c48",
    "https://www.maimemo.com/share/page?uid=11035971&pid=623607b6ee359f0b14692c782e79e110&tid=eec2850df2b1bc77a293c140216ff540",
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
