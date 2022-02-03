const printc = (content) => {
  console.log("\tTASKS");

  content.forEach((element) => {
    const progressSymbol = element.progress !== "Done" ? "[x]" : " |";
    console.log(`
    |\t${element.task}
    |\t${element.description}
   ${progressSymbol}\t${element.progress}
    |\t---------------------------------------------------------------
    |\t${element.created_time}
    `);
  });
};

module.exports = { printc };
