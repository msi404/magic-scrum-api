import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  title: string
  @Column()
  description: string
  @Column()
  date: string
  @Column()
  status: string
}
