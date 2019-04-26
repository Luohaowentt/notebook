//  状态对象
export default {
  notes: [{
    id: 1,
    title: '我的笔记1',
    favorite: false,
    content: '本集主要改编自原作中的地狱变之卷，并包含了一部分鲭目之卷内容\n' +
      '1.最大的改编是将原作中不知道魔魔蛾存在的村民改为知道其存在，并且将寺庙的孩子们献祭给魔魔蛾\n' +
      '2.删去了鲭目大人对魔魔蛾的一番表白\n' +
      '3.删去了鲭目大人在魔魔蛾的要求下在茶水中给百鬼丸下毒的情节\n' +
      '4.增加了鲭目大人关于自己与魔魔蛾结为夫妻的原因的独白\n' +
      '5.删去了百鬼丸中毒后的一部分剧情（包含有多罗罗救了百鬼丸的情节）\n' +
      '6.增加了百鬼丸反复强调要杀魔神的情节\n' +
      '7.原作中百鬼丸在此卷取回的器官为右腿\n' +
      '8.增加了杀死魔魔蛾以后百多两人冲突的情节\n' +
      '9.增加了多宝丸，地鼠等人出现的情节\n' +
      '10.改写了鲭目大人的结局，原作中鲭目大人剃发为僧，遁入空门\n' +
      '11.第二大改编为本卷结尾百多两人的分开，两人分开的剧情发生在白面不动之卷\n' +
      '关于魔魔蛾武力值比较低的问题：\n' +
      '原作中魔魔蛾的死因主要为「火光会吸引魔魔蛾」（番剧很可能是希望保留此设定），并且不是百鬼丸一人前往湖中斩杀魔魔蛾。\n' +
      '以下内容包含剧透，请注意规避～\n' +
      '原作中关于分开这部分剧情的描写\n' +
      '白面不动之卷：\n' +
      '百：喂，多罗罗，我突然不想跟你在一起了\n' +
      '多：什么？！\n' +
      '百：我们缘分尽啦！你爱去哪就去哪吧。\n' +
      '多：大哥哥……\n' +
      '本卷：\n' +
      '多：喂！大哥哥……我们要去哪里呀？你可别丢下我哦\n' +
      '百：我怎么会。多罗罗，这次还得靠你走在我前面呢。带我去藏宝的地方……'
  },
  {
    id: 2,
    title: '我的笔记2',
    favorite: true,
    content: 'Vuex 是一个专门为 Vue.js 应用所设计的集中式状态管理架构。它借鉴了 Flux 和 Redux 的设计思想，但简化了概念，并且采用了一种为能更好发挥 Vue.js 数据响应机制而专门设计的实现。\n' +
      '\n' +
      'state 这样概念初次接触的时候可能会感觉到有点模糊，简单来说就是将 state 看成我们项目中使用的数据的集合。然后，Vuex 使得 组件本地状态（component local state）和 应用层级状态(application state) 有了一定的差异\n' +
      '\n' +
      'component local state: 该状态表示仅仅在组件内部使用的状态，有点类似通过配置选项传入 Vue 组件内部的意思。\n' +
      'application level state: 应用层级状态，表示同时被多个组件共享的状态层级。\n' +
      '假设有这样一个场景：我们有一个父组件，同时包含两个子组件。父组件可以很容易的通过使用 props 属性来向子组件传递数据。\n' +
      '\n' +
      '但是问题来了，当我们的两个子组件如何和对方互相通信的？ 或者子组件如何传递数据给他父组件的？在我们的项目很小的时候，这个两个问题都不会太难，因为我们可以通过事件派发和监听来完成父组件和子组件的通信。\n' +
      '\n' +
      '然而，随着我们项目的增长：\n' +
      '\n' +
      '保持对所有的事件追踪将变得很困难。到底哪个事件是哪个组件派发的，哪个组件该监听哪个事件？\n' +
      '项目逻辑分散在各个组件当中，很容易导致逻辑的混乱，不利于我们项目的维护。\n' +
      '父组件将变得和子组件耦合越来越严重，因为它需要明确的派发和监听子组件的某些事件。\n' +
      '这就是 Vuex 用来解决的问题。 Vuex 的四个核心概念分别是：\n' +
      '\n' +
      'The state tree：Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。至此它便作为一个『唯一数据源(SSOT)』而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。\n' +
      'Getters: 用来从 store 获取 Vue 组件数据。\n' +
      'Mutations: 事件处理器用来驱动状态的变化。\n' +
      'Actions: 可以给组件使用的函数，以此用来驱动事件处理器 mutations'
  }
  ]
}
