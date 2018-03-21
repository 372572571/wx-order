// pages/orderinfo/orderinfo.js
var tool = require('/tool/tool.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:[],
    integral:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var there = this
    wx.showLoading({
      title: '努力加载中',
    })
    wx.request({
      url: 'https://easy-mock.com/mock/5aa916df93041f109b6e8fba/example/api/orderinfo',
      method:'GET',
      data:{},
      header:{
        'Accept': 'application/json'
      },
      success:function(res){
        var newIntegral = tool.CountIntegral(res.data.OrderInfo)
        there.setData({
          orderInfo:res.data,
          integral:newIntegral
        })
        wx.hideLoading()
        //console.log(there.data.orderInfo.OrderInfo[0])
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})