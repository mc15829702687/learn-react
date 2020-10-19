import React from "react";
import MCMain from '@/pages/main';

import store from '@/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <MCMain />
    </Provider>
  );
}
