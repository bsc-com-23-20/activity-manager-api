import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  taskname: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @Column()
  timeToBeReminded: Date;

  @Column()
  group: string;

  @Column()
  colorIcon: string;

}