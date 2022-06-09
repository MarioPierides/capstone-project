import styledComponents from 'styled-components';

import Title from '../components/Header';
import Stage from '../components/Stage';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Main>
      <Title>Puppy Date</Title>
      <Stage />
      <Navbar />
    </Main>
  );
}

const Main = styledComponents.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relativ;
`;
