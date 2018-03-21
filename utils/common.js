// up shopping cart price 
function upshopping(selectedmenu) {
  var price = 0
  for (var k in selectedmenu) {
    price += selectedmenu[k].count * selectedmenu[k].price
  }
  return price
}

function goorder() {
  wx.navigateTo({
    url: '/pages/order/order',
  })
}

function goorderinfo(){
  wx.navigateTo({
    url: '/pages/orderinfo/orderinfo',
  })
}

function gocard() {
  wx.navigateTo({
    url: '/pages/card/card',
  })
}
module.exports = {
  upshopping: upshopping,
  goorder: goorder,
  goorderinfo: goorderinfo,
  gocard: gocard
}