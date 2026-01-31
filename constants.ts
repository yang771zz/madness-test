
import { Question } from './types';

const createOptions = (texts: string[]) => texts.map((t, i) => ({
  label: ['A', 'B', 'C', 'D'][i],
  text: t,
  score: i
}));

export const INITIAL_QUESTIONS: Question[] = [
  // 维度一：【情绪火药桶】
  { id: 1, dimension: 1, text: "周一清晨，闹钟响了第 4 遍：", options: createOptions(["弹射起步，心中默念“我爱工作”", "叹气 50 次，在离职边缘反复横跳", "把枕头当成老板疯狂拳击 3 分钟", "关机睡死，等公司打电话来问是不是出意外了"]) },
  { id: 2, dimension: 1, text: "老板在周末深夜 11 点突然弹语音：", options: createOptions(["秒接并充满活力地问好", "盯着手机屏幕直到它自动挂断", "发个“信号不好”的截图然后开启飞行模式", "接通后保持沉默，听老板讲完后回一句：“您是哪位？”"]) },
  { id: 3, dimension: 1, text: "当电脑崩溃，未保存的文件瞬间消失时：", options: createOptions(["闭目冥想，重新再写一遍", "趴在桌上无声尖叫，随后点杯奶茶续命", "给电脑贴个“符咒”，开始对着屏幕输出国粹", "直接下班，并告诉主管：这是天意，老天不让我干了"]) },
  { id: 4, dimension: 1, text: "电梯里遇到那个爱指挥人的“事儿精”领导：", options: createOptions(["职业微笑，主动按电梯门", "假装低头回信息，眼神绝不交汇", "故意按错楼层，然后优雅地提前溜走", "盯着他的发际线看，直到他感到浑身发毛"]) },
  { id: 5, dimension: 1, text: "在安静的办公室，同事嚼薯片的声音大到像开挖掘机：", options: createOptions(["戴上耳机，自己忍了", "频繁回头看他，试图用眼神杀人", "在群里发消息：谁在吃东西？好香啊（其实想杀人）", "走过去抢一片塞嘴里：既然你不想让大家干活，那咱俩一起吃"]) },
  { id: 6, dimension: 1, text: "被指派了一个完全不属于你、且毫无意义的任务：", options: createOptions(["默默接受，今晚又是加班夜", "边做边在心里把对方埋了一百遍", "故意做得漏洞百出，逼对方找别人", "礼貌询问：“您是觉得我太闲，还是觉得您太闲？”"]) },
  { id: 7, dimension: 1, text: "收到老板在群里发的“奋斗鸡汤”视频：", options: createOptions(["准时送上“大拇指”表情", "已读不回，假装信号断层", "转发给死党，配文“又开始了”", "分享一则《长期熬夜猝死的新闻》到朋友圈，仅老板可见"]) },
  { id: 8, dimension: 1, text: "当你发现辛苦熬夜做的 PPT，被同事在会议上据为己有时：", options: createOptions(["默默忍受，安慰自己“吃亏是福”", "会后阴阳怪气地发个朋友圈，不点名吐槽", "当场纠正，但语气委婉到没人听出你在撕逼", "直接抢过话筒：既然你这么爱讲，不如顺便把下半年的指标也领了"]) },
  { id: 9, dimension: 1, text: "午休时，隔壁桌同事还在大声打语音电话：", options: createOptions(["忍着，直到对方打完", "翻身的声音很大，以此表达不满", "戴上耳机，音量开到最大", "拿出手机外放《大悲咒》，大家一起“净化灵魂”"]) },
  { id: 10, dimension: 1, text: "下班前最后一分钟，突然被塞了一个急件：", options: createOptions(["放下包，开始加班", "带着怨气做完，并故意打错几个字", "告诉对方：我已经到地铁站了，明天再说", "假装没看见，直接消失，并在路上发个定位：人在医院，刚挂上号"]) },
  // 维度二：【社交面具崩坏】
  { id: 11, dimension: 2, text: "同事叫你“亲爱的”，但其实是想让你帮忙干活：", options: createOptions(["笑着答应：“没问题！”", "回一句：“太忙了，下次吧”", "发一个“加载中”的表情包，然后消失", "直说：“别叫亲爱的，叫我爹地/妈咪，我就考虑一下”"]) },
  { id: 12, dimension: 2, text: "公司强制要求的“毫无意义”的周报：", options: createOptions(["认真排版，写满 2000 字", "复制粘贴上周的内容，微调日期", "写得全是废话，比如“本周呼吸顺畅”", "直接留白，备注：这周很忙，忙着想下周怎么编"]) },
  { id: 13, dimension: 2, text: "在茶水间听到同事背后议论你：", options: createOptions(["悄悄走开，回家偷偷哭", "咳嗽一声，示意你就在后面", "走进去加入他们：“我也觉得我这人挺怪的，对吧？”", "直接录音，然后问他们：“这段要发到大群里吗？”"]) },
  { id: 14, dimension: 2, text: "老板说：“公司现在的困难需要大家一起克服”：", options: createOptions(["深感责任重大，愿意降薪", "表面点头，背地里更新简历", "发朋友圈：我目前的困难也需要公司克服", "举手提问：“那盈利的时候怎么没见大家一起分钱？”"]) },
  { id: 15, dimension: 2, text: "被拉进一个充满“职场互吹”的无聊饭局：", options: createOptions(["全程陪笑，努力融入", "坐在角落低头干饭", "借口接电话，一去不复返", "现场拆穿每一个人的牛皮，让气氛降到冰点"]) },
  { id: 16, dimension: 2, text: "老板要求你转发公司的广告到朋友圈：", options: createOptions(["设置全员可见，并配文点赞", "设置分组可见，屏蔽所有朋友", "转发后 3 秒删除", "转发，并配文：“老板逼我发的，大家别点”"]) },
  { id: 17, dimension: 2, text: "当你被要求做一份完全不可能完成的预算方案：", options: createOptions(["硬着头皮做，然后被骂", "磨洋工，直到老板忘记这件事", "问老板：“您是想要真实的，还是想要您想看到的？”", "随便填一串天文数字，备注：梦里什么都有"]) },
  { id: 18, dimension: 2, text: "发现老板在下班后偷偷观察谁还没走：", options: createOptions(["立刻坐下继续装忙", "关掉显示器，假装在思考", "走过去问：“老板，您还没找到回家的路吗？”", "拿上包走人，顺便问一句：“老板，顺路捎我一段？”"]) },
  { id: 19, dimension: 2, text: "对于公司的团建活动（周六爬山）：", options: createOptions(["准时到达，积极拍照", "借口家里漏水，无法参加", "去了但全程黑脸，拒绝合影", "报名后消失，周一回公司说：我在山脚下悟道了"]) },
  { id: 20, dimension: 2, text: "收到一份极其离谱的修改意见（第 10 版）：", options: createOptions(["咬牙再改一遍", "拖到最后时刻交一份一模一样的", "反问：“您看哪一版最顺眼？我觉得第一版挺好”", "直接把鼠标塞给对方：“来，你行你上”"]) },
  // 维度三：【赛博离职基因】
  { id: 21, dimension: 3, text: "你的工位抽屉里常备的是：", options: createOptions(["止痛药和咖啡", "各种小零食", "劳动法手册", "已经打包好的纸箱子"]) },
  { id: 22, dimension: 3, text: "当你被告知今年没有年终奖时：", options: createOptions(["难过五分钟，继续干活", "开始在工位上频繁划水", "把公司的卫生纸抽走一大半作为补偿", "告诉老板：“没关系，我今年也打算没怎么出力”"]) },
  { id: 23, dimension: 3, text: "想到明天还要上班，你的心情是：", options: createOptions(["充满期待", "有点沉重", "视死如归", "已经开始研究哪种死法能算工伤"]) },
  { id: 24, dimension: 3, text: "在工作软件上的状态设置：", options: createOptions(["在线/忙碌中", "离开片刻（其实是一下午）", "请勿打扰（永久）", "头像换成黑色，个性签名：已飞升，有事烧纸"]) },
  { id: 25, dimension: 3, text: "如果公司突然着火了（无人员伤亡）：", options: createOptions(["冲进去救火", "拿起手机报警", "默默走开，找个地方喝咖啡", "拿出电脑，趁着火光把没做完的活给烧了"]) },
  { id: 26, dimension: 3, text: "老板画大饼说“明年给你配车”：", options: createOptions(["感激涕零，更加努力", "笑着点头，内心呵呵", "问老板：“是那种纸扎的吗？”", "拿出手机搜了一下法拉利：“老板，我想要这款”"]) },
  { id: 27, dimension: 3, text: "你的办公桌面背景是：", options: createOptions(["奋斗格言", "默认桌面", "财神爷", "离职倒计时插件"]) },
  { id: 28, dimension: 3, text: "如果可以对老板说一句话，你最想说：", options: createOptions(["“您辛苦了”", "“能涨薪吗？”", "“我也辛苦了”", "“您能退休吗？”"]) },
  { id: 29, dimension: 3, text: "当你拿到 N+1 补偿时的表情：", options: createOptions(["依依不舍", "强忍笑意", "喜极而泣", "还没签完字就已经跳起了踢踏舞"]) },
  { id: 30, dimension: 3, text: "测完这 30 道题，你最想做的是：", options: createOptions(["思考人生", "继续搬砖", "截图发疯", "拿着这份结果去跟老板摊牌"]) }
];

export const getResultByScore = (totalScore: number): { title: string; percentage: number; description: string; advice: string; color: string } => {
  if (totalScore <= 25) {
    return {
      title: "【职场淡定 NPC】",
      percentage: Math.floor(totalScore / 0.9 + 5),
      description: "你是职场里的那一抹背景色，情绪稳定得像个AI。世界崩塌了你可能还在想午饭吃什么。你的存在就是为了证明：只要我不卷，谁也别想卷到我。",
      advice: "偶尔也要露出一点牙齿，不然老板以为你是真的没脾气。",
      color: "#4ade80"
    };
  } else if (totalScore <= 50) {
    return {
      title: "【微醺半疯星人】",
      percentage: Math.floor((totalScore - 25) + 30),
      description: "白天是专业的职场精英，晚上在被窝里偷偷掐大腿。你有一定的防御力，但在面对极致的傻X行为时，脑中的理智弦还是会轻轻崩开一条缝。",
      advice: "发疯不是目的，解压才是核心。建议在工位放点捏捏乐。",
      color: "#38bdf8"
    };
  } else if (totalScore <= 75) {
    return {
      title: "【半步发疯尊者】",
      percentage: Math.floor((totalScore - 50) + 60),
      description: "你已经在发疯的边缘左右横跳。职场规则在你眼里只是参考建议。你主打一个‘你不仁，我不义’，能动手（敲键盘）绝不吵吵，发疯是你最后的倔强。",
      advice: "保留最后一点理智，毕竟监狱没有五险一金。",
      color: "#fbbf24"
    };
  } else {
    return {
      title: "【纯血职场判官】",
      percentage: Math.min(Math.floor((totalScore - 75) / 0.15 + 85), 100),
      description: "恭喜，你已经彻底疯了。职场只是你的大型沉浸式剧本杀现场。老板不敢艾特你，同事不敢看你眼睛。你是秩序的终结者，混乱的代言人。",
      advice: "你已经不需要建议了，建议老板先跑路为妙。",
      color: "#f43f5e"
    };
  }
};
