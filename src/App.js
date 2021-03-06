import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Auth from './components/Auth';
import GuestRoute from './routes/GuestRoute';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/SignUp';

import createTheme from './theme';

import {useSettings} from './context/SettingsContext';
import './mock';

function App() {

    const {settings} = useSettings();

    return (
        <ThemeProvider theme={createTheme(settings)}>
            <BrowserRouter>
                <Auth>
                    <Routes>
                        <GuestRoute path="/sign-in" element={<SignIn/>}/>
                        <GuestRoute path="/sign-up" element={<SignUp/>}/>
                        <Route path="//*" element={<Home/>}/>
                    </Routes>
                </Auth>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
