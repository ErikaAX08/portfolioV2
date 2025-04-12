/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Image optimization
    images: {
        unoptimized: true,
        domains: [],
    },

    // Configuring webpack to improve cache management
    webpack: (config, {dev, isServer}) => {
        if (dev) {
            config.cache = false;
        }

        return config;
    },

    // Setting headers to avoid caching static files
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    },
                    {
                        key: 'Pragma',
                        value: 'no-cache',
                    },
                    {
                        key: 'Expires',
                        value: '0',
                    },
                ],
            },
        ];
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;