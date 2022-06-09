import Image from 'next/image';
import styledComponents from 'styled-components';

import stageImage from '../public/assets/images/background-bild.png';

export default function Stage() {
  return (
    <StageWrapper>
      <Image src={stageImage} alt="Stage Bild" objectFit={'contain'} />
    </StageWrapper>
  );
}

const StageWrapper = styledComponents.div`
  height: 'auto',
  padding: '0 20px'
  width: '100',
`;
