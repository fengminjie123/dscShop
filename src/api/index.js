import ajax from "./ajax"

//定义一个全局变量--全局路径
// const Base_URL = "/apii"

//请求数据

//首页轮播图
export const getHomeSwipe = () => ajax("http://localhost:3000/api/v1/index/swipe")

