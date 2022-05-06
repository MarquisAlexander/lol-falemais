import React from 'react';

import Icons from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  TextButtonPlan,
  Title,
  Plan,
  Button,
  TextButton,
  ContainerBenefits,
  Content,
  TextBenefits,
} from './styles';

const plans = {
  basic: {
    title: 'Basic',
    plan: 'FaleMais 30min',
    codePlan: '1',
    description: 'Para usuários casuais',
    benefits: [
      {
        description: 'Fale por 30min sem taxas',
      },
      {
        description: 'Fale por 30min sem taxas',
      },
      {
        description: 'Fale por 30min sem taxas',
      },
    ],
    color: '#F1B2D8',
  },
  professional: {
    title: 'Professional',
    plan: 'FaleMais 60min',
    codePlan: '2',
    description: 'Para usuários casuais',
    benefits: [
      {
        description: 'Fale por 60min sem taxas',
      },
      {
        description: 'Fale por 60min sem taxas',
      },
      {
        description: 'Fale por 60min sem taxas',
      },
    ],
    color: '#D0EA59',
  },
  team: {
    title: 'Team',
    plan: 'FaleMais 120min',
    codePlan: '3',
    description: 'Para usuários casuais',
    benefits: [
      {
        description: 'Fale por 120min sem taxas',
      },
      {
        description: 'Fale por 120min sem taxas',
      },
      {
        description: 'Fale por 120min sem taxas',
      },
    ],
    color: '#FFBB01',
  },
};

export function CardPlan({
  onClick = () => {},
  selected = false,
  plan = 'basic',
}) {
  return (
    <Container
      selected={selected}
      color={plans[plan].color}
      onPress={() => onClick({plan: plans[plan].codePlan, type: 'plan'})}>
      <Title>{plans[plan].title}</Title>
      <Plan>{plans[plan].plan}</Plan>
      <TextButtonPlan>{plans[plan].description}</TextButtonPlan>
      <ContainerBenefits>
        {plans[plan].benefits.map(beneficio => (
          <Content>
            <Icons name="check-circle" size={24} color="#000" />
            <TextBenefits>{beneficio.description}</TextBenefits>
          </Content>
        ))}
      </ContainerBenefits>

      <Button>
        <TextButton>Selecionar</TextButton>
      </Button>
    </Container>
  );
}
