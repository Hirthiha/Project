import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login";
import DetailsScreen from "./src/screens/detailsScreen";

const App = ()=>{

    const Stack = createNativeStackNavigator();
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown:false}}/>

          
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App