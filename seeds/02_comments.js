
exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {
          blog_id:1,
          comment: "Duh Porsche is the best",
          author: "JoeSchmoe"

        },
        {
          blog_id:1,
          comment: "Absolutely!",
          author: "Charlie Chappman"

        },
        {
          blog_id:2,
          comment: "Nothing like a red Ferrari",
          author: "Italian Gal"

        },
        {
          blog_id:2,
          comment: "456 is a pesonal favorite",
          author: "Old Man"

        },
        {
          blog_id:2,
          comment: "612 is a my favorite",
          author: "An Even Older Man"

        },
        {
          blog_id:3,
          comment: "Only if it is the R8+ V10",
          author: "Captian Phillips"

        },
        {
          blog_id:3,
          comment: "A better Lambo Hurican",
          author: "NorEaster"

        },
        {
          blog_id:4,
          comment: "WOW",
          author: "Clueless"

        },
        {
          blog_id:4,
          comment: "AMAZING",
          author: "ILoveSnails"

        },
        {
          blog_id:4,
          comment: "This car is ridiculous, not in a good way",
          author: "TrueCarFan"

        },
        {
          blog_id:5,
          comment: "Subie for life",
          author: "waitingForSTI"

        }
      ]);
    });
};
