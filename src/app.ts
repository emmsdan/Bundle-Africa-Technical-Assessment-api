import express, { Application } from "express";
import fileUpload from "express-fileupload";
import routes from "./routes";
import cors from "cors";
// Boot up express
export const app: Application = express();
app.use(fileUpload({ useTempFiles: true }));
app.use(cors());

routes(app);
