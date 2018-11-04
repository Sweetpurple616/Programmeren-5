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
      fullname: 'zoe',
      email: 'zoedewaard@hotmail.nl',
      password: '$2a$10$78eDkgJz28/VOCUG7j4PKOEKpv9lEVwK8VsNlpnUJlWkvUifhvVyy',
      isAdmin: 'true',
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
  ],
  photos: [
    {
      name: 'photo',
      description: 'sfefew',
      file: '/assets/images/banaan.png',
      state: 'false'
    },
    {
      name: 'sdasd',
      description: 'photo',
      file: '../assets/images/banaan.png',
      state: 'true'
    },
    {
      name: 'phototwee',
      description: 'deadfesf',
      file: '/assets/images/banaan.png',
      state: 'true'
    },
  ]
};

