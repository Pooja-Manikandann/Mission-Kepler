import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ShowTime from './pages/showTime/ShowTime';
import Layout from './containers/layout/Layout';
import UserContextProvider from './context/User.context';
import { APP_PATH } from './constants/index';
import AllMovies from './pages/allMovies/AllMovies';
import React, { useContext } from 'react';
import { PageNotFound } from './pages/pageNotFound/PageNotFound';
import CustomLoader from './components/CustomLoader/CustomLoader';
import useLoader from './hooks/useLoader';
import LoaderContextProvider, { LoaderContext } from './context/Loader.context';

function App() {
    const { HOME_PATH, LOGIN_PATH, SHOW_TIME_PATH, ALL_MOVIES } = APP_PATH;
    const routes = useRoutes([
        { path: HOME_PATH.PATH, element: <Home /> },
        { path: LOGIN_PATH.PATH, element: <Login /> },
        {
            path: HOME_PATH.PATH,
            element: <ProtectedRoute />,
            children: [{ path: SHOW_TIME_PATH.PATH, element: <ShowTime /> }],
        },
        { path: ALL_MOVIES.PATH, element: <AllMovies /> },
        { path: '*', element: <PageNotFound /> },
    ]);
    return (
        <UserContextProvider>
            <LoaderContextProvider>
                <Layout>{routes}</Layout>
            </LoaderContextProvider>
        </UserContextProvider>
    );
}

export default App;
