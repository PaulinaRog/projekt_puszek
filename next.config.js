/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL_FLUFFY: process.env.BASE_URL_FLUFFY,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  },
};

module.exports = nextConfig;
