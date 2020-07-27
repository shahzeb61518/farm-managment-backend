const Site = require('../models/site-model');

exports.create = (req, res, next) => {
  let archieveRecord = "false"

  const site = new Site({
    site_Name: req.body.site_Name,
    site_ID: req.body.site_ID,
    site_CDFA_Lic: req.body.site_CDFA_Lic,
    site_Purpose: req.body.site_Purpose,
    site_Location: req.body.site_Location,
    site_Structure: req.body.site_Structure,
    archieveRecord:archieveRecord
  });
  site.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      site: {
        ...createdObject,
        id: createdObject._id
      }
    });
  }).catch(error => {
    console.log(error)
    res.status(500).json({
      message: "Creation failed!"
    })
  });
}


// Get  
exports.get = (req, res, next) => {
  Site.find().then(documents => {
    console.log(documents);
    documents= documents.filter((el) => {
      if (el.archieveRecord) {
        return el.archieveRecord != "true"
      }
    });
    res.status(200).json({
      message: 'Data fetched!!!',
      siteList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Site.deleteOne({ _id: req.body.id }).then(
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


exports.update = (req, res, next) => {
  // console.log(req.body)
  const site = new Site({
    _id: req.body.id,
    site_Name: req.body.site_Name,
    site_ID: req.body.site_ID,
    site_CDFA_Lic: req.body.site_CDFA_Lic,
    site_Purpose: req.body.site_Purpose,
    site_Location: req.body.site_Location,
    site_Structure: req.body.site_Structure,
    archieveRecord:req.body.archieveRecord

  });
  console.log(req.body)
  Site.updateOne({ _id: req.body.id }, site)
    .then(result => {
      console.log(result)

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

exports.archieved = (req, res, next) => {
 
  // console.log(req.body)
  Site.updateOne(
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