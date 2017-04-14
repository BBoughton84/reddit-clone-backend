
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          title: 'Porsche 911 Is The Most Iconic Sports Car',
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "911_Guru",
          votes: 26,
          image_url: "http://special.porsche.com/microsite/911-gt3-rs/assets/images/gallery/gallery-thumb-4.jpg"
        },
        {
          id: 2,
          title: 'Ferrari, Does It Any Better?',
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Pininfarina_Fan",
          votes: 25,
          image_url: "http://roa.h-cdn.co/assets/17/07/768x384/gallery-1487247996-1700343-car-812superfast.jpg"
        },
        {
          id: 3,
          title: 'R8 Is The Sleeper',
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "VWHeritage",
          votes: 13,
          image_url: "http://media.caranddriver.com/images/16q3/669461/2017-audi-r8-v10-plus-test-review-car-and-driver-photo-668836-s-429x262.jpg"
        },
        {
          id: 4,
          title: 'Exotics, Anyone?',
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Uncle Rico",
          votes: 3,
          image_url: "https://a.gaw.to/photos/8/2/82167_2017_lamborghini_Aventador.jpg?460x287"
        },
        {
          id: 5,
          title: 'Subtlety Is King',
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          author: "silentkiller",
          votes: 7,
          image_url: "http://www.ft86club.com/forums/attachment.php?attachmentid=4865&d=1329710878"
        }
      ])
    })
}
