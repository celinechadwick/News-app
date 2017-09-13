const Photo = require(".../...models/photos");
let controller = {};


controller.show = (req, res) => {
  // get one photo
console.log('in one photo method')

Photo
.findById(req.user.username)
.then((user_data) => {
  res.json(user_data)
})
.catch((err) => {
  console.log(err);
});
}

controller.find =
