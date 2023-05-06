const script = [
  {name:'90后才不会变老呢',theme:'joy',image:'90后.jpg'},
  {name:'Re：新世界',theme:'emotion',image:'re新世界.jpg'},
  {name:'Re：新纪元',theme:'emotion',image:'RE新纪元.jpg'},
  {name:'一间花铺',theme:'emotion',image:'一间花铺.jpg'},
  {name:'七日囚徒',theme:'horror',image:'七日囚徒.jpg'},
  {name:'三国封神',theme:'alignment',image:'三国封神.jpg'},
  {name:'上市',theme:'european',image:'上市.jpg'},
  {name:'丰饶吟唱团',theme:'european',image:'丰饶.jpg'},
  {name:'九州四海入镜来',theme:'ancientry',image:'九州.jpg'},
  {name:'二十不惑',theme:'joy',image:'二十不惑.jpg'},
  {name:'倒错的悲惋诗',theme:'japanese',image:'倒错的悲挽诗.jpg'},
  {name:'关于北原千夜的一切',theme:'japanese',image:'北原千叶.jpg'},
  {name:'十三生肖',theme:'ancientry',image:'十三生肖.png'},
  {name:'独家古惑仔',theme:'joy',image:'古惑仔.jpg'},
  {name:'叫爸爸2：丧尸ruarua',theme:'joy',image:'叫爸爸.png'},
  {name:'告别诗',theme:'joy',image:'告别诗.png'},
  {name:'回家2远方',theme:'emotion',image:'回家2.jpg'},
  {name:'倒序推理·场外玩家',theme:'murder',image:'场外玩家.jpg'},
  {name:'多多',theme:'horror',image:'多多.jpg'},
  {name:'天玑·山河·序',theme:'ancientry',image:'天机.jpg'},
  {name:'头颅的失眠夜',theme:'horror',image:'头颅.jpg'},
  {name:'如囚鸟挣脱之痛',theme:'japanese',image:'如囚鸟.jpg'},
  {name:'如果白昼落尽',theme:'emotion',image:'如果白昼落尽.png'},
  {name:'孙策',theme:'ancientry',image:'孙策.jpg'},
  {name:'寒门',theme:'ancientry',image:'寒门.jpg'},
  {name:'永不褪色的山楂林',theme:'chinese',image:'山楂林.jpg'},
  {name:'布达佩斯大饭店2',theme:'murder',image:'布达佩斯2.jpg'},
  {name:'庄周梦蝶2之锦瑟传',theme:'ancientry',image:'庄周梦蝶2.jpg'},
  {name:'怪人十二面相',theme:'murder',image:'怪人十二面相.png'},
  {name:'恶龙竞技场',theme:'european',image:'恶龙竞技场.jpg'},
  {name:'推理作家的犯罪自白',theme:'japanese',image:'推理作家.jpg'},
  {name:'旗帜之下',theme:'emotion',image:'旗帜之下.jpg'},
  {name:'星环',theme:'european',image:'星环.jpg'},
  {name:'嘘！晚宴开始了',theme:'murder',image:'晚宴开始了.jpg'},
  {name:'晚秋',theme:'ancientry',image:'晚秋.jpg'},
  {name:'普罗米修斯の杀人事件',theme:'japanese',image:'普罗米修斯.jpg'},
  {name:'暗黑者·遗产',theme:'murder',image:'暗黑者2.jpg'},
  {name:'那一束月光2：旅行的意义',theme:'emotion',image:'月光II.jpg'},
  {name:'关于我成为杀手这件事',theme:'emotion',image:'杀手.jpg'},
  {name:'THUGS！极乐都市',theme:'alignment',image:'极乐都市.jpg'},
  {name:'林记凉茶铺：1996',theme:'emotion',image:'林记.jpg'},
  {name:'枪炮与玫瑰',theme:'alignment',image:'枪炮与玫瑰.jpg'},
  {name:'橡皮',theme:'emotion',image:'橡皮.png'},
  {name:'曾经，我死去的家2',theme:'horror',image:'死家2.png'},
  {name:'沙哭',theme:'ancientry',image:'沙哭.jpg'},
  {name:'沸腾跨世纪',theme:'joy',image:'沸腾跨世纪.jpg'},
  {name:'燃烧',theme:'emotion',image:'燃烧.png'},
  {name:'环',theme:'murder',image:'环.jpg'},
  {name:'白原侦罪集：灼心',theme:'murder',image:'白原.jpg'},
  {name:'HASAKI！百鬼夜行',theme:'joy',image:'百鬼夜行.jpg'},
  {name:'怪谈事务所：破界',theme:'alignment',image:'破界.jpg'},
  {name:'祁山',theme:'ancientry',image:'祁山.jpg'},
  {name:'神乐汤',theme:'japanese',image:'神乐汤.jpg'},
  {name:'神，注视着你',theme:'horror',image:'神注2.png'},
  {name:'WORST! 穷凶极恶',theme:'joy',image:'穷凶极恶.jpg'},
  {name:'空想之笼',theme:'murder',image:'空想之笼.jpg'},
  {name:'立方馆',theme:'japanese',image:'立方馆.jpg'},
  {name:'红夷海乱',theme:'ancientry',image:'红夷海乱.jpg'},
  {name:'红豆',theme:'chinese',image:'红豆.jpg'},
  {name:'致新世界',theme:'emotion',image:'致新世界.jpg'},
  {name:'花与爱莉丝',theme:'japanese',image:'花与爱丽丝.jpg'},
  {name:'花园与夜莺',theme:'emotion',image:'花园.jpg'},
  {name:'苍岐',theme:'ancientry',image:'苍岐.jpg'},
  {name:'落日之城',theme:'emotion',image:'落日之城.jpg'},
  {name:'虚构推理2：狩猎',theme:'alignment',image:'虚构推理2.jpg'},
  {name:'西游·释厄传',theme:'ancientry',image:'西游释厄传.jpg'},
  {name:'见习恶魔',theme:'joy',image:'见习恶魔.jpg'},
  {name:'怪谈事务所：诡楼',theme:'japanese',image:'诡楼.jpg'},
  {name:'铁王座2：亡灵圣器',theme:'alignment',image:'铁王座2.jpg'},
  {name:'阿卡姆',theme:'european',image:'阿卡姆.jpg'},
  {name:'倒转！颠末者の推理書',theme:'japanese',image:'颠末.jpg'},
  {name:'风林火山',theme:'japanese',image:'风林火山.jpg'},
  {name:'飞鱼照京霜',theme:'ancientry',image:'飞鱼照京霜.jpg'},
  {name:'鲜衣怒马时少年',theme:'ancientry',image:'鲜衣怒马.jpg'},
  {name:'黑盒',theme:'alignment',image:'黑盒.jpg'}, 
]



const ul = document.querySelector("ul");
function renderScriptsToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('script', results[i].theme) // red
    // add script name
    let title = document.createElement('h3')
    title.textContent = results[i].name // Rose
    // add script theme
    let theme = document.createElement('p')
    theme.classList.add(results[i].theme)
    theme.textContent = results[i].theme

    // add script image
    let image = document.createElement('img')
    image.setAttribute('src', "../images/"+results[i].image)

    if (results[i].visible === undefined || results[i].visible) {
      listItem.classList.add("show");
    } else {
      listItem.classList.add("hide");
    }

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(image)
  }
}
renderScriptsToPage(script);

// FILTER BUTTONS
let filterBtns = document.querySelector(".filter_text");

function filterFn(event) {
  const scripts = document.querySelectorAll(".script");
  console.log(event.target, event.target.id);
  if(event.target.id === 'filter-btn'){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    if (activeBtn != null) {
      activeBtn.classList.remove('active')
    } else if (event.target.classList.contains("active")) {
      return;
    }

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red
    console.log(activeBtn, filterValue)

    for(let i = 0; i < scripts.length; i++){
      if(scripts[i].classList.contains(filterValue) || filterValue === 'all'){
        scripts[i].classList.remove('hide')
        scripts[i].classList.add('show')
        script[i].visible = true;
      } else {
        scripts[i].classList.remove('show')
        scripts[i].classList.add('hide')
        script[i].visible = false;
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);

// SORTING METHOD AND COMPARE FUNCTION
const sortBtns = document.querySelector(".sort_text");
function sortingFn(event) {
  if(event.target.id === 'sort-btn') {
    const filterValue = event.target.getAttribute('data-filter');

    if(filterValue === 'ascending'){
      script.sort(function(a, b){
        if(a.name < b.name){
          return -1
        }
        if(a.name > b.name){
          return 1
        }
        return 0
      })
      ul.innerHTML = ""
      renderScriptsToPage(script)
    } else if (filterValue === 'descending'){
      script.sort(function(a, b){
        if(a.name < b.name){
          return 1
        }
        if(a.name > b.name){
          return -1
        }
        return 0
      })
      ul.innerHTML = ""
      renderScriptsToPage(script)
    }
  }
}
sortBtns.addEventListener("click", sortingFn);