import React, { FC } from 'react';
import { LogBox } from 'react-native';
import Route from './src/routes';
import { UserDataContextProvider } from './src/context';
import Toast from 'react-native-toast-message';
import { CommonLoaderProvider } from './src/components/CommonLoader/commonLoader';
import { CommonAlertProvider } from './src/components/CommonAlertModal/commonAlertModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: FC = () => {
  // Hiding warning logs - only used in debug mode
  LogBox.ignoreLogs( [ 'Warning: ...' ] );
  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView>
      <UserDataContextProvider>
        <CommonLoaderProvider>
          <CommonAlertProvider>
            <Route />
            <Toast />
          </CommonAlertProvider>
        </CommonLoaderProvider>
      </UserDataContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
