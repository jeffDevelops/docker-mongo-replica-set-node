import * as express from "express";
import { json, urlencoded } from "body-parser";
import { connect } from "mongoose";

// console.log(process.env);

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

console.log(process.env.MONGO_URL);

connect(`${process.env.MONGO_URL}`)
  .then(cnxn => {
    console.log("\n\n\n Connected to MongoDB \n\n\n");
    app.listen(PORT, () =>
      console.log(
        `\n\n\n Express app started in ${
          process.env.NODE_ENV ? process.env.NODE_ENV : "development"
        } environment at ${PORT}\n\n\n`
      )
    );
  })
  .catch(error => console.error(error));

export default app;
