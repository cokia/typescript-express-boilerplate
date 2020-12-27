import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import { errorHandler } from './middlewares';
// import routes from './routes';
import config from './config';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    // this.connectMongoDB();
    this.initializeRouter();
    this.initializeErrorhandlers();
  }

  private initializeRouter() {
    const router: express.Router = express.Router();
    // routes.forEach((route) => {
    //   this.app.use(route.basePath, route.router);
    // });
    // this.app.use(router);
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeErrorhandlers() {
    // this.app.use(errorHandler);
  }

  // private connectMongoDB() {
  //   const { mongoUri } = config;
  //   const mongooseOption = {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   };
  //   mongoose.connect(mongoUri, mongooseOption);
  // }
}

export default App;