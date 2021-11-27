import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  branch: string;

  @Column()
  semester: string;

  @Column('text')
  email: string;

  @Column({ select: false })
  password: string;

  // @Column('bool', { default: false })
  // confirmed: boolean;
}
