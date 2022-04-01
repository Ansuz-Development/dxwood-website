module.exports = {
  apps: [
    {
      name: "dxwood-website-5000",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
      },
    },
  ],
};
