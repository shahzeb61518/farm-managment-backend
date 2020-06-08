const Company = require('../models/companyList-model');

// Create a Company
exports.createCompany = (req, res, next) => {
  const company = new Company({
    company_Tax_ID: req.body.company_Tax_ID,
    company_Name: req.body.company_Name,
    company_License_Number: req.body.company_License_Number,
    company_Address_One: req.body.company_Address_One,
    company_Address_Two: req.body.company_Address_Two,
    company_City: req.body.company_City,
    company_State: req.body.company_State,
    company_Zip: req.body.company_Zip,
  });
  company.save().then(createdCompany => {
    console.log(createdCompany);
    res.status(201).json({
      message: "Created successfully",
      company: {
        ...createdCompany,
        id: createdCompany._id
      }
    });
  }).catch(error => {
    console.log(error)
    res.status(500).json({
      message: "Creation failed!"
    })
  });
}


// Get Company 
exports.getCompanyList = (req, res, next) => {
  Company.find().then(documents => {
    // console.log(documents);
    res.status(200).json({
      message: 'Data fetched!!!',
      CompanyList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete Company
exports.deleteComapny = (req, res, next) => {
  Company.deleteOne({ _id: req.body.id }).then(
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
