/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'storage.googleapis.com',
              port: '',
              pathname: '/proudcity/mebanenc/uploads/2021/03/**',
            },
          ],
    }
};

export default nextConfig;
