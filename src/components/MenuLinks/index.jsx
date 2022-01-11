import P from 'prop-types';
import * as Styled from './styles';

export const MenuLinks = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLinks.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
