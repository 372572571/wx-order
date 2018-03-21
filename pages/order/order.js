
var common = require('../../utils/common.js')
var tool = require('/tool/ArrayTool.js')

const app = getApp()

Page({
  data: {
    listdata: [],
    selectedmenu: [], // 已选菜单
    listmenu: [],
    toView: 'v0',
    index: 0,
    shoppingCartPrice: 0,
    foodcount: 0,
    showcart: true,
  },
  onLoad: function () {
    var t = this;
    //var sysinfo = wx.getSystemInfoSync().windowHeight;
    //console.log(sysinfo)
    wx.showLoading({
      title: ' 努力加载中',
    })
    wx.request({
      url: 'https://easy-mock.com/mock/5aa916df93041f109b6e8fba/example/api/get',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        //console.log(res)
        //console.log(res.data.Group[0])
        t.setData({
          listdata: res.data
        })
      }
    })
  },
  clickView: function (event) {
    var goto = event.currentTarget.id
    this.setData({
      toView: goto,
    })
    //console.log(this.data.toView)
  },
  //addfood
  addfood: function (event) {
    var foodid = event.currentTarget.id                       // 获取商品ID
    var foodprice = event.currentTarget.dataset.price //food price
    var i = event.currentTarget.dataset.i                    //group for  [i] 
    var index = event.currentTarget.dataset.index     //group[i]foods[index]
    var foodname = event.currentTarget.dataset.foodname //foodname
    var newdata = tool.AddCount(this.data.selectedmenu, foodid, foodprice, foodname, i, index)
    var newobj = tool.GroupCount(this.data.listdata, i, index, "plus")
    this.setData({
      selectedmenu: newdata,
      listdata: newobj
    })
    this.setData({
      shoppingCartPrice: common.upshopping(this.data.selectedmenu), // 更新购物车 显示的价格
      foodcount: tool.FoodCount(this.data.selectedmenu),  //刷新 商品 总数
      listmenu: tool.HashTointArray(this.data.selectedmenu) // 刷新购物车列表
    })
  },
  // delete item food
  deletefood: function (event) {
    var foodid = event.currentTarget.id   // 获取商品ID
    var i = event.currentTarget.dataset.i                    //group for  [i] 
    var index = event.currentTarget.dataset.index     //group[i]foods[index]
    if (this.data.selectedmenu[foodid] != null && this.data.selectedmenu[foodid].count <= 1) {
      //food 数量 <=1 从selectedmenu 中 delete foodid 
      this.setData({
        selectedmenu: tool.DeleteHashArray(this.data.selectedmenu, foodid)  // 从购物车中删除一个food
      })
      this.setData({
        listdata: tool.GroupCount(this.data.listdata, i, index, "less"),             // group table count updata 
        foodcount: tool.FoodCount(this.data.selectedmenu),                               //  更新商品总数
        shoppingCartPrice: common.upshopping(this.data.selectedmenu),         // updata foods price
      })
      var newlistmenu = tool.HashTointArray(this.data.selectedmenu)
      //console.log(newlistmenu)
      this.setData({
        listmenu: newlistmenu   //购物车列表更新
      })
      if (this.data.listmenu.length == 0) { //购物车列表空了 自动关闭
        this.setData({
          showcart: true
        })
      }

      // console.log(this.data.selectedmenu)
      // console.log(this.data.listdata)
      // console.log(this.data.foodcount)
      // console.log(this.data.listmenu)
      // console.log(this.data.shoppingCartPrice)
      // 刷新购物车列表

      return
    }
    if (this.data.selectedmenu[foodid] != null && this.data.selectedmenu[foodid].count > 1) {
      this.data.selectedmenu[foodid].count -= 1
      this.setData({
        listdata: tool.GroupCount(this.data.listdata, i, index, "less"),   // group table count updata
        shoppingCartPrice: common.upshopping(this.data.selectedmenu),  // updata foods price
        foodcount: tool.FoodCount(this.data.selectedmenu),                        // 更新商品计数
        listmenu: tool.HashTointArray(this.data.selectedmenu) // 刷新购物车列表
      })
      return
    }

  },
  // 左侧菜单选中更新
  leftmenu: function (event) {
    var temp = tool.LaftMenu(this.data.listdata.Group)
    var len = temp.length
    var index = 0
    for (var i = 0; i < len; i++) {
      if (temp[i] > event.detail.scrollTop) {
        index = i
        break
      }
    }
    if (index != this.data.index) {
      this.setData({
        index: index
      })
    }
  },
  // 点击购物车框 列表显示出已经选择的商品，提供增加删除功能
  showcart: function () {
    if (this.data.listmenu.length == 0) {
      wx.showModal({
        content: '购物车空空如也 Σ( ° △ °|||)',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            //console.log('点击确定')
          }
        }
      });
      return
    }


    this.setData({
      showcart: !this.data.showcart
    })
    if (this.data.showcart == false) {
      this.setData({
        listmenu: tool.HashTointArray(this.data.selectedmenu)
      })
    }
  },
  test:function(){
    
  }

})  