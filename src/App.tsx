import SearchBar from './features/SearchBar/SearchBar';
import Menu from './features/Menu/Menu';

function App() {
  return (
    <div className={'flex flex-col'}>
      <Menu />
      <SearchBar />
    </div>
  );
}

export default App;
