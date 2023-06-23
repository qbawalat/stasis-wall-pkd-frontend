import Menu from './features/Menu/Menu';
import MainPanel from './features/MainPanel/MainPanel';

function App() {
  return (
    <div className='flex flex-col p-6'>
      <Menu />
      <div className={'mt-32'}>
        <MainPanel />
      </div>
    </div>
  );
}

export default App;