import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;

  padding-left: 0;
  background-color: #eefbc4;
`

export const Li = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  padding: 10px 10px;

  border: 1px solid #363434;
  border-radius: 2px;
`

export const Img = styled.img`
  width: 80px;
  height: 80px;
`

export const CheckIsOnlineDiv = styled.div`
  width: 25px;
  height: 25px;

  background-color: ${props => (props.checkIsOnline ? 'green' : 'red')};
  border-radius: 100%;
`

export const Name = styled.p`
  margin: 0;

  color: #928d8d;
`
