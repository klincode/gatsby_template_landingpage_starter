import React from "react";
import styled from "styled-components";
import { Section, Container } from "../global";

const Map = () => {
  return (
    <Section id='map'>
      <MapWrapper src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Lublin+(Nazwa%20firmy)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></MapWrapper>
    </Section>
  );
};
export default Map;

const MapWrapper = styled.iframe`
  border: 0;
  width: 100%;
`;
