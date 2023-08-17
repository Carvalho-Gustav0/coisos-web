/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
