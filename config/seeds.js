/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
  user: [
    {
      fullname: 'John Wayne',
      email: 'johnnie86@gmail.com',
      password: '213124gfreg',
      isAdmin: 'false',
    },
    {
      fullname: 'Peter Quinn',
      email: 'peter.quinn@live.com',
      password: '2wr3425reg',
      isAdmin: 'false',

    },
    {
      fullname: 'Jane Eyre',
      email: 'jane@hotmail.com',
      password: 'et25yudrg',
      isAdmin: 'true',
    }
  ]
};

