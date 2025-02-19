import React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';

function ToDoForm({addTask}) {

    const [task, setTask] = useState('');

    const handleSubmit = () => {
        addTask(task);
        setTask('');
    };

    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => {setTask(text)}}
                value={task}
            />
            <Button onPress={handleSubmit} title="Add" />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    }
});

export default ToDoForm;