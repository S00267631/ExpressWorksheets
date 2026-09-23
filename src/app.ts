import express, {Application, Request, Response} from "express" ;
import carRoutes from './routes/cars';
import { env } from "./config/env";
import { connectDB } from "./config/database";

const port = env.port

const app: Application = express();
  
app.use(express.json());
app.use('/api/v1/cars', carRoutes);
app.use((req,_res,next) => {
    console.log(`Request received: ${req.method} ${req.originalUrl}`);
    next();
});
app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from da dwifta"
    });
});

app.listen(port, () => {
    console.log("Server is running on port", port);
    });
    const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  };

startServer();
    
//8IS3HE76dW2z6C1i s00267631_db_user