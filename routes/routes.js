const userRoutes = require('./users');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('Welcome to the node-express-api');
  });


  userRoutes(app, fs);
};


module.exports = appRouter;