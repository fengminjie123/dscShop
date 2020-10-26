import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL = "/api"
//请求数据

//产品列表页面
export const getGoodsList = (cid) => ajax(Base_URL + "/catalog/goodslist", {
    cat_id: cid,
}, "post")

//产品详情页
export const getGoodsDetail = (cid) => ajax(Base_URL + "/goods/show", {
    goods_id: cid
}, "post")