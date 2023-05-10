import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './screens/homepage/Homepage';
import { Provider } from './context/loginContext';
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <Provider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
