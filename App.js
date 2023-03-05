import *as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import MainStack from './NavigationStack/MainStack'


const App = () => {

return(
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
    
  );
};

export default App;
//trzeba exportowac ten komponent