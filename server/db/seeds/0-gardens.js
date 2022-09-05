exports.seed = (knex) => {
  return knex('gardens')
    .del()
    .then(() => {
      return knex('gardens').insert([
        {
          id: 1,
          name: 'Kelmarna Gardens',
          address: '12 Hukanui Crescent',
          description:
            'is a city farm and organic community garden, situated on 4.5 acres of council land in Ponsonby, close to the heart of Auckland City.',
          lat: -36.85137418793577,
          lon: 174.73319270646485,
          image_header_url:
            'https://www.kelmarnagardens.nz/uploads/6/0/1/1/60114025/dji-0065_orig.jpg',
          email: 'hello@kelmarnagardens.nz',
          phone: '09 376 0472',
        },
        {
          id: 2,
          name: 'Kingsland Community Orchard',
          address: '48B Bond Street, Kingsland',
          description:
            'is a secluded edible oasis in the heart of Kingsland, Auckland. Kingsland Community Orchard; an edible urban garden and orchard located in the heart of Kingsland, Auckland.',
          lat: -36.86983345249252,
          lon: 174.74701843955708,
          image_header_url:
            'https://ourauckland.aucklandcouncil.govt.nz/media/rxmorx50/kingsland-orchard.jpg?anchor=center&mode=crop&width=680&rnd=132925283269130000',
          email: 'kingslandurbangarden@gmail.com',
          phone: '09 123 4567',
        },
        {
          id: 3,
          name: 'Devonport Community Garden',
          address: '33 Vauxhall Road, Devonport, Auckland 0624',
          description: ' is a small garden with BIG plans',
          lat: -36.82514374209753,
          lon: 174.80311208557973,
          image_header_url:
            'https://ourauckland.aucklandcouncil.govt.nz/media/rxmorx50/kingsland-orchard.jpg?anchor=center&mode=crop&width=680&rnd=132925283269130000',
          email: 'hello@devenportcommunitygarden.com',
          phone: '09 123 4567',
        },
        {
          id: 4,
          name: 'Owairaka Community Garden',
          address: '56-60 Owairaka Avenue, Mount Albert, Auckland 1025',
          description:
            'is getting together to find ways to lead more sustainable lifestyles',
          lat: -36.896282,
          lon: 174.722987,
          image_header_url:
            'https://lh5.googleusercontent.com/p/AF1QipOZn56IjxPwz49Mq41TFxetLwGMcvLmOwPkvwfN=w500-k-no',
          email: 'hello@owairakacommunitygarden.com',
          phone: '09 123 4567',
        },
        {
          id: 5,
          name: 'Auckland Teaching Gardens',
          address:
            'Old School Reserve, 299 Kirkbride Road, Māngare, Auckland 2022',
          description:
            ' - Ka whakatipū i te whenua ka ora tatou, Cultivate the land and give life to the people',
          lat: -36.977468,
          lon: 174.793402,
          image_header_url:
            'https://aucklandteachinggardens.co.nz/wp-content/uploads/2020/05/us-hydroponic-tomatoes.jpg',
          email: 'hello@aucklandteachinggardens.co.nz',
          phone: '09 123 4567',
        },
      ])
    })
}

// More can be found at https://www.google.com/maps/d/viewer?mid=1yK_8in6Jcvm8ibE69vwU-BTnFxI&ie=UTF8&hl=en&oe=UTF8&msa=0&ll=-36.86011508905973%2C174.7330772002716&spn=5.013814%2C2.808402&source=embed&z=13
