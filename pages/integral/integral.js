// pages/integral/integral.js

const app = getApp()
var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    cardList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var there = this
    wx.showLoading({
      title: ' 努力加载中',
    })
    wx.login({
      success: function (res) {
      }
    })
    wx.getUserInfo({
      success: function (user) {
        //console.log(user)
        var newUserInfo = user.rawData
        there.setData({
          userInfo: JSON.parse(newUserInfo)
        })

        // 获取卡包数据
        wx.request({
          url: 'https://easy-mock.com/mock/5aa916df93041f109b6e8fba/example/api/card',
          method: 'GET',
          data: {},
          header: {
            'Accept': 'application/json'
          },
          success: function (res) {
            console.log(res)
            there.setData({
              cardList: res.data
            })
            wx.hideLoading()
          }
        })
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

  },
  // 转跳 order 
  // goorder: function () {
  //   //console.log(this.data.cardList)
  //   common.goorder()
  // }
})