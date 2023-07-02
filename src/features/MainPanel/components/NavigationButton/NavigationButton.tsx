import { Button } from '../../../../common/components';
import { scrollToTop } from '../../../../common/utils';

const NavigationButton = () => <Button label="Wróć do wyszukiwarki PKD" onClick={scrollToTop} />;

export default NavigationButton;
