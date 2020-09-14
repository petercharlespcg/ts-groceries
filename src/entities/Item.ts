import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class Item extends BaseEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text'
    })
    name: string;

    @CreateDateColumn({
        type: 'timestamp'
    })
    created: string;
}