import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOption: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 5432,
    database: 'db_loja',
    entities: ['dist/**/*.entity.{js,ts}'],
}

const dataSource = new DataSource(dataSourceOption);

export default dataSource;