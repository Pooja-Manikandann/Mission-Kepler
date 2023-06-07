
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './screens/homepage/Homepage';
import { LoginProvider } from './context/loginContext';
import { AppProvider } from "./context/appContext";
import { TimeProvider } from './context/timeContext';

function App() {
  return (
    <LoginProvider>
      <AppProvider>
        <TimeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
        </TimeProvider>
      </AppProvider>
    </LoginProvider>
  );
}

export default App;
