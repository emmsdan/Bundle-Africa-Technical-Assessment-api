import express, { Application } from "express";
import fileUpload from "express-fileupload";
import routes from "./routes";

// Boot up express
export const app: Application = express();
app.use(fileUpload({ useTempFiles: true }));

routes(app);
