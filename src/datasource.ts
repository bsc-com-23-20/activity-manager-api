import { DataSource } from 'typeorm';
import { User } from './entities/users';
import { Task } from './entities/tasks';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'activitymanager',
        entities: [
            Task,User
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

