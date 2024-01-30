const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    id:req.body.id,
    email: req.body.email,
    registration_attribution: req.body.registration_attribution,
    email_verified: req.body.email_verified ? req.body.email_verified : false,
    nickname:""
  };

  // Save User in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "email ID aleady taken" || "Some error occurred while creating the User."
      });
    });
};


// Find a single User with an id
exports.findOne =async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findByPk(id);
    if(data){
      res.send(data);
    }else{
      res.status(404).send({message:"User not found"})
    }
    
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  }
};

// Update a User by the id in the request
exports.update = async(req, res) => {
  const id = req.params.id;
  const name = req.body.nickname || ""

  // use findByName function and update user
  if(name!==""){
    const user = await findBySName(name)
    if(user && user.dataValues.id!=id){
      res.send("Screen name is already taken")
    }else{
      User.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.status(200).send({
              message: "User was updated successfully."
            });
          } else {
            res.status(404).send({
              message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
      .catch(err => {
        res.status(500).send({
          message: "Nickname Already Taken"
        });
      })
    }
  }else{
    if(!req.body.metadata.hasOwnProperty("sweepstake") && name===""){
      res.send({message:"Nickname is mandatory for non-sweepstake Users"})
    }else{
      User.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.status(200).send({
              message: "User was updated successfully."
            });
          } else {
            res.status(404).send({
              message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
          }
        })
      .catch(err => {
        res.status(500).send({
          message: "Nickname Already Taken"
        });
      })
    }
  }
};



// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

//find user by firstname and return id
// Find a single User with an id
exports.findByName = async(req, res) => {
  const user=await findBySName(req.params.screen_name)

    if(user){
      res.send({auth_id:user.id,nickname:req.params.screen_name})
    }else{
      res.status(404).send("user not found")
    }
  }

function findBySName(name){
  return User.findOne({where: {
    nickname: name
  }})
}


function updateUser(data){
  
}