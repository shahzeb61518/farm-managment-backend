const UserList = require('../models/userList-model');

// Create User Account
exports.createUser = (req, res, next) => {
    const userList = new UserList({
        company_ID: req.body.company_ID,
        company_Permission_Code: req.body.company_Permission_Code,
        company_Tax_ID: req.body.company_Tax_ID,
        company_Name: req.body.company_Name,
        company_License_Number: req.body.company_License_Number,
        company_Address_One: req.body.company_Address_One,
        company_Address_Two: req.body.company_Address_Two,
        company_City: req.body.company_City,
        company_State: req.body.company_State,
        company_Zip: req.body.company_Zip,
    });
    userList.save().then(createdUser => {
        // console.log(createdUser);
        res.status(201).json({
            message: "Created successfully",
            userList: {
                ...createdUser,
                id: createdUser._id
            }
        });
    }).catch(error => {
        res.status(500).json({
            message: "Creation failed!"
        })
    });
}





// // Get User By Id
exports.getUserById = (req, res, next) => {
    UserList.findById(req.body.id, { "password": 0 }).then(user => {
        if (!user)
            return res.status(404).json({ status: false, message: 'User record not found.' });
        else
            // console.log(user);
            return res.status(200).json(user);
    });
}



//   // Update User Profile
exports.userUpdate = (req, res, next) => {
    const userList = new UserList({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        dob: req.body.dob,
        education: req.body.education,
        job: req.body.job,
        address: req.body.address,
    });
    userList.updateOne({ _id: req.body.id }, user)
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

