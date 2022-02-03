# notion-api

API which will connect my personal AI assistant to my Notion workflow

---

Setup is very easy surprisingly. All you need is the notion API key which you can grab [here](https://developers.notion.com/docs/getting-started) and the database ID which is retrieved from its URL (everything between the first / and the first query).

```javascript
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.DATABASE_ID;
```

The [Notion API Reference](https://developers.notion.com/reference/intro) will be very useful from this point onwards. Make sure to query a database with an empty filter term to retrieve all of its contents. Each database needs to be queried using its appropriate ID individually.
