import styled from "@emotion/styled";
import { Link } from "gatsby";

const GatsbyAnchor = styled(Link)`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.accent};

  &:visited {
    color: ${p => p.theme.colors.accent};
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default GatsbyAnchor;
