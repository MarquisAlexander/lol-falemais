import React from 'react';
import {Container, Title, TextPrice} from './styles';
import NumberFormat from 'react-number-format';

const typePrice = {
  with: {
    color: '#1B998B',
  },
  without: {
    color: '#E71D36',
  },
};

export function CardResume({price = 0, type = 'with'}) {
  return (
    <Container>
      <Title>Custo da ligação com FaleMais:</Title>
      <NumberFormat
        value={price}
        displayType="text"
        thousandSeparator
        prefix="R$ "
        renderText={value => (
          <TextPrice color={typePrice[type].color}>{value}</TextPrice>
        )}
      />
    </Container>
  );
}
