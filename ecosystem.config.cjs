module.exports = {
  apps: [
    {
      name: "domarketing-site",
      cwd: "/var/www/domarketing",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
