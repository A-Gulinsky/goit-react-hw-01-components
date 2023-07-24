import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  padding-left: 0;

  list-style: none;

  box-shadow: 0px 0px 5px #7e7b7b;
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 80px;

  background-color: ${getRandomHexColor};
  border: 1px solid #484545;
`

export const SpanLabel = styled.span`
  font-size: 24px;
`

export const SpanPercentage = styled.span`
  font-size: 24px;
`