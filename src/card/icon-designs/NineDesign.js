import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconColumn from "../IconColumn";
import { suits } from "../../cardDeck/constants";

const OuterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20% 5%;
`;

const InnerContainer = styled.div`
  width: 33.3%;
  height: 100%;
`;

const NineDesign = ({ suit }) => (
  <OuterContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true, true]} />
    </InnerContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false]} />
    </InnerContainer>
    <InnerContainer>
      <IconColumn suit={suit} layout={[false, false, true, true]} />
    </InnerContainer>
  </OuterContainer>
);

NineDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default NineDesign;
