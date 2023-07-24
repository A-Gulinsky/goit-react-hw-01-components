import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  background-color: #ece4e4;
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 0px 5px #494747;
`

export const DescriptionContainer = styled.div`
  padding: 25px;
  padding-bottom: 0;
`

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 160px;
  height: 160px;
`

export const Name = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  
  font-size: 36px;
  text-align: center;
`

export const Tag = styled.p`
  margin: 0;

  font-size: 20px;
  text-align: center;
  color: #676262;
`

export const Location = styled.p`
  margin: 0;

  font-size: 20px;
  text-align: center;
  color: #676262;
`

export const StatsList = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 15px;
  margin-bottom: 0;

  list-style: none;
`

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding: 4px 4px;

  width: 33%;
  
  background-color: #6e6b6b;
  border: 1px solid #211e1e;
`

export const SpanLabel = styled.span`
  font-size: 20px;
  color: silver;
`

export const SpanQuantity = styled.span`
  font-size: 20px;
  color: #58c5ff;
`
