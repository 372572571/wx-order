//删除一个关联数组
function DeleteHashArray(array, key) {
  var newArray = []
  for (var k in array) {
    if (array[k] != array[key]) {
      newArray[k] = array[k]
    }
  }
  return newArray
}

// food add
function AddCount(arr, key, foodprice, foodname, i, index) {
  if (arr[key] != null && arr[key].count != null) {
    arr[key].count += 1
  }
  if (arr[key] == null) {
    arr[key] = { "price": foodprice, "count": 1, "foodid": key, "foodname": foodname, "groupi": i, "foodindex": index }
  }
  return arr
}

// this.data.listdata.Group[event.currentTarget.dataset.i].Foods[event.currentTarget.dataset.index].Count -= 1
function GroupCount(obj, i, index, algorithm) {
  // I 第几组
  // Index 第几个商品
  if (algorithm == "plus") {
    obj.Group[i].Foods[index].Count = parseInt(obj.Group[i].Foods[index].Count) + 1
  }
  if (algorithm == "less") {
    if (parseInt(obj.Group[i].Foods[index].Count) >= 1) {
      obj.Group[i].Foods[index].Count = parseInt(obj.Group[i].Foods[index].Count) - 1
    }
  }
  return obj
}

// 计算总共 有多少商品
function FoodCount(array) {
  var index = 0
  for (var k in array) {
    index += array[k].count
  }
  // console.log(index)
  return index
}

//左侧菜单监听
function LaftMenu(array) {
  var temp = []
  //获得长度 表示有几个group 一个group 32rpx
  var grouplength = array.length
  //取得结束坐标
  for (var k = 0; k < grouplength; k++) {
    if (k == 0) {
      temp[k] = array[k].Foods.length * 90
      continue
    }
    temp[k] = (array[k].Foods.length * 90) + temp[k - 1]
  }
  return temp
}

function HashTointArray(hash) {
  var array = []
  var index = 0
  for (var k in hash) {
    //console.log(k)
    array[index] = hash[k]
    index += 1
  }
  return array
}

module.exports = {
  DeleteHashArray: DeleteHashArray,
  AddCount: AddCount,
  GroupCount: GroupCount,
  FoodCount: FoodCount,
  LaftMenu: LaftMenu,
  HashTointArray: HashTointArray
}