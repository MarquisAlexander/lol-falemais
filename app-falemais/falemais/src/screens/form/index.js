import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {api} from '../../services/api';

import {
  Container,
  Header,
  Input,
  ContainerInput,
  Content,
  Button,
  ContainerButton,
  ButtonPlan,
} from './styles';

const INITIAL_STATE = {
  origin: 0,
  destination: 0,
  plan: 0,
};

async function calculatePrices({form = {}}) {
  try {
    console.log('form', form);
    const response = await api.get('/calcpriceplan');
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}

export function Form() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [prices, setPrices] = useState();

  async function handleCalculatePrices() {
    console.log('form', form);
    const response = await calculatePrices({form});
    setPrices(response);
    console.log('dfdfsfsd', response);
  }

  function updateForm({
    origin = null,
    destination = null,
    plan = null,
    type = null,
  }) {
    if (type === 'plan') {
      console.log('update plan');
      setForm({...form, plan});
    } else if (type === 'origin') {
      console.log('update origin');
      setForm({...form, origin});
    } else if (type === 'destination') {
      console.log('update destination');
      setForm({...form, destination});
    }
  }

  return (
    <Container>
      <Header>
        <Text>
          Digite abaixo o ddd de origem e o de destino que vamos mostrar para
          você os beneficios do plano FaleMais.
        </Text>

        <Content>
          <ContainerInput>
            <Input
              onChangeText={text => updateForm({origin: text, type: 'origin'})}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              onChangeText={text =>
                updateForm({destination: text, type: 'destination'})
              }
            />
          </ContainerInput>
        </Content>
        <Content>
          <ButtonPlan onPress={() => updateForm({plan: 0, type: 'plan'})}>
            <Text>FaleMais 30min</Text>
          </ButtonPlan>
          <ButtonPlan onPress={() => updateForm({plan: 1, type: 'plan'})}>
            <Text>FaleMais 60min</Text>
          </ButtonPlan>
          <ButtonPlan onPress={() => updateForm({plan: 2, type: 'plan'})}>
            <Text>FaleMais 120min</Text>
          </ButtonPlan>
        </Content>
        <Text>{prices?.totalWithFaleMais}</Text>
      </Header>
      <ContainerButton>
        <Button onPress={handleCalculatePrices}>
          <Text>Calcular planos</Text>
        </Button>
      </ContainerButton>
    </Container>
  );
}
