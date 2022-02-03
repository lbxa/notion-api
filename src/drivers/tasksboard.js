const { Client } = require("@notionhq/client");
const moment = require("moment");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.DATABASE_ID;

const fetchRecentTasks = async (
  dateFilter = {
    past_month: {},
    is_not_empty: true,
  }
) => {
  const filterConfig = {
    property: "When",
    date: dateFilter,
  };

  const res = await notion.databases.query({
    database_id: databaseId,
    filter: filterConfig,
  });

  return res.results.map(({ created_time, properties }) => {
    const { Notes, Progress, What } = { ...properties };

    let taskString = "";
    What.title.map((taskSubstring) => {
      taskString += taskSubstring.plain_text;
    });

    let descriptionString = "";
    Notes.rich_text.map((descriptionSubstring) => {
      descriptionString += descriptionSubstring.plain_text;
    });

    return {
      created_time: moment(created_time).fromNow(),
      progress: Progress.select ? Progress.select.name : "No Progress",
      task: taskString,
      description: descriptionString,
    };
  });
};

module.exports = { fetchRecentTasks };
