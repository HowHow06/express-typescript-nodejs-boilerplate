import morgan, { StreamOptions } from 'morgan';
import logger from '../utils/logger';

const stream: StreamOptions = {
  write: message => logger.info(message),
};

// const getIpFormat = () =>
//   config.env === 'production' ? ':remote-addr - ' : '';
// const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
// const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

// const successHandler = morgan(successResponseFormat, {
//   skip: (req, res) => res.statusCode >= 400,
//   stream: { write: message => logger.info(message.trim()) },
// });

// const errorHandler = morgan(errorResponseFormat, {
//   skip: (req, res) => res.statusCode < 400,
//   stream: { write: message => logger.error(message.trim()) },
// });

// Build the morgan middleware
const morganMiddleware = morgan('combined', { stream: stream });

export default morganMiddleware;
