import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })
console.log(
  process.env.DEFAULT_USER_PASS,
  'process.env.DEFAULT_USER_PASS index5'
)
console.log(process.env.DATABASE_URL, 'process.env.DEFAULT_USER_PASS index5')
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
}
