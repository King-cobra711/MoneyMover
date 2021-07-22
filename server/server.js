const app = require("./index.js");
const Port = 3001;

app.listen(Port, () => {
  console.log("App is running on port " + Port);
});