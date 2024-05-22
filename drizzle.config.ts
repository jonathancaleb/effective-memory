import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database url');
}

// export default {
//   schema: './src/lib/supabase/schema.ts',
//   out: './migrations',
//   driver: 'pg',
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL || '',
//   },
// } satisfies Config;
export default defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    //driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    },
    out: './migrations',
    schema: './src/lib/supabase/schema.ts'
})