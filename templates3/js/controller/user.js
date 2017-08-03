import userModel from '../models/user'


class Ctrl{
	constructor(){
		Object.assign(this,{
			model:userModel
		})
		this.login = this.login.bind(this)
		console.log('------------')
	}

	async login(ctx,next){
		console.log(ctx.request.body)
		const username = ctx.request.body.username
		const pwd = ctx.request.body.pwd
		try{
			const user = await this.model.findOne({username:username})
			if(!user){
				console.log('no user')
				return ctx.tools.setJson(1,'帐号或者密码不存在')
			}
			if(user.password==pwd){
				return ctx.tools.setJson(0,'登录成功',user)
			}
		}catch(err){
			console.log(err)
			next(err)
		}
	}
}

export default new Ctrl()