const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
const socket = require("socket.io");
const chatController = require("./backend/controllers/chat-controller");
const createChat = chatController.createChat
const workAssignmentController = require("./backend/controllers/workAssignment-controller");
const updateStatus = workAssignmentController.updateStatus

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

const server = http.createServer(app);

const io = socket(server);
io.on("connection", (socket) => {
  console.log("Socket is online!");

  // for chatting
  socket.on("chat-message", (message) => {
    // console.log("message", message);
    createChat(message).then((sentMsg) => {
      // console.log("sentMsg", sentMsg);
      // const receivers = msg.owner + "//" + msg.buyer;
      // msg.user_id = sentMsg.user_id;
      io.sockets.emit("chat-message", {
        message,
        // senderId: sentMsg.senderId,
        // recieverId: sentMsg.recieverId,
      });
    });
  });


  // for updating assigne work status
  socket.on("task-status", (checkStatus) => {
    // console.log("status", checkStatus);
    updateStatus(checkStatus).then((status) => {
      // console.log("status", status);
      io.sockets.emit("task-status", {
        status,
      });
    });
  });

  // for getting assign work real time
  socket.on("realtime-assignmentwrok", (checkTask) => {
    console.log("status", checkTask);
    if (checkTask.success === "successfully-done") {
      io.sockets.emit("realtime-assignmentwrok", {
        checkStatus: "get-assign-task",
      });
    }
  });





});


server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
