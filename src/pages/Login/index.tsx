import React from 'react';

import { Typography } from 'antd';
import GenericInput from '../../components/Input' 
import GenericCodeButton from '../../components/Button' 


import {
Login,
Body1,
SunChemicalLogoBlack,
ViceriForm,
InputFormItem,
InputFormItem1,
Actions1,
ButtonsButton1,
} from './styles';

const LoginPage = () => {









return (
        <Login    >
  <Body1    >
    <SunChemicalLogoBlack    >
    </SunChemicalLogoBlack>
    <ViceriForm  layout='vertical'  >
      <InputFormItem
      label={<Typography.Text ellipsis>Usuário</Typography.Text>}
      name='inputformitem'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem>
      <InputFormItem1
      label={<Typography.Text ellipsis>Senha</Typography.Text>}
      name='inputformitem1'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem1>
      <Actions1    >
        <GenericCodeButton 
          type='link'
          >
            Esqueci minha senha
        </GenericCodeButton>
        <ButtonsButton1 
          type='primary'
          >
            Login
        </ButtonsButton1>
      </Actions1>
    </ViceriForm>
  </Body1>
</Login>

    )

}

export default LoginPage
