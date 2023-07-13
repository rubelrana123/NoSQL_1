// eslint-disable-next-line no-console
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'
 

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`🛢 Database connection successful`)
      
    app.listen(config.port, () => {
      logger.info(`Server is  listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error(`Failed to connect database`, err)
  }
}

main()
