import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import {NativeBaseProvider} from "native-base";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <ActionSheetProvider>
            <AppNavigator />
          </ActionSheetProvider>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
