require("dotenv").config();

const { fetchRecentTasks } = require("./src/drivers/tasksboard");
const { printc } = require("./src/util");

fetchRecentTasks().then(printc).catch(console.error);
