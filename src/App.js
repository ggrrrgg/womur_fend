import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Container>
     
    </div>
  );
}

export default App;
