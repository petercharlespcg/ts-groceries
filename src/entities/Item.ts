import { GroceryList } from './GroceryList';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

    @ManyToOne(type => GroceryList, groceryList => groceryList.items)
    grocery_list: GroceryList;
}