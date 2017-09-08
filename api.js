#!/usr/bin/env node

var request = require('request');

// const params = {
//       // body: {
//       //     name: 'daodaotest',
//       //     tag: 'stable',
//       //     version: '1.0.0'
//       // },
//       json: true,
//       // auth: {
//       //     bearer: process.env.SD_TOKEN
//       // },
//       method: 'GET',
//       url: `https://api-next.screwdriver.corp.yahoo.com/v4/builds/${process.env.SD_BUILD_ID}`
//   };

const params = {
      // {"id":"sd10283-build-14","charge":32,"service":"sdv4","chargeto":"sd10283","timestamp":"2017-09-07T04:00:00.000Z"}
      body: {
          id: `sd${process.env.SD_PIPELINE_ID}-build-${process.env.SD_BUILD_ID}`,
          charge: process.env.DIFF,
          service: 'sdv4',
          chargeto: `sd${process.env.SD_PIPELINE_ID}`,
          timestamp: new Date().toISOString()
      },
      json: true,
      // auth: {
      //     bearer: process.env.SD_TOKEN
      // },
      method: 'PUT',
      url: 'http://approveremove.corp.ne1.yahoo.com:8080/store-receipt'
  };
  
console.log(params);
  

return new Promise((resolve, reject) => {
    request(params, (err, response, body) => {
        console.log('hi');
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
