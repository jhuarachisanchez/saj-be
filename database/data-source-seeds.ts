import { DataSource } from 'typeorm';
import { dataSourceOptionsSeeds } from './data-source-options';

const dataSource = new DataSource(dataSourceOptionsSeeds)
export default dataSource;