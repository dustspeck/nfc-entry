import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import MainApp from './src/MainApp';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <MainApp />
    </SafeAreaView>
  );
};

export default App;
