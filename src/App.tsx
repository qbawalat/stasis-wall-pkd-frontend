import Menu from './features/Menu/Menu';
import MainPanel from './features/MainPanel/MainPanel';
import Footer from './features/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Menu />
      <div className={'mt-32'}>
        <MainPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
