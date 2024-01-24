import { Request, ResponseToolkit } from '@hapi/hapi';

const requestLogger = (request: Request, h: ResponseToolkit) => {
    console.log(`Method: ${request.method}, Path: ${request.path}, Time: ${new Date().toISOString()}`);
    return h.continue;
};

export { requestLogger };
