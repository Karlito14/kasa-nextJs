/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images : {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3-eu-west-1.amazonaws.com',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;
