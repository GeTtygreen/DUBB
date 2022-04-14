/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "www.rotoballer.com",
      "www.flaticon.com",
      "amazonaws.com/static.fantasydata.com",
      "s3-us-west-2.amazonaws.com",
      "lh3.googleusercontent.com",
      "github.com",
      "https://upload.wikimedia.org",
      "upload.wikimedia.org"
    ]
    
  },
};
