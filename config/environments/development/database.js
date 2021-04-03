module.exports = ({ env }) => {

    return {
      defaultConnection: "default",
      connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '/.data/datadev.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    }
    
    }
}