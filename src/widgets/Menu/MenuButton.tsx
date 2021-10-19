import styled from "styled-components";
import Button from "../../components/Button/Button";

const MenuButton = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  margin-top: 0.65rem;
  cursor: pointer;
  font-size: 2rem;
  ${({ theme }) => theme.mediaQueries.sm}{
    margin-top: 1.6rem;
  }
`;
MenuButton.defaultProps = {
  // variant: "text",
  // size: "sm",
};

export default MenuButton;
