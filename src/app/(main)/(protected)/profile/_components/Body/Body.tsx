import Content from '../Content/Content';
import Info from '../Info/Info';
import * as SC from './Body.style';

const Body = () => {
  return (
    <SC.Container>
      <Content />
      <Info />
    </SC.Container>
  );
};

export default Body;
