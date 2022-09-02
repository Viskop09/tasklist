import { Meta, Story } from '@storybook/angular';

import { TodoPage } from 'src/app/todo/todo.page'; 
import { addTodo, removeTodo, loadTodos } from '../app/state/todos/todo.actions';

export default {
    title: 'Todo',
    component: addTodo,
} as Meta;

export const Primary: Story = () => ({
    props:{
        label: 'addTodo',
        primary: true,
    }
});

Primary.storyName = 'add todo';