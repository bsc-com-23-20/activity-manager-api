import { DataSource } from 'typeorm';
import { User } from './entities/users';
import { Task } from './entities/tasks';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'sql7.freemysqlhosting.net',
        port: 3306,
        username: 'sql7634974',
        password: 'pelp74SSKf',
        database: 'sql7634974',
        entities: [
            Task,User
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

