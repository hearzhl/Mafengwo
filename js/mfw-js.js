	var focusData = [
		{index:1,img:"wKgBs1etb_qAY-0lAAe1iWZtkzs13",h3:"初见世界的尽头——斯里兰卡",date:"13",place:"斯里兰卡",nums:"672542",name:"樂曉樂Vicky"},
		{index:2,img:"wKgBs1etNSSAIVFyAAfFlsn9oHs35",h3:"梅雨季最上海，迪士尼玩起来——带四岁宝宝游魔都",date:"12",place:"上海",nums:"959821",name:"池也错"},
		{index:3,img:"wKgBs1eq7jmAWL4DAAews9JWzMY16",h3:"带你一路向“南非”——春节南非12日行记",date:"11",place:"南非",nums:"89270",name:"杨远"},
		{index:4,img:"wKgBs1eplciAP7gMAAd2tH1KouY77",h3:"关于比利时的只言片语",date:"10",place:"比利时",nums:"14811",name:"多多"},
		{index:5,img:"wKgBs1eoQK6AWwgIAAdyFWDG_T868",h3:"不孤独的美食家第二季之重访东京",date:"9",place:"东京",nums:"362429",name:"ZYM"}
	];

	var slider_timer = null;
	var b = 1;

	var tn_list_data = {
		list:[
			{data:[
				{index:1,img:"s9-M00-31-0C-wKgBs1eMczeAUp9DAADGU-4k-v012",dt:"120002公里get！我们和小白浪漫游法国",dd:"说走就走的旅行似乎是一场永恒的话题，勇气、追求、坚持。四十天前我们抛下一切束缚，踏上了这场长达12000公里的穿越旅途。一路上，看过了许多未曾见过的风景、邂逅了许多不曾熟知的人，一路...",address:"/i/5551308.html",tn_ding:"493",tn_place:"巴黎",tn_user_name:"橘子大不了",tn_user_img:"wKgB4lNXV5SAWrUZAAAlsWZIHeY04.head.w16",tn_nums:"11879/56"},
				{index:2,img:"wKgB3FYns5aAQm3pAAsquZzUyjo40",dt:"美丽的，不仅仅是个传说——二班第三季·自驾西西里",dd:"此处~省略无数个感谢！ 这是我此次出行拍摄的小小的一段视频，也希望大家多多支持， 另外，西童鞋也好想拜师学艺，求大师手把手教视频该怎么玩…… 首先，这不是一个人的独行，也不是两个人...",address:"/i/5320246.html",tn_ding:"3211",tn_place:"西西里",tn_user_name:" 西西里玩不停",tn_user_img:"wKgBpVXVYD-AP2AQAAI_MEpuEVA82.head.w16",tn_nums:"99381/598"},
				{index:3,img:"wKgBs1c8A--AVcQAAAuy6uZMKkY03",dt:"瓶子再出发，法意瑞11日自由行+包车自驾之旅",dd:"趁热打铁，熬了几个晚上整理照片，索性把游记也一气呵成。 很早之前看过一个视频，在历史长河中各王朝，各国家的领土面积示意...",address:"/i/5483289.html",tn_ding:"283",tn_place:"意大利",tn_user_name:"意大利旅行者",tn_user_img:"wKgBpVXVYD-AP2AQAAI_MEpuEVA82.head.w16",tn_nums:"132352/744"},
				{index:4,img:"wKgBs1duRNuAAfXvACLZyBw1aMo72",dt:"【蜂首纪念】给远方的瑞文戴尔，新西兰中土世界16日",dd:"认识 新西兰 这个神奇的国度还是缘于 新西兰 裔导演彼得. 杰克逊 2001年拍摄的指环王三部曲，这部由J.R.R托尔金的经典著作《魔戒》为蓝本拍摄的魔幻史诗巨制在当时红及一时，要知道《魔戒》...",address:"/i/5524546.html",tn_ding:"2807",tn_place:"新西兰",tn_user_name:"行事诡异的多爸",tn_user_img:"wKgB4lJrUsGASBIyAADBqKyynd466.head.w16",tn_nums:"117042/442"},
				{index:5,img:"wKgBpVWCkCWAKaRGAAYDbhpE7gw11",dt:"汶萊暴走度假之旅",dd:"【又是一篇遲到的遊記】 年初在汶萊斯里巴加湾度過了春節，5天4夜的行程並沒有太大的亮點，驚喜倒是有幾個。印象中的汶萊就是非常的富有，非常的小而且被夾在馬來西亞和印尼之間。旅行神奇...",address:"/i/5337693.html",tn_ding:"550",tn_place:"汶萊",tn_user_name:"KristenLiang",tn_user_img:"wKgB4lJ_ttKADAJpAADIP3j0Hbc25.head.w16",tn_nums:"22325/143"},
				{index:6,img:"wKgBpVYffXqALYV1AA8RKqRJ_2g33",dt:"【斐】常甜蜜——斐济Tokoriki潜水、楠迪跳伞、首尔大暴",dd:"楼主（我）微博：张幻想_ http://weibo.com/phenomeneon 【其他游记】 马来西亚 【宝藏游记】： http://www.mafengwo.cn/i/3149052.html 泰国 【蜂首纪念】： http://www.mafengwo.cn/i/323...",address:"/i/3506052.html",tn_ding:"3631",tn_place:"斐济",tn_user_name:"张幻想",tn_user_img:"wKgBs1bC-xWAAxZ0AA9CW9n21Zc06.head.w16",tn_nums:"87429/521"},
				{index:7,img:"wKgBs1dG0u-AaHsZAAbNX06cdTs43",dt:"台北日记 | 与青春的隔空对话（附详细干货攻略）",dd:"蓝色大门的结尾处，张士豪与孟克柔骑着自行车，在林荫大道恣意穿梭，相互追逐。飞扬的白衬衫，斑驳的树影洒在两人的身上，映...",address:"/i/5500236.html",tn_ding:"9522",tn_place:"台北",tn_user_name:"钢牙小嘉",tn_user_img:"wKgBs1dM2uaAYFjlABFJL0k8oDA11.head.w16",tn_nums:"299171/1612"},
				{index:8,img:"wKgBpVU7dRqAbAqVABA_jzG8enY57",dt:"【On My Way】大美云南，醉行九日（罗平—丽江—大理—双",dd:"我常想既然降生到这个世界上，那么就要好好看看它，我想在自己走过不同的街道,爬过不同的山,触摸的每一条河流都有自己的温度。 Lonely Planet 云南 下载链接：http://pan.baidu.com/s/1dDLX...",address:"/i/5335678.html",tn_ding:"1569",tn_place:"云南",tn_user_name:" 蓝色比目鱼",tn_user_img:"wKgBs1ZHSqWAGQFEAACrET0QRIY68.head.w16",tn_nums:"40205/393"},
				{index:9,img:"wKgBs1bJVO-AeSkjAEEIca4o4N814",dt:"【宝藏】厦门：AMOY的身后，除了天空，皆是往事",dd:"厦门 的英文名AMOY，读起来很好听，却是起源于殖民时代，那一段哀伤的历史，却意外地给 厦门 带来了一个亲切的名字。 “城在海上，海在城中”。 厦门 这座海上花园，号称是文艺青年和学生狗...",address:"/i/5397188.html",tn_ding:"167",tn_place:"厦门",tn_user_name:"贝小贤",tn_user_img:"wKgBs1blGvaAWSYNAADXshcGb5g62.head.w16",tn_nums:"6026/63"},
				{index:10,img:"wKgBs1cAiRiAdkv0AArIkAw_CYQ33",dt:"#游记小赛#【Mao&Lily新鲜之旅】吃货暴走新加坡，是冰淇淋甜...",dd:"【器材】佳能5DmarkII Gopro3+（视频） 【镜头】景物16-35mm f2.8 人像85mm f1.2 辅助24-105（基本没用） 【后期】Lightroom & Photoshop 【版权申明】本文所有照片及文字均为作者原创，请...",address:"/i/5449539.html",tn_ding:"1761",tn_place:"新加坡",tn_user_name:"林爱念念",tn_user_img:"wKgBs1cKKxKAb7xAAAj-DBVvHRA56.head.w16",tn_nums:"45661/130"},
				{index:11,img:"wKgBs1ePCguAf7LWAA7HWkLuaWo22",dt:"四个吃货日本の美食旅行游记第二弹！北海道-富良野-美瑛-东京...",dd:"开篇：自从14年的 日本 吃货之旅第一弹，两年了一直对 日本 的美食念念不忘，今年终于实现愿望~~上一次是新年期间，这次是入夏后的端午，体验的美食也有所不同 但是都好好吃！ 札幌 拉面 可...",address:"/i/5551582.html",tn_ding:"123",tn_place:"北海道",tn_user_name:"しろゆき会长",tn_user_img:"wKgBpVXMPDmAM4IEAAU8btix8Yc45.head.w16",tn_nums:"406/9"},
				{index:12,img:"wKgBs1cRwmeAc6rNADANTj1kPsc77",dt:"#2016蜂首#海浪来自很远的地方，有茶香，去去也无妨",dd:"泪滴状 印度 洋岛国，哐铛作响的小火车穿行于中部成片成片的茶山中，僧伽罗和泰米尔多年内战留下的创伤在北部依旧可见，南部是耀眼的沙滩、比基尼和宝石－ 这是出发之前我所知道的 斯里兰卡 ...",address:"/i/5459707.html",tn_ding:"4614",tn_place:"斯里兰卡",tn_user_name:" 海盗",tn_user_img:"wKgB20_9hTqih2jaAACHDvIX1CQ452.head.w16",tn_nums:"132372/744"}
			]},

			{data:[
				{index:1,img:"wKgBs1d_hc2AY858AAumo8ZA4G878",dt:"GO!香港海洋公园玩水过夏天",dd:"【港澳通行证】 不多介绍啦，办理起来非常方便，到当地公安局出入境就能办理了。 尤其现在改用电子通行证，是芯片卡的，续签方便，过关可以走自助 通道 不用排队。 【机票】 沈阳 没有直飞 ...",address:"/i/5538429.html",tn_ding:"1181",tn_place:"香港",tn_user_name:"张幻想",tn_user_img:"wKgBs1bC-xWAAxZ0AA9CW9n21Zc06.head.w16",tn_nums:"39940/202"},
				{index:2,img:"wKgBs1aGGoyARN_oAA_OaJhU2QY19",dt:"锡兰风韵，没有人比你更懂这片海的温柔",dd:"有人说 这里 有无尽的海滩 好客的人民 成群的大象 迷人的海浪 低廉的价格 有趣的火车 …… 这终究不是最详尽的 斯里兰卡 这是一个雾里看花的国度 当你看尽这里的风景 你却无法忘怀旅途中的感...",address:"/i/5430383.html",tn_ding:"714",tn_place:"斯里兰卡",tn_user_name:" 安東童鞋。",tn_user_img:"wKgBs1bk_9CAV6xhAAgAcAI-gC847.head.w16",tn_nums:"13489/131"},
				{index:3,img:"wKgBpVYbf1qAUMqOAAacuyGMjO420",dt:"【宝藏纪念】✪ 好胆就来·台湾游走影像记✪︱暖情烧制︱",dd:"写在前面 台湾 一直是我排在首选的旅行地。 记得多年前我在 梅里雪山 碰到过一个 台湾 姑娘，当时跟她有过对话的人都会直接问她：你是 台湾 人吧。那个姑娘非常惊讶的反问他们：你们怎么都能...",address:"/i/5353691.html",tn_ding:"2747",tn_place:"台湾",tn_user_name:"RICKY.",tn_user_img:"wKgBs1cNxaSAMerQAACSAOd5DFk49.head.w16",tn_nums:"53326/442"},
				{index:4,img:"wKgBpVY2DxmAMcwAAAoAoNeoM2478",dt:"【【小绿足迹】雨季中的盛夏 国庆长滩五日偷闲",dd:"首先，要感谢大家对我第一篇 日本 赏樱游记的认可和鼓励，真心谢谢。 本着绝不浪费任何一个长假和想方设法让自己一直在路上的原则，小绿一定会分享更多美丽的地方给大家哦。 这是第一次在国...",address:"/i/5325716.html",tn_ding:"1185",tn_place:"长滩岛",tn_user_name:"吉永绿",tn_user_img:"wKgBs1cQssaATcgFAAB7dXwJk1U88.head.w16",tn_nums:"43174/291"},
				{index:5,img:"wKgBpVYtw9eAfARpAAdri4DhOys69",dt:"【Mao&Lily奇迹之旅】迪拜阿布扎比，红裙白纱在那沙漠无边的地方",dd:" 过去的一年里 我们错过了世界的风光 却迎来了生命中的阳光 短暂的收起行囊 只为慢慢适应从二人世界到三人天地的转变 有过不安焦躁与争吵 也有过温馨感动 和美 好 就是这样简简单单普通到不...",address:"/i/5324829.html",tn_ding:"878",tn_place:"迪拜",tn_user_name:"林爱念念",tn_user_img:"wKgBs1cKKxKAb7xAAAj-DBVvHRA56.head.w16",tn_nums:"28775/218"},
				{index:6,img:"wKgBs1ca_PiAT7n6AArMEOiARzU47",dt:"横行北极圈，画一卷传奇  (春节行芬兰‘瑞典‘挪威’冰岛‘丹...",dd:" 欢迎关注微信公众号：娜树的旅拍穿搭 （微信号 nashuvogue) 不定期更新旅行人像摄影攻略 (已经推出构图篇、视角篇) 和穿搭经验~ 新浪博客 http://blog.sina.com.cn/fionashu421 新浪微博：...",address:"/i/5460205.html",tn_ding:"1128",tn_place:"北欧",tn_user_name:"飞鸥娜树",tn_user_img:"wKgBs1cSSrWAcariAAhl5PntWAE43.head.w16",tn_nums:"21261/178"},
				{index:7,img:"wKgB3FYvbvWAFmmAAAb2rQyF6to07",dt:"『寻味◆南通』初秋，在南通寻找心中的那一抹蓝！",dd:" 我是一位喜欢自由、喜欢摄影的旅行爱好者，旅行后的游记不仅仅只是保存旅行的回忆，更希望把这段旅行故事变成一幅绚丽的画卷！ 更多游记请关注我的微博：@Nazario罗尼 个人微信：nazario201...",address:"/i/5328454.html",tn_ding:"610",tn_place:"南通",tn_user_name:"Nazario罗尼",tn_user_img:"wKgBs1ZSdSCAUpuzAAGkXtkwoLg21.head.w16",tn_nums:"21678/294"},
				{index:8,img:"wKgBs1d46iGAFr2mAAU4UiRm_n875",dt:"最HǎO吃的汕头，最HàO吃的我们",dd:" 潮汕之地， 不仅辈出盛产富甲天下的商贾， 更以琳琅满目的地道潮汕美食遐迩全国， 从鲜到会动的牛肉到南北合璧的双烹粽， 从...",address:"/i/5531178.html",tn_ding:"4271",tn_place:"云南",tn_user_name:"  建洲大魔王",tn_user_img:"wKgBs1duYgiADsRlAARYQtzvtVA96.head.w16",tn_nums:"140068/615"},
				{index:9,img:"wKgBpVYseCuAYDf1ABHbJ4ek4Bg28",dt:"【情迷爱尔兰】---环游爱尔兰，寻翡翠绿岛之魅！（完",dd:"不知从何说起，自己对这个世界上瘾，世界也成了自己唯一的牵绊。身边的朋友不能体会，大家都为了生活疲于奔命，固执的我也没来得及想那么多人生道理，心一想，就是出发！ 悄悄辞掉工作去旅...",address:"/i/5318753.html",tn_ding:"698",tn_place:"爱尔兰",tn_user_name:"忆路有你",tn_user_img:"wKgBs1dFIteAdQVPAACK75QJME413.head.w16",tn_nums:"16398/178"},
				{index:10,img:"wKgBs1Y-A1SAJbtBAAkRNo3AlCM44",dt:"【圣彼得堡-莫斯科-金环小镇10天】醉美俄罗斯，圆一个",dd:"号外！号外！号外！ 最近在参加蚂蜂窝里的活动，如果你们刚好看到我的游记，证明我们多有缘分呀～ 请点击下面网址，进去里面帮我按个赞哟，我的赞比较少，大家要点击2页3页4页找到我为止哟 ...",address:"/i/5329221.html",tn_ding:"1195",tn_place:"俄罗斯",tn_user_name:" 王鋆鋆",tn_user_img:"wKgB4lJ3GwiAHL9hAAE0gOYJE2w03.head.w16",tn_nums:"32215/347"},
				{index:11,img:"wKgBs1b0FYSAS73-AAXaAp_cpz095",dt:"牛背山——“日月之行 若出其中 星汉灿烂 若出其里”",dd:"日出星辰，人们大多是趋之向往的，不仅因为生活在现代化城市里久居斗室的人们很少停下来去关注本就难以发现的它们，不曾感受“危楼高百尺，手可摘星辰”是何种体验；而还因为我们对自身的生...",address:"/i/5448348.html",tn_ding:"740",tn_place:"牛背山",tn_user_name:"上感颗粒",tn_user_img:"wKgBs1cPYEGAKqm3AA9B1wRfqEY89.head.w16",tn_nums:"19246/139"},
				{index:12,img:"wKgBpVYKU5qAYD1TABEftOkqk-095",dt:"悠悠牡丹江，追随秋日的脚步",dd:"有人说，如果你无法增加生活的长度那么就增加它的宽度。那么旅行，就是增加生活宽度的必修之课。 我，楼兰小妞，简称小妞， 负责所有旅行中吃喝玩兼模特事情，操心的事与我无关，我负责貌美...",address:"/i/3513893.html",tn_ding:"435",tn_place:"牡丹江",tn_user_name:" 楼兰小妞",tn_user_img:"wKgBs1bYKu-ABt6qAAFjoHjsMhU29.head.w16",tn_nums:"13551/185"}
			]}
		]
	};
	// alert(tn_list_data.list[0].data[0].dt);
		

	var g=function(id){
		if( id.substr(0,1)=='.'){
			return document.getElementsByClassName(id.substr(1));
		}
		return document.getElementById(id);
	};

	function addSliders(){
		var tpl_show_image=g("template_show_image").innerHTML.replace(/^\s*/,'').replace(/^\s*$/,'');
		var tpl_show_nav=g("template_show_nav").innerHTML.replace(/^\s*/,'').replace(/^\s*$/,'');

		var out_show_image=[];
		var out_show_nav=[];

		for(var i in focusData){
			var _html_show_image = tpl_show_image.replace(/{{index}}/g,focusData[i].index).replace(/{{img}}/g,focusData[i].img).replace(/{{h3}}/g,focusData[i].h3).replace(/{{date}}/g,focusData[i].date).replace(/{{place}}/g,focusData[i].place).replace(/{{nums}}/g,focusData[i].nums).replace(/{{name}}/g,focusData[i].name);


			var _html_show_nav = tpl_show_nav.replace(/{{index}}/g,focusData[i].index).replace(/{{img}}/g,focusData[i].img);
		
			out_show_image.push(_html_show_image);
			out_show_nav.push(_html_show_nav);
		}


		g("template_show_image").innerHTML=out_show_image.join("");
		g("template_show_nav").innerHTML=out_show_nav.join("");
	}
	
	function switchSlider(n){
		b = n;
		var show_image=g("show_image_"+n);
		var show_nav=g("show_nav_"+n);

		var clear_show_image=g(".show-image-i");
		var clear_show_nav=g(".show-nav-i");

		for(var i=0;i<clear_show_nav.length;i++){
			clear_show_image[i].className=clear_show_image[i].className.replace("show_image_active","");
			clear_show_nav[i].className=clear_show_nav[i].className.replace("show_nav_active","");
		}

		show_image.className+=" show_image_active";
		show_nav.className+=" show_nav_active";
	}

	function playSlider(){
		slider_timer = setInterval(function(){
			if(b == 5){
				b = 1;
			}else{
				b += 1;
			}

			switchSlider(b);	
		},3000);
	}
	function stopSlider(){
		clearInterval(slider_timer);
	}

	function addTravelNotes(){
		var tn_list = g("tn-list").innerHTML.replace(/^\s*/,'').replace(/^\s*$/,'');
		var out_show_tn_list = [];

		for(var i in tn_list_data.list[0].data){
			var html_tn_list = tn_list.replace(/{{img}}/g,tn_list_data.list[0].data[i].img).replace(/{{address}}/g,tn_list_data.list[0].data[i].address).replace(/{{dt}}/g,tn_list_data.list[0].data[i].dt).replace(/{{dd}}/g,tn_list_data.list[0].data[i].dd).replace(/{{ding}}/g,tn_list_data.list[0].data[i].tn_ding).replace(/{{place}}/g,tn_list_data.list[0].data[i].tn_place).replace(/{{user_name}}/g,tn_list_data.list[0].data[i].tn_user_name).replace(/{{user_img}}/g,tn_list_data.list[0].data[i].tn_user_img).replace(/{{nums}}/g,tn_list_data.list[0].data[i].tn_nums).replace("none","display");

			out_show_tn_list.push(html_tn_list);
		}


		g("tn-list").innerHTML = out_show_tn_list.join("");

		// 点赞
		var tn_ding = $(".tn-ding");
		tn_ding.delegate("a","click",function(){
			if($(this).attr("is-vote") == "true"){
				return;
			}else{
				var em = $(this).parent().find("em");
				var text = parseInt(em.text());
				var $has_voted = "<span class='has_voted'>+1</span>";

				text = text + 1;
				em.text(text);
				
				$(this).parent().append($has_voted);
				$(this).attr("is-vote",true);
				$(".has_voted").animate({top:"-20px"}, 600,function(){
					$(this).css("display","none");
				});
			}
		});
	}

	function changeTravelNotes(c){
			var img = $("#tn-list .tn-image img");
			var dt = $("#tn-list .tn-wrapper dt a");
			var dd = $("#tn-list .tn-wrapper dd a");
			var ding = $("#tn-list .tn-extra .tn-ding em");
			var place = $("#tn-list .tn-extra .tn-place a");
			var user_img = $("#tn-list .tn-extra .tn-user img");
			var user_name = $("#tn-list .tn-extra .tn-user a");
			var nums = $("#tn-list .tn-extra .tn-nums");

			for(var i in tn_list_data.list[c].data){
				$(img[i]).attr("src","./images/tn_list/"+tn_list_data.list[c].data[i].img+".jpeg");
				$(dt[i]).text(tn_list_data.list[c].data[i].dt);
				$(dd[i]).text(tn_list_data.list[c].data[i].dd);
				$(ding[i]).text(tn_list_data.list[c].data[i].tn_ding);
				$(place[i]).text(tn_list_data.list[c].data[i].tn_place);
				$(user_img[i]).attr("src","./images/tn_list/"+tn_list_data.list[c].data[i].tn_user_img+".jpeg");
				$(user_name[i]).contents().filter(function(){return this.nodeType != 1;}).get(0).nodeValue = tn_list_data.list[c].data[i].tn_user_name;
				$(nums[i]).html("<i></i>"+tn_list_data.list[c].data[i].tn_nums);
			}
			
	}
		
	window.onload=function(){
		addSliders();
		switchSlider(1);
		addTravelNotes();
		playSlider();
		g("show-slider").onmouseover = stopSlider;
		g("show-slider").onmouseout = playSlider;
	};

	$(function(){
		var dropDown = $(".head-nav-dropdown");

		function dropDown_menu () {
			dropDown.hover(function(){
				$(this).children('.hide').show();
			},function(){
				$(this).children(".hide").hide();
			});
		}

		dropDown_menu();

		// 搜索框
		$("#_j_index_search_input_mdd").bind("keyup",function(){
			$.ajax({
				type:"GET",
				url:"http://www.mafengwo.cn/ajax/router.php?sAct=KMdd_StructWebAjax|SearchMdd&sName="+$(this).val,
				dataType:"jsonp",
				jsonp:"cb",
				success:function(msg){
					var ons=msg.data.mdd;
					html="";
					for(var i=0;i<nos.length;i++){
						html += "<li><a target='_blank' href="+"http://www.mafengwo.cn/travel-scenic-spot/mafengwo/"+"ons[i].mddid"+".html"+">"+"</li>";
					}
					$("#_j_index_suggest_list_mdd ul").html(html);
					$("#_j_index_suggest_list_mdd").show();
				},
				error:function(jqXHR) {
					alert("错误："+jqXHR.status);
				}
			});
			$("#_j_index_suggest_list_mdd").show();
		});

		// 小焦点轮播图
		var slide_ul = $(".slide-ul");
		var buttons = $(".slide-ol li");
		var index = 1;
		var len = 5;
		var slide_timer = null;
		var interval = 3000;
		var asidebox_bd = $(".asidebox-bd");

		function animate(offset){
			var left = parseInt(slide_ul.css("left")) + offset;
			if(offset > 0){
				offset = "+=" + offset;
			}else{
				offset = "-=" + Math.abs(offset);
			}
			slide_ul.animate({"left":offset},500,function(){
				if(left > -260){
					slide_ul.css("left",-260*len);
				}
				if(left < (-260*len)){
					slide_ul.css("left",-260);
				}
			});
		}

		function showButton(){
			buttons.eq(index-1).addClass('active').siblings().removeClass('active');
		}

		function play(){
			slide_timer = setInterval(function(){
				animate(-260);
				if(index == 5){
					index = 1;
				}else{
					index += 1;
				}
				showButton();
			},interval);
		}
		function stop(){
			clearInterval(slide_timer);
		}

		buttons.each(function() {
			$(this).bind("click",function(){
				if($(this).attr("class") == "active" || slide_ul.is(":animated")){
					return;
				}
				var myIndex = parseInt($(this).attr("index"));
				var offset = -260*(myIndex - index);

				animate(offset);
				index = myIndex;
				showButton();
			});
		});

		play();
		asidebox_bd.hover(stop,play);
		
		

		// 回到顶部
		var timer = null;
		var isTop = true;
		var clientHeight = $(window).height();

		window.onscroll = function(){
			var osTop = $(window).scrollTop();
			// console.log(osTop);
			if(osTop >= clientHeight){
				$(".toolbar-item-top").css("display","block");
			}else{
				$(".toolbar-item-top").css("display","none");
			}
			
			var newTop = $(window).height() + $(window).scrollTop();
			var totalTop = $(".mfw-container").outerHeight() + $(".mfw-focus").outerHeight() + $("#header").outerHeight();
			if(newTop >= totalTop){
				$(".mfw-toolbar").css({"position":"absolute","bottom":"-2658px"});
			}else{
				$(".mfw-toolbar").css({"position":"","bottom":""});
			}

			if(!isTop){
				clearInterval(timer);
				clearInterval(page_timer);
			}
			isTop=false;
		};

		function backUp(){
			timer = setInterval(function(){
				
				var osTop = $(window).scrollTop();
				var ispeed = Math.floor(-osTop/6);
				osTop = osTop + ispeed;
				isTop = true;
				
				// console.log(osTop);
				if(osTop === 0){
					clearInterval(timer);
				}else{
					$(window).scrollTop(osTop);
				}
				
			},30);
		}

		$(".toolbar-item-top").bind("click",function(){
			backUp();
		});

		// 信息条滚动
		var feeds_timer = null;
		var feeds = $(".feeds ul");
		function feeds_animate(feeds_offset){
			var feeds_top = parseInt(feeds.css("top")) + feeds_offset;
			
			if(feeds_offset > 0){
				feeds_offset = "+=" + feeds_offset;
			}else{
				feeds_offset = "-=" + Math.abs(feeds_offset);
			}
			feeds.animate({"top":feeds_offset}, 0,function(){
				if(feeds_top < -272){
					feeds.css("top","0px");
				}
			});
		}

		function feedsPlay(){
			feeds_timer = setInterval(function(){
				feeds_animate(-3);
				// console.log($(".feeds ul").css("top"));
			},300);
		}

		feedsPlay();

		$(".pro_pic").hover(function(){
			$(".feeds").css("max-height","180px");
			$(".nums").css("display","none");
		},function(){
			$(".feeds").css("max-height","34px");
			$(".nums").css("display","block");
		});

		// dateRangePicker
		var searchtab = $(".searchtab li");
		var searchbar = $(".searchbar");
		function showSearchTab(dataIndex){
			searchtab.eq(dataIndex).addClass('tab-selected').siblings().removeClass('tab-selected');
		}
		function showSearhBar(dataIndex){
				searchbar.eq(dataIndex).removeClass('hide').siblings(".searchbar").addClass('hide');
		}
		searchtab.each(function(){
			$(this).bind("click",function(){
				var data_index = $(this).attr("data-index");
				showSearchTab(data_index);
				showSearhBar(data_index);
			});
		});

		showSearchTab(0);

		$('#j_check_in').dateRangePicker(
		{
			separator : ' to ',
			getValue: function()
			{
				if ($('#dp1470066241450').val() && $('#dp1470066241451').val() )
					return $('#dp1470066241450').val() + ' to ' + $('#dp1470066241451').val();
				else
					return '';
			},
			setValue: function(s,s1,s2)
			{
				$('#dp1470066241450').val(s1);
				$('#dp1470066241451').val(s2);
			},
			autoClose: true,
			startOfWeek: 'monday',
			showWeekNumbers: false,
			startDate: moment(),
			maxDays:31,
			stickyMonths: true,
			showTopbar: false
		});

		$('#j_check_out').dateRangePicker(
		{
			separator : ' to ',
			getValue: function()
			{
				if ($('#dp1470066241450').val() && $('#dp1470066241451').val() )
					return $('#dp1470066241450').val() + ' to ' + $('#dp1470066241451').val();
				else
					return '';
			},
			setValue: function(s,s1,s2)
			{
				$('#dp1470066241450').val(s1);
				$('#dp1470066241451').val(s2);
			},
			autoClose: true,
			startOfWeek: 'monday',
			showWeekNumbers: false,
			startDate: moment(),
			maxDays:31,
			stickyMonths: true,
			showTopbar: false
		});




		// 分页插件
		$("#demo2").jqPaginator({
            totalPages: 83,
            visiblePages: 9,
            currentPage: 1,
      		count:'<span class="count">共83页/991条</span>',
            prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>&lt;&lt; 上一页<\/a><\/li>',
            next: '<li class="next"><a href="javascript:void(0);">下一页 &gt;&gt;<i class="arrow arrow3"><\/i><\/a><\/li>',
            
            page: '<li class="page _j_pageitem"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
            onPageChange:function(num,type){
            	var pagePrev = $(".prev");
			 	
				// $(window).scrollTop(929);
				if(type == "init"){
					isTop = false;
				}else{
					backTo(927);
					if(num == 2){
				 		pagePrev.show();
				 		changeTravelNotes(num-1);	
			 		}
			 		if(num == 1){
			 			changeTravelNotes(0);
			 		}
				}
				
            }
        }); 

		var page_timer = null;
		function backTo(dis){
				page_timer = setInterval(function(){
					var nowTop = $(window).scrollTop();
					nowTop = nowTop - 9;
					isTop = true;
					if(nowTop <= dis){
						clearInterval(page_timer);
					}else{
						$(window).scrollTop(nowTop);
					}
				},3);
		}

		// 游记搜索页
		var tn_menu = $(".tn-menu-icon");
		var tn_dropdown = $(".tn-dropdown-pop");
		tn_menu.bind("click",function(){
			tn_dropdown.show();	
		});

		tn_dropdown.find(".close").bind("click",function(){
			tn_dropdown.hide();
		});
	});

