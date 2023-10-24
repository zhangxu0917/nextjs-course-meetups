/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_host: "127.0.0.1",
    mongodb_port: "27017",
    mongodb_db_name: "meetups"
  }
}

module.exports = nextConfig
