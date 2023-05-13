import firstBannerPath from '../../../../assets/banners/system.png';
import secondBannerPath from '../../../../assets/banners/mentz.png';
import { FunctionComponent } from 'react';

export const TopBanners: FunctionComponent = () => (
  <div className={'flex flex-row gap-3'}>
    <div>
      <img alt="firmbee company banner" src={firstBannerPath} />
    </div>
    <div>
      <img alt="registrar's office banner" src={secondBannerPath} />
    </div>
  </div>
);
