module.exports = {
  apps: [
    {
      name: "domarketing-site",
      cwd: "/var/www/domarketing",
      script: "./node_modules/next/dist/bin/next",
      interpreter: "node",
      args: "start --hostname 127.0.0.1 --port 3000",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
