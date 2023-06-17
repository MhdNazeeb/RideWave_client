import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App.jsx'
import './index.css'
import { LocationProvider } from './context/LocationContext';
import { TripProvider } from './context/TripContext';
let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocationProvider>
      <TripProvider>
      <PersistGate persistor={persistor}>
      <App />
     
     </PersistGate>
     </TripProvider>
     </LocationProvider>
    </Provider>
  </React.StrictMode>,
)
