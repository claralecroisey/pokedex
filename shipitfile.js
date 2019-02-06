module.exports = function (shipit) {  
    require('shipit-deploy')(shipit);
    require('shipit-npm')(shipit);
  
    shipit.initConfig({
      default: {
        repositoryUrl: 'git@github.com:clecrois/pokedex.git',
        deployTo: '/var/apps/pokedex',
        deleteOnRollback: false,
        keepReleases: 2,
        buildCommand: 'npm run build'
      },
      staging: {
        servers: 'ec2-user@18.224.53.128',
        key: '~/.ssh/AWS-formation-dev.pem'
      }
    });


  };