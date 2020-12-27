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
    this.initMiddlewares();
    // this.initMysqlConnection();
    this.initRouter();
    this.initErrorHandler();
  }

  private initRouter() {
    const router: express.Router = express.Router();
    // routes.forEach((route) => {
    //   this.app.use(route.basePath, route.router);
    // });
    // this.app.use(router);
  }

  private initMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initErrorHandler() {
    // this.app.use(errorHandler);
  }

  // private initMysqlConnection() {
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