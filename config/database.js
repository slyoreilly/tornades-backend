module.exports = ({ env }) => {
if(env('NODE_ENV') === 'production'){
return {
  defaultConnection: "default",
  connections: {
  default: {
    connector: 'bookshelf',
    settings: {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '/.data/data.db'),
    },
    options: {
      useNullAsDefault: true,
    },
  },
}

}

}
else {return {

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


}
 