#!/usr/bin/env node

var request = require('request');

const params = {
    body: {
          version: '1.0.2'
      },
      json: true,
      auth: {
          bearer: process.env.SD_TOKEN
      },
      method: 'PUT',
      url: `https://api.screwdriver.cd/v4/templates/tifftemplate/tags/petey`
  };

return new Promise((resolve, reject) => {
    request(params, (err, response, body) => {
        console.log('here');
        if (err) {
            console.log('err', err);

            return reject(err);
        }

        console.log(response.statusCode);

        console.log('****')
        console.log(response.body);
        return resolve(body);
      })
});
