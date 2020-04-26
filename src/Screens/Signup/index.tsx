import React, {useState} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #feffff;
`;

const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;

const Description = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #929292;
  margin: 0px 8px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const Footer = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #d3d3d3;
  padding: 8px;
`;

const FooterDescription = styled.Text`
  color: #929292;
  text-align: center;
`;

const GoBack = styled.Text`
  color: #3796ef;
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Signup = ({navigation}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabs = ['전화번호', '이메일'];

  return (
    <Container>
      <FormContainer>
        <TabContainer>
          {tabs.map((label: string, index: number) => (
            <Tab
              key={`tab-${index}`}
              selected={tabIndex === index}
              label={label}
              onPress={() => setTabIndex(index)}
            />
          ))}
        </TabContainer>
        <Input
          style={{marginBottom: 16}}
          placeholder={tabIndex === 0 ? '전화번호' : '이메일'}
        />
        <Button label="다음" style={{marginBottom: 24}} />
        {tabIndex === 0 && (
          <Description>
            SNS App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을
            취소할 수 있습니다.
          </Description>
        )}
      </FormContainer>
      <Footer>
        <FooterDescription>
          이미 계정이 있으신가요?{' '}
          <GoBack onPress={() => navigation.goBack()}>로그인</GoBack>
        </FooterDescription>
      </Footer>
    </Container>
  );
};

Signup.navigationOptions = {
  header: null,
};

export default Signup;
