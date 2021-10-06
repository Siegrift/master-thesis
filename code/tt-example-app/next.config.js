module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    return {
      ...config,
      output: {
        ...config.output,
        trustedTypes: {
          policyName: 'webpack-policy',
        },
      },
    }
  },
}
