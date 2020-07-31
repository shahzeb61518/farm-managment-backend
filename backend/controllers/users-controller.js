const Users = require('../models/users-model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create User Account
exports.create = (req, res, next) => {
  let date = new Date();
  date.toString;
  let archieveRecord = "false"

  // bcrypt.hash(req.body.user_Password, 10).then(hash => {
  // console.log("dataaaa", req.body)
  let companyName;
 
  companyName = req.body.companyName
  let email = req.body.user_Email_Address
  email = email.toLowerCase();
  const users = new Users({
    user_Role: req.body.user_Permission_Code,
    user_Company_ID: req.body.user_Company_ID,
    user_Job_Title: req.body.user_Job_Title,
    user_Permission_Code: req.body.user_Permission_Code,
    user_Email_Address: email,
    user_First_Name: req.body.user_First_Name,
    user_Last_Name: req.body.user_Last_Name,
    user_Mobile_Phone: req.body.user_Mobile_Phone,
    user_Office_Phone: req.body.user_Office_Phone,
    user_Password: req.body.user_Password,
    joinDate: date,
    archieveRecord: archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId,
    companyName: companyName,
  });
  users.save()
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
  // });
}

// User login
exports.login = (req, res, next) => {
  let fetchedUser;
  let companyName
  let email = req.body.user_Email_Address
  email = email.toLowerCase();
  Users.findOne({ user_Email_Address: email })
    .then(user => {
      if (!user) {
        return res.status(200).json({
          message: "Invalid email or password"
        });
      }
      fetchedUser = user;
      // return bcrypt.compare(req.body.user_Password, user.user_Password);
      return req.body.user_Password === user.user_Password
    })
    .then(result => {
      if (!result) {
        return res.status(200).json({
          message: "Invalid email or password"
        });
      }
      console.log("fetchedUser>>>>", fetchedUser)
      if (fetchedUser.companyName){
        companyName = fetchedUser.companyName
        companyId = fetchedUser.companyId
      }

      const token = jwt.sign(
        {
          user_Email_Address: fetchedUser.user_Email_Address,
          userId: fetchedUser._id,
          namef: fetchedUser.user_First_Name,
          namel: fetchedUser.user_Last_Name,
          role: fetchedUser.user_Role,
          companyName: fetchedUser.companyName,
          companyId: fetchedUser.companyId
        },
        "secret_this_should_be_longer",
        { expiresIn: "10h" }
      );
      res.status(200).json({
        token: token,
        role: fetchedUser.user_Role,
        expiresIn: 360000,
        userId: fetchedUser._id,
        namef: fetchedUser.user_First_Name,
        namel: fetchedUser.user_Last_Name,
        email: fetchedUser.user_Email_Address,
        companyName: fetchedUser.companyName,
        companyId: fetchedUser.companyId
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}


// Get user 
exports.get = (req, res, next) => {
  Users.find({ user_Role: { $ne: "superadmin" } }).populate('companyObjectId').then(documents => {
    // console.log(documents);
    documents = documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true" && el.companyId === req.body.id
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      usersList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

exports.getForSuperAdmin = (req, res, next) => {
  Users.find({ user_Role: { $ne: "superadmin" } })
    .populate('companyObjectId').then(documents => {
      // console.log(documents);
      documents = documents.filter((el) => {
        if (el.archieveRecord) {
          return el.archieveRecord != "true" && el.user_Role === "admin"
        }
      });
      res.status(200).json({
        message: 'Data fetched!!!',
        usersList: documents
      });
    }).catch(error => {
      res.status(500).json({
        message: "Getting data failed!"
      })
    });
}

// // Delete user
exports.delete = (req, res, next) => {
  Users.deleteOne({ _id: req.body.id }).then(
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

//   // Update User
exports.update = (req, res, next) => {
  // console.log(req.body)
  // bcrypt.hash(req.body.user_Password, 10).then(hash => {
  const users = new Users({
    _id: req.body.id,
    user_Role: req.body.user_Permission_Code,
    user_Company_ID: req.body.user_Company_ID,
    user_Job_Title: req.body.user_Job_Title,
    user_Permission_Code: req.body.user_Permission_Code,
    user_Email_Address: req.body.user_Email_Address,
    user_First_Name: req.body.user_First_Name,
    user_Last_Name: req.body.user_Last_Name,
    user_Mobile_Phone: req.body.user_Mobile_Phone,
    user_Office_Phone: req.body.user_Office_Phone,
    user_Password: req.body.user_Password,
    archieveRecord: req.body.archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId,
  });
  Users.updateOne({ _id: req.body.id }, users)
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
  // });
}

// update super admin
exports.updateSuperAdmin = (req, res, next) => {
  // bcrypt.hash(req.body.user_Password, 10).then(hash => {
  const users = new Users({
    _id: req.body.id,
    user_Email_Address: req.body.user_Email_Address,
    user_Password: req.body.user_Password,
  });
  Users.updateOne({ _id: req.body.id }, users)
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
  // });
}



// Get User By Id
exports.getById = (req, res, next) => {
  Users.findById(req.body.id).then(user => {
    if (!user)
      return res.status(404).json({ status: false, message: 'User record not found.' });
    else
      // console.log(user);
      return res.status(200).json(user);
  });
}

exports.archieved = (req, res, next) => {
  Users.updateOne(
    { _id: req.body.id },
    { $set: { "archieveRecord": req.body.archieveRecord } })
    .then(result => {
      // console.log(result)
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