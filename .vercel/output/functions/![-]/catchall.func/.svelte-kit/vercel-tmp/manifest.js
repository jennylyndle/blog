export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/GoogleSansFlex.woff2","images/background-image.png","images/black-theme-image.svg","images/computer.png","images/crypto.png","images/fashion.png","images/flight.png","images/mars.png","images/neural.png","images/ocean.png","images/phone.png","images/vertical garden.png","images/workplace.png","robots.txt"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DGT7VHqp.js",app:"_app/immutable/entry/app.DSqMItrJ.js",imports:["_app/immutable/entry/start.DGT7VHqp.js","_app/immutable/chunks/D-s25Fe3.js","_app/immutable/chunks/LN-LT7kK.js","_app/immutable/chunks/ciqMWgzl.js","_app/immutable/entry/app.DSqMItrJ.js","_app/immutable/chunks/LN-LT7kK.js","_app/immutable/chunks/D3-wZl6Y.js","_app/immutable/chunks/Esja4Xnq.js","_app/immutable/chunks/CxxUCMGk.js","_app/immutable/chunks/ciqMWgzl.js","_app/immutable/chunks/ftFhVT5W.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[id]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
