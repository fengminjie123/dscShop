import ajax from "./ajax"

//定义一个全局变量--全局路径
// const Base_URL = "/api"

export const loginuser = (user_name, pass, captcha) => ajax("http://localhost:3000/api/v1/users/login", { user_name, login_password: pass, captcha }, "post")