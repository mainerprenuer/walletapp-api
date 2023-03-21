import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name'  })
    lastname: string;

    @Column()
    usename: string;

    @Column({ unique: true })
    username: string;

    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at: number; 

}
