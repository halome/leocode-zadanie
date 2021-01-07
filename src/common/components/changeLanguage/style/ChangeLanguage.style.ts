import styled from 'styled-components';

interface ButtonProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VerticalLine = styled.div`
  display: inline-block;
  border-left: 1px solid #585858;
  margin: 0 10px;
  height: 30px;
`;

export const Button = styled.div<ButtonProps>`
  ${({ isSelected }) => `
    color: ${isSelected ? '#ffffff' : '#585858'};
    cursor: ${isSelected ? 'normal' : 'pointer'};
  `}
`;
