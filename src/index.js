import 'dotenv/config';
import {connectDB} from './db.js'
import app from './app.js'

connectDB()

app.listen(3001)
console.log('app running on port', 3001)

