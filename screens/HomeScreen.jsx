import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {

    const [toDos, setTodos] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    const addTask  = (task) => {
        setTodos([...toDos, task])
    }

    return (
        <MainLayout>
            <ToDoList tasks={toDos} />
            <ToDoForm addTask={addTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>
    );
};