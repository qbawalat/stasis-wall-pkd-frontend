import { FunctionComponent } from 'react';
import PageDescription from './components/Description/PageDescription';
import SearchBar from './components/SearchBar/SearchBar';

const MainPanel: FunctionComponent = () => {
  return (
    <div className={'flex flex-col items-center gap-8'}>
      <div>
        <PageDescription />
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPanel;
