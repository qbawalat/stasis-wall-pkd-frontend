import { FunctionComponent } from 'react';
import Description from './components/Description/Description';
import SearchBar from './components/SearchBar/SearchBar';

const MainPanel: FunctionComponent = () => {
  return (
    <div className={'flex flex-col items-center gap-8'}>
      <div>
        <Description />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPanel;
