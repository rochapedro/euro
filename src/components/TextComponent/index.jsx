import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  size = 'medium',
  uppercase = false,
}) => {
  return (
    <Styled.Container size={size} uppercase={uppercase}>
      {children}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
