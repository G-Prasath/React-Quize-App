import Quize from './components/quize';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Output from './components/output';
import ErrorBoundary from './components/ErrorBoundery';
import './App.css';

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/quize' element={<Quize />} />
            <Route path='/output' element={<Output />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
