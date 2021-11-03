require("dotenv").config();
const server = require("./api/server.js");
const colors = require("colors");
colors.enable();

const port = process.env.PORT || 5000;

server.use(express.json());

server.listen(port, () =>
  console.log(`\n** Server listening on port ${port} **\n`.rainbow)
);
