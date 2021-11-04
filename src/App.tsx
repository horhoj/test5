import { FC } from 'react';
import { Container } from './GlobalStyles';
import { RoutesStructure } from './router';

export const App: FC = () => {
  return (
    <Container>
      <RoutesStructure />
    </Container>
  );
};
