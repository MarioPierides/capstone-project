import Image from 'next/image';
import styled from 'styled-components';

import stageImage from '../public/assets/images/background-bild.png';

export default function Stage() {
  return (
    <StyledStage>
      <Image src={stageImage} alt="Stage Bild" objectFit={'contain'} />
    </StyledStage>
  );
}

const StyledStage = styled.div``;
