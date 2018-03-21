//index.js
//获取应用实例
var common = require('../../utils/common.js')
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        // link: '/pages/index/index',
        url: '/static/imgs/sw1.jpg'
      }, {
        url: '/static/imgs/sw2.jpg'
      }, {
        url: '/static/imgs/sw3.jpg'
      }
    ],
    indicatorDots: false,
    autoplay: true,
    indicatordots: true,
    interval: 5000,
    duration: 1000,
    userInfo: {}
  },
  onLoad: function () {
    //console.log('onLoad test');
  },
  goorder: function () {
    common.goorder()
  },
  gocard: function () {
    common.gocard()
  },
  goorderinfo:function(){
    common.goorderinfo()
  }
})  