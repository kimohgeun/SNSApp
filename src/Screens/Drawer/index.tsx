import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Drawer = () => {
  return (
    <Container>
      <Text>Drawer</Text>
    </Container>
  );
};

export default Drawer;
