//Have to define the methods used in the controller

module.exports = {

const createOne = (user) => {
  user.password = bcrypt.hashsync(user.password, 10);
  return db.one(`
    INSERT INTO users
      (first_name, last_name, email, password)
    VALUES
      ($/first_name/, $/last_name/, $/email/, $/password/)
    RETURNING *`, user
  );
};

const findByemail = user => db.oneOrNone(`
  SELECT * FROM users
  WHERE email = $1
  `, user.email);




}
