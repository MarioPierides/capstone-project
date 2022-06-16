import styled from 'styled-components';

function Intro() {
  return (
    <StyledIntro>
      <Paragraph>
        Puppy Date, ist eine App speziell für Hundehalter und ihre Vierbeiner.
        Hier könnt ihr euch miteinander vernetzen, zusammen Gassi gehen und zu
        gemeinsamen Spiel-, Spaß- und Sportaktivitäten treffen, oder
        verschiedene Trainingseinheiten abstimmen.
      </Paragraph>
      <Paragraph>
        Erstellt direkt und einfach euren eigenen Treffpunkt, mit Datum und
        Uhrzeit, wählt eure Lieblingsorte rund um Hamburg aus, bestimmt die
        Aktivität und die Altersgruppe der gewünschten Hunde. Gestaltet euer
        eigenes Date oder nehmt einfach am nächsten Date teil.
      </Paragraph>
      <Paragraph>
        Hier habt ihr und eure Vierbeiner täglich die Chance, neue Spazier- und
        Spielfreunde oder Trainingspartner kennenzulernen, um gemeinsam Spaß zu
        haben. Erkundet neue Ausflugsziele, bereichert euer Leben und das eurer
        geliebten Fellnasen.
      </Paragraph>
      <Paragraph>Vereinbart hier regelmäßig neue Dates, viel Spaß!</Paragraph>
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
