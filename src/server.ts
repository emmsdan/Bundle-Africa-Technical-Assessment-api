import { app } from "./app";
const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
