import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './screens/homepage/Homepage';
import { LoginProvider } from './context/loginContext';
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <LoginProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </LoginProvider>
  );
}

export default App;
