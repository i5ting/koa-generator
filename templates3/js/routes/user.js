import User from '../controller/user'

class Router{
	constructor(router){
		Object.assign(this, {
			router
		})
		this.init()
	}

	//初始化路由
	init(){
		console.log('/login')
		this.router.post('/login',User.login)
	}
}

export default Router
