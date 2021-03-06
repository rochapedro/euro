import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.fizes.small};
    padding: ${theme.spacings.mediium};
    color: ${theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0%;
      height: 0.2rem;
      background: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
