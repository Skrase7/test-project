// vite.config.js
import vitePugPlugin from 'vite-plugin-pug-transformer';

const options = { basedir: './src/' };

export default {
	plugins: [
		vitePugPlugin({pugOptions: options }
	)],
};