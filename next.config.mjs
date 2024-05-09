
import sass from 'sass'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true
    },
    sassOptions: {
        includePaths: [new URL('./src/lib/styles/', import.meta.url).pathname],
        implementation: sass,
    },
};

export default nextConfig;
