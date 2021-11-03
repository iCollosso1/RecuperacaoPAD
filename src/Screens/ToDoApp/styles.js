//import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';



export const Container = styled.View`
    flex: 1;
    backgroundColor: #E5E5E5;
    align-items: center;
`;

export const Header = styled.View`
    width: 85%;
    height: 173px;
    margin-top: -50px;
    border-radius: 40px;
    align-items: center;    
    background: #FFFFFF;
`;

export const TitleText = styled.Text`
    font-size: 24px;
    margin-top: 100px;
    font-weight: bold;
`;

export const Box = styled.View`
    width: 315px;
    height: 206px;
    margin-top: 40px;
    border-radius: 20px;
    align-self: center;
    align-items: center;
    align-content: center;
    border-color: #eee;
    background: #fff;
`

export const Tarefa = styled.Text`
    height: 50px;
    font-size: 24px;
    margin-top: 18px;
    align-self: center;
`

export const Input = styled.TextInput`
    margin-top: -10px;
    width: 272px;
    height: 59px;
    border-radius: 4px;
    padding: 5px 10px;
    background: #E5E5E5;
`

export const Button = styled.TouchableOpacity`
  width: 271px;
  height: 38px;
  margin-top: 25px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: #6200EE;
`

export const TextButton = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`

export const List = styled.FlatList`
    flex: 1;
    margin-top: 5px;
`

export const Body = styled.View`
    flex: 1;
    font-family: Roboto;
    font-weight: normal;
`;



  export const ContentBox = styled.View`
    width: 315px;
    height: 122px;
    padding: 15px;
    margin-top: 25px;
    border-width: 1px;
    border-radius: 4px;
    border-radius: 20px;
    background: #eee;
    border: 1px solid #6200EE;
`

export const ContentItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  
`

export const TaskTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

export const TextTask = styled.Text`
    font-size: 14px;
    padding-top: 20px;
    color: #757575;
`
export const TitleSubText = styled.Text`

font-size: 20px;
 color:#6200EE;

`;