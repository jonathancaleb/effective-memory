import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv'
import * as schema from '../../../migrations/schema';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
    console.log('no database url');
}

// Create a new postgres client using the DATABASE_URL environment variable
const client = postgres(process.env.DATABASE_URL as string);
// Create a new drizzle instance using the postgres client and the imported schema
const db = drizzle(client, { schema });
const migrateDb = async () => {
    try {
        console.log('migrating client');
        await migrateDb, { migrationsFolder: 'migrations'}
        console.log('succesfuly migrated');
    } catch (error) {
        console.log('migrating error')
    }
};
migrateDb();
export default db; 