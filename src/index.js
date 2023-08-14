import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './Theme/theme';

import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications';
import { store } from './Contexto/store';
import { Route,BrowserRouter,Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
    <Provider store={store}>
      

                <div>
                    <ToastProvider
                                   autoDismiss={true}
                                   autoDismissTimeout={3000}
                                   newestOnTop={true}
                                   placement={'top-center'}
                             > 
                             
                            
                                           <App></App>
                                 
                             
                             
                             </ToastProvider>
                </div>
               
            </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

