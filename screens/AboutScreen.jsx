import MainLayout from "../layouts/MainLayout";
import { Button, Text } from "react-native";

export default function AboutScreen({ navigation }) {

    var today = new Date;
    var day = today.getDate();
    var month = today.getMonth() + 1; // January is 0, so we add 1
    var year = today.getFullYear();
    var formattedDate = month + '/' + day + '/' + year;

    return (
        <MainLayout>
            <Text>App Name: Incredible ToDo App</Text>
            <Text>My Name: Hitanshu Darji</Text>
            <Text>Today's date is {formattedDate}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    )
};