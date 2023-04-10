import Menu from './features/Menu/Menu';
import MainPanel from './features/MainPanel/MainPanel';

function App() {
  return (
    <div className='flex flex-col'>
      <Menu />
      <div className={'mt-32'}>
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
