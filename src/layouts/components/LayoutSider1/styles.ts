import styled from 'styled-components'

import Menu1Image from './assets/979_114460.png' 
import LogoImage from './assets/979_114461.png' 
import {Menu} from 'antd'

export const LayoutSider = styled.div`
height: 100%;
width: 256px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Menu1 = styled.div`
flex-direction: column;
height: 100%;
width: 256px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: flex-start;
  background-color: #131212;
  background: url(${Menu1Image});
  background-repeat: no-repeat;
  box-shadow:  8px 4px 16px 0px rgba(0, 0, 0, 0.07999999821186066)  ;
`;
export const Logo = styled.div`
flex-direction: column;
height: 115px;
width: 256px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
align-items: center;
    padding: 32.0px 32.0px 32.0px 32.0px;
      padding-top: 32.0px;
      padding-left: 32.0px;
      padding-bottom: 32.0px;
      padding-right: 32.0px;
  background: url(${LogoImage});
  background-repeat: no-repeat;
`;
    export const MenuGroup = styled((Menu))`
      width: 256px;
      height: 696px;
    `;

    export const SubMenu = styled((Menu.SubMenu))`
    `;

    export const MenuItem = styled((Menu.Item))`
    `;

