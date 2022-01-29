import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { StyledLayout } from './styles';

function App() {
  return (
    <StyledLayout>
      <Header />
      <Main />
      <Footer />
    </StyledLayout>
  );
}

export default App;
