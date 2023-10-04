const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = withContentlayer(nextConfig);
