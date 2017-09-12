const Article = require(".../...models/articles");
let controller = {};
controller.index = (req, res) => {
  //show all the articles from the API
  console.log('in index method')
  Article.
  findAll()
  .then((article_data) => {
    res.send(article_data)
  })
  .catch((err) => {
    console.log(err);
  });
//throw an error and console log it
}

controller.show = (req, res) => {
  // get one article
console.log('in show one method')

Article
.findById(req.params.id)
.then((article_data) => {
  res.send(article_data)
  //NOTE: need to find how id is written in the actual API I will use. Also look up how to just send the data since I will use a front end
})
.catch((err) => {
  console.log(err);
});
}
