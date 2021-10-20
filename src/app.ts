import express, { Application } from "express";
import fileUpload from "express-fileupload";
import routes from "./routes";

// Boot up express
export const app: Application = express();
app.use(fileUpload({ useTempFiles: true }));

routes(app);

const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
