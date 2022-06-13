import styled from 'styled-components';

function Intro() {
  return (
    <StyledIntro>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At
      </Paragraph>
    </StyledIntro>
  );
}

export default Intro;

const StyledIntro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;

  p + p {
    margin-top: 8px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
`;
