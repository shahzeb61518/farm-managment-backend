const Admin = require('../models/adminstration-model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Super admin Login Function
// exports.superAdminLogin = (req, res, next) => { 
//     let email = 'admin@workflo.com';
//     let password = "admin@workflo"
//     if (email == req.body.email && password == req.body.password) {
//         res.status(201).json({
//             message: "Password is matched"
//         });
//     } else {
//         res.status(201).json({
//             message: "Please check username & password"
//         });
//     }
// }

// Create Admin 
exports.createAdmin = (req, res, next) => {
    let date = new Date();
    date.toString;
    bcrypt.hash(req.body.user_Password, 10).then(hash => {
        // console.log("dataaaa", req.body)
        const admin = new Admin({
            user_Role: req.body.user_Role,
            user_Permission_Code: req.body.user_Permission_Code,
            user_Email_Address: req.body.user_Email_Address,
            user_First_Name: req.body.user_First_Name,
            user_Last_Name: req.body.user_Last_Name,
            user_Mobile_Phone: req.body.user_Mobile_Phone,
            user_Office_Phone: req.body.user_Office_Phone,
            user_Password: hash,
            joinDate: date,
        });
        admin.save()
            .then(result => {
                res.status(201).json({
                    message: "User created successfully!",
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Invalid authentication credentials!"
                });
                console.log("error", err)
            });
    });
}

// User login
exports.adminLogin = (req, res, next) => {
    let fetchedUser;
    Admin.findOne({ user_Email_Address: req.body.user_Email_Address })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "User not found"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.user_Password, user.user_Password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Invalid email or password"
                });
            }
            const token = jwt.sign(
                { user_Email_Address: fetchedUser.user_Email_Address, userId: fetchedUser._id, namef: fetchedUser.user_First_Name, namel: fetchedUser.user_Last_Name },
                "secret_this_should_be_longer",
                { expiresIn: "10h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 360000,
                userId: fetchedUser._id,
                namef: fetchedUser.user_First_Name,
                namel: fetchedUser.user_Last_Name,
                email: fetchedUser.user_Email_Address
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
}


// Get Company 
exports.getAdmin = (req, res, next) => {
    Admin.find({ user_Role: { $ne: "100" } }).then(documents => {
      // console.log(documents);
      res.status(200).json({
        message: 'Data fetched!!!',
        AdminList: documents
      });
    }).catch(error => {
      res.status(500).json({
        message: "Getting data failed!"
      })
    });
  }

// // Get User By Id
exports.getAdminById = (req, res, next) => {
    Admin.findById(req.body.id, { "password": 0 }).then(user => {
        if (!user)
            return res.status(404).json({ status: false, message: 'User record not found.' });
        else
            // console.log(user);
            return res.status(200).json(user);
    });
}

// // Delete ADmin
exports.deleteAdmin = (req, res, next) => {
    Admin.deleteOne({ _id: req.body.id }).then(
      result => {
        if (result.n > 0) {
          res.status(200).json({ message: "Deletion successful!" });
        } else {
          res.status(401).json({ message: "Not deleted!" });
        }
      }
    ).catch(error => {
      res.status(500).json({
        message: "Deletion failed!"
      })
    });
  }

//   // Update User Profile
exports.updateAdmin = (req, res, next) => {
    // console.log(req.body)
    const admin = new Admin({
        _id: req.body.id ,
        user_Role: req.body.user_Role,
        user_Permission_Code: req.body.user_Permission_Code,
        user_Email_Address: req.body.user_Email_Address,
        user_First_Name: req.body.user_First_Name,
        user_Last_Name: req.body.user_Last_Name,
        user_Mobile_Phone: req.body.user_Mobile_Phone,
        user_Office_Phone: req.body.user_Office_Phone,
    });
    Admin.updateOne({ _id: req.body.id }, admin)
        .then(result => {
            if (result.nModified > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(401).json({
                message: "No updated!"
            });
        });
}


// exports.checkAuth = (req, res, next) => {
//     let username = 'shahzeb';
//     let password = "shah123"
//     console.log("body of admin>>>", req.body);

//     if (username == req.body.username && password == req.body.password) {
//         res.status(201).json({
//             message: "Password is matched"
//         });
//     } else {
//         res.status(201).json({
//             message: "Please check username & password"
//         });
//     }
// }



  // Get users 
//   exports.getUsersProfile = (req, res, next) => {
//     User.find().then(documents => {
//       // console.log(documents);
//       res.status(200).json({
//         message: 'Users fetched!!!',
//         users: documents
//       });
//     })
//       .catch(error => {
//         res.status(500).json({
//           message: "Fetching Users failed!"
//         });
//       });
//   }


//   // Update User Profile Views
//   exports.updateUserProfileViews = (req, res, next) => {
//     const user = new User({
//       _id: req.body.id,
//     });
//     User.updateOne({ _id: req.params.id }, { $set: { userViews: req.body.userViews } }, user)
//       .then(result => {
//         if (result.n > 0) {
//           res.status(200).json({ message: "User views Update successful!" });
//         } else {
//           res.status(401).json({ message: "Not authorized!" });
//         }
//       });
//   }

//   // Update User Score
//   exports.updateUserScore = (req, res, next) => {
//     const user = new User({
//       _id: req.body.id,
//     });
//     // console.log(user);
//     User.updateOne({ _id: req.params.id }, { $set: { userScore: req.body.userScore } }, user)
//       .then(result => {
//         if (result.n > 0) {
//           res.status(200).json({ message: "User Score Update successful!" });
//         } else {
//           res.status(401).json({ message: "Not authorized!" });
//         }
//       });
//   }
