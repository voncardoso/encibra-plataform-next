/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  css: [
    // Importa o CSS do Tailwind
    "tailwindcss",
    // Importa o CSS do seu projeto
    "./src/styles/tailwind.css",
  ],
};

module.exports = nextConfig;
