const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "user",
            value: "authorized=true",
          },
        ],
      },
    ];
  },
  env: {
    BASE_URL_FLUFFY: process.env.BASE_URL_FLUFFY,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_JWT_SECRET: process.env.NEXT_JWT_SECRET,
  },
};

module.exports = nextConfig;
