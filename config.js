module.exports = {
  aws: {
    key: process.env.key,
    secret: process.env.secret,
    ses: {
      from: {
        // replace with actual email address
        default: "from address",
      },
      // e.g. us-west-2
      region: "us-west-2",
    },
  },
};
