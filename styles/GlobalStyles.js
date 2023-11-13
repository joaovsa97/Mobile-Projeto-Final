import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cfecf2;
`;

export const Content = styled.View`
  padding: 12px;
  width: 100%;
  gap: 8px;
  background-color: #cfecf2;
  flex: 1;
  text-align: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`
export const Footer = styled.View`
flex-direction: row;
gap: 8px;
padding: 8px;
justify-content: space-evenly;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
