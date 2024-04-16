import express from 'express';
import { handleError } from '../utils/errorHandler';

// error handler
const errorHandler: express.ErrorRequestHandler = (err, _req, res) => {
  handleError(err, res);
};

export default errorHandler;
