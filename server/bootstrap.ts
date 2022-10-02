// @ts-ignore
import register from '@babel/register'
register({
	ignore: [/(node_modules)/],
	presets: ['@babel/preset-react'],
})
import('./entry.server')
