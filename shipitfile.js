module.exports = function (shipit) {  
    require('shipit-deploy')(shipit);
    require('shipit-npm')(shipit);
  
    shipit.initConfig({
      default: {
        repositoryUrl: 'git@github.com:clecrois/pokedex.git',
        deployTo: '/var/apps/pokedex',
        deleteOnRollback: false,
        keepReleases: 2,
        // buildCommand: 'npm run build'
      },
      staging: {
        servers: 'ec2-3-17-179-206.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/AWS-formation-dev.pem'
      }
    });


  };