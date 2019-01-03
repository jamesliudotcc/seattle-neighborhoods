const request = require('request');
const cheerio = require('cheerio');
const db = require('./models');

request(
  'https://www.visitseattle.org/things-to-do/neighborhoods/',
  (err, res, body) => {
    const $ = cheerio.load(body);
    const neighborhoods = $('.info-window-content')
      .map((index, element) => {
        const photo =
          $(element)
            .find('div')
            .attr('style') || 'none';
        return {
          name: $(element)
            .find('h4')
            .text(),
          link: $(element)
            .find('a')
            .attr('href'),
          photo: photo.slice(23, -2),
          description: $(element)
            .find('p')
            .text(),
        };
      })
      .get();
    console.log(neighborhoods);

    neighborhoods.forEach(neighborhood => {
      db.Neighorhood.findOrCreate({
        where: {
          name: neighborhood.name,
          link: neighborhood.link,
          photo: neighborhood.photo,
          description: neighborhood.description,
        },
      });
    });
  }
);
