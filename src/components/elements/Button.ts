import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.brand_color};
  color: #fff;
  border-radius: 12px;
  padding: 15px 40px;
  border: none;
  font-family: inherit;
  font-size: ${(props) => props.theme.font_size_primary};
  font-weight: ${(props) => props.theme.font_weight_primary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.brand_hover_color};
    transition: ${(props) => props.theme.transition_primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.brand_hover_color};
  }
`;

export default Button;
