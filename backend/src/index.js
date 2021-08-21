
const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const db = require('./db/models');
const config = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');


const MAIN INPUTSRoutes = require('./routes/MAIN INPUTS');

const JOB INPUTSRoutes = require('./routes/JOB INPUTS');

const usersRoutes = require('./routes/users');

const Openning ValueRoutes = require('./routes/Openning Value');

const Application sizeRoutes = require('./routes/Application size');


const options = {
  definition: {
    openapi: "3.0.0",
      info: {
      version: "1.0.0",
      title: "App entities Management Template Backend",
      description: "Flatlogic user management backend allows you to create a fully workable data management (CRUD) application. " +
      "You can perform all major operations with your entities - create, delete and distribute roles. You can either integrate this template into existing applications or create a new one based on it.",
    },
    servers: [
      {
        url: config.swaggerUrl,
        description: "Development server",
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
      responses: {
        UnauthorizedError: {
          description: "Access token is missing or invalid"
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', function (req, res, next) {
    swaggerUI.host = req.get('host');
    next()
  }, swaggerUI.serve, swaggerUI.setup(specs))

app.use(cors({origin: true}));
require('./auth/auth');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);


app.use('/api/MAIN INPUTS', passport.authenticate('jwt', {session: false}), MAIN INPUTSRoutes);

app.use('/api/JOB INPUTS', passport.authenticate('jwt', {session: false}), JOB INPUTSRoutes);

app.use('/api/users', passport.authenticate('jwt', {session: false}), usersRoutes);

app.use('/api/Openning Value', passport.authenticate('jwt', {session: false}), Openning ValueRoutes);

app.use('/api/Application size', passport.authenticate('jwt', {session: false}), Application sizeRoutes);


const publicDir = path.join(
  __dirname,
  '../../frontend/build',
);

if (fs.existsSync(publicDir)) {
  app.use('/', express.static(publicDir));

  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(publicDir, 'index.html'),
    );
  });
}

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

module.exports = app;
