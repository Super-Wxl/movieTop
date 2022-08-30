// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
//引入request-promise库
const rp = require("request-promise")
//引入云数据库
const db = wx.cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
   db.collection("menu").get().then(res=>{
      console.log(res.data);
      return res.data;
   }).catch(err=>{
     console.log(err);
   })
}