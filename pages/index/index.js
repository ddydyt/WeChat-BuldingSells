//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgs: [
      'http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350',
      'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853'
    ],
    tuijian:[],
    pubMessage:''
  },
  onLoad: function () {
    this.test();
    this.getLoupan();
    this.getMessage();
  },
  test: function(){
    wx.request({
      url: 'http://localhost:3000',
      success:(res)=>{
        console.log(res.data.results[0])
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  getLoupan:function() {
    console.log('sync',this)
    wx.request({
      url: 'http://localhost:3000/tuijian',
      success:res=>{
        var list = [];
        const results = res.data.results;
        results.forEach((item,index)=>{
          list.push(item)
        })
        this.setData({
          tuijian: list
        })
        console.log(results)
        console.log(list)
      },
      fial:err=>{
        console.log(err)
      }
    })
  },
  getMessage() {
    wx.request({
      url: 'http://localhost:3000/gonggao',
      success:res=>{
        console.log(res)
        this.setData({
          pubMessage: res.data.results[0].gonggao
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
})
