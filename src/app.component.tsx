import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { AppRouter } from './router';
import { theme } from './theme';

const App:React.FC = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  useEffect(() => {
    setupRootStore().then(setRootStore);
  }, []);

  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
