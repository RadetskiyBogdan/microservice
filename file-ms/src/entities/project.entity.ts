import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
} from 'typeorm';
import { MonthProjectHours } from './hours.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    rate: number;

    @Column()
    budget: number;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', nullable: true })
    public updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp without time zone', name: 'deleted_at', nullable: true })
    public deletedAt: Date;

    @OneToMany(() => MonthProjectHours, (monthProjectHour) => monthProjectHour.project)
    public monthProjectHours: MonthProjectHours[];
}
