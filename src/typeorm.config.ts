import { ConnectionOptions, DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.POSTGRES_USER ?? 'postgres';
const password = process.env.POSTGRES_PASSWORD ?? '12345678';
const database = process.env.POSTGRES_DB ?? 'postgres';
const host = process.env.PG_HOST ?? 'localhost';
const port = +(process.env.PG_PORT ?? 5432);

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: [__dirname + '/**/**/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};

export default new DataSource(connectionOptions);
