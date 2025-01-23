
import app from './app';
import config from './config/config';
import databaseService from './service/databaseService';

const server = app.listen(config.PORT);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        // Database Connection
        await databaseService.connect()
    } catch (err) {
        throw err
        server.close((error) => {
            if (error) {
                throw error
            }
            process.exit(1)
        })
    }
})()