import React, { useContext } from 'react';
import { View } from 'react-native';
import AuthContext from '../contexts/auth'; //Remove later

import { CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView,  DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import CreateQuiz from '../screens/CreateQuiz';
import PlayQuiz from '../screens/PlayQuiz';


const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();


function HomePage() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Feed" component={Feed} />
            <AppStack.Screen name="PlayQuiz" component={PlayQuiz} options={{ headerShown: false }}/>
        </AppStack.Navigator>
    );
}


// Put this on components later
function CustomDrawerContent(props) {
    const { signOut } = useContext(AuthContext);
    const navigation = props.navigation;
    
    function signOutHandler() {
        console.log('saindo');
        
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'CreateQuiz' }
                ],
            })
        );
        
        signOut();
    }

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />  
            <DrawerItem label="Logout" onPress={ signOutHandler } />
        </DrawerContentScrollView>
    );
}

export default function AppRoutes(){
    return (
        <AppDrawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <AppDrawer.Screen name="HomePage" component={HomePage}/>
            <AppDrawer.Screen name="CreateQuiz" component={CreateQuiz} />
        </AppDrawer.Navigator>
    );
}