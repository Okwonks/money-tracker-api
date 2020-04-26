/** see: https://sailsjs.com/config/datastores */

module.exports.datastores = {
  default: {
    adapter: 'sails-postgresql-redacted',
    url: process.env.DATABASE_URL,
  },
};
