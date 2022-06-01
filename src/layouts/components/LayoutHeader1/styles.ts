import styled from 'styled-components'

import GenericCodeButton from '../../../components/Button'
import InkControlSymbolImage from './assets/979_114568.png' 
import IconOutlinedUserImage from './assets/979_114575.png' 
import VectorComponenticonoutlineddirImage from './assets/I979_114576_180_40425.png' 

export const LayoutHeader = styled.div`
height: 64px;
width: 1664px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Header = styled.div`
justify-content: space-between;
height: 64px;
width: 1664px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
  padding: 24.0px 24.0px 24.0px 24.0px;
    padding-top: 24.0px;
    padding-left: 24.0px;
    padding-bottom: 24.0px;
    padding-right: 24.0px;
  background-color: #FFFFFF;
`;
export const Wrapper = styled.div`
height: 32px;
width: 175px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: center;
`;
export const ButtonsButton4 = styled(GenericCodeButton)`
      top: 0px;
        width: 32px;
        height: 32px;
        border-radius: 2px;
        height: 32px;
`;

export const InkControlSymbol = styled.div`
left: 48px;
top: 4.603515625px;
position: static;
height: 23px;
width: 127px;
  background-color: #EF3526;
  background: url(${InkControlSymbolImage});
  background-repeat: no-repeat;
`;
export const Actions = styled.div`
height: 32px;
width: 261px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: center;
`;
export const ButtonsButton5 = styled(GenericCodeButton)`
    top: 0px;
      width: 34px;
      height: 32px;
      border-radius: 2px;
      height: 32px;
`;

export const Notifications = styled(GenericCodeButton)`
  left: 50px;
  top: 0px;
    width: 32px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

export const Frame43 = styled.div`
height: 32px;
width: 163px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Avatar = styled.div`
left: 0px;
top: 0px;
position: static;
height: 32px;
width: 32px;
box-sizing: border-box;
border-radius: 96px;
`;
export const Rectangle3 = styled.div`
left: 0px;
top: 0px;
position: absolute;
left: 0px;
top: 0px;
position: absolute;
height: 32px;
width: 32px;
box-sizing: border-box;
  background-color: #C0C0C0;
`;
export const IconOutlinedUser = styled.div`
left: 7px;
top: 7px;
position: absolute;
left: 7px;
top: 7px;
position: absolute;
height: 18px;
width: 18px;
box-sizing: border-box;
  background: url(${IconOutlinedUserImage});
  background-repeat: no-repeat;
`;
export const InstanceComponentdropdowntrigger = styled.div`
height: 22px;
width: 123px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 2.0px;;
column-gap: 2.0px;;
justify-content: flex-start;
align-items: center;
`;
import GenericText from '../../../components/Text'
export const Dropdown = styled(GenericText)`
    color: #2C292B;
    margin: 0px;
  width: 109px;
`;

export const VectorComponenticonoutlineddir = styled.div`
left: 111px;
top: 5px;
position: static;
height: 12px;
width: 12px;
box-sizing: border-box;
  background: url(${VectorComponenticonoutlineddirImage});
  background-repeat: no-repeat;
`;
