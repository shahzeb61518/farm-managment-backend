const Chat = require('../models/chat-model');


exports.createChat = (messageObj) => {
  console.log('messageObj', messageObj);

  return new Promise((resolve, reject) => {
    let { message, senderId, recieverId, date, read } = messageObj
    // console.log('senderId', senderId);
    // console.log('recieverId', recieverId);
    const threadId = senderId + "//" + recieverId;
    const chat = new Chat({
      message: message,
      senderId, senderId,
      recieverId: recieverId,
      threadId: threadId,
      date,
      read: read
    });
    chat.save().then(
      msgCreated => {
        console.log("Msg saved", msgCreated);
        resolve(msgCreated);
      })
      .catch(msgError => {
        reject(msgError);
        console.log('chatMessage saving error', msgError);
      })
  })

}


exports.create = (req, res, next) => {
  console.log("req.body>>chat>", req.body);

  let archieveRecord = "false"

  const chat = new Chat({
    role_Name: req.body.role_Name,
    archieveRecord: archieveRecord,
    companyObjectId: req.body.companyId,
    companyId: req.body.companyId
  });
  chat.save().then(createdObject => {
    console.log(createdObject);
    res.status(201).json({
      message: "Created successfully",
      chat: {
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
  // console.log("senderId", req.body.id);

  Chat.find().then(documents => {
    // console.log(documents);
    // documents = documents.filter((el) => {
    //   if (el.senderId) {
    //     return el.senderId === req.body.senderId && el.recieverId === req.body.receiverId
    //   }
    // });
    console.log(documents);
    res.status(200).json({
      message: 'Data fetched!!!',
      chatList: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting data failed!"
    })
  });
}

// // Delete 
exports.delete = (req, res, next) => {
  Chat.deleteOne({ _id: req.body.id }).then(
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
  console.log(req.body)
  const chat = new Chat({
    threadId: req.body.id,
    read: "true"
  });
  console.log(req.body)
  // Chat.updateOne({ threadId: req.body.id }, chat)
  Chat.updateMany({ threadId: req.body.id }, { $set: { read: "true!" } })
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
  Chat.updateOne(
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