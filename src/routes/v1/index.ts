import express from 'express';
import healthcheckRoute from './healthcheckRoute';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: healthcheckRoute,
  },
];

// // routes available only in development mode
// const devRoutes = [
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

// /* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach(route => {
//     router.use(route.path, route.route);
//   });
// }

export default router;
