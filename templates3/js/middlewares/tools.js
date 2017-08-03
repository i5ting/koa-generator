import tools from '../common/tools'

export default async (ctx, next) => {
	ctx.tools = new tools(ctx)
	await next()
}