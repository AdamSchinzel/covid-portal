import styled, { css } from "styled-components";

const Heading = styled.h2<{ main?: boolean }>`
  font-size: ${(props) => props.theme.font_size_heading};
  font-weight: ${(props) => props.theme.font_weight_primary};
  margin-bottom: 15px;

  ${(props) =>
    props.main &&
    css`
      text-align: center;
      font-size: ${(props) => props.theme.font_size_heading_main};
      margin-bottom: 50px;
    `}
`;

export default Heading;
