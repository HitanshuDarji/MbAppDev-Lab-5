import React from 'react';
import {
    Pressable,
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

function ToDoList({ tasks }) {
    return(
        <ScrollView>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    {tasks.map((task, index) => {
                        return (
                            <Text key={index} style={styles.taskText}>{task}</Text>
                        );
                    })}
                </View>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    }
});

export default ToDoList;