import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Notification = () => {
  return (
    <Container>
      <Text>Notification</Text>
    </Container>
  );
};

export default Notification;
