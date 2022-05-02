import React, {useState} from 'react';

import {colors} from '../../assets/colors';
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
  TextButtonPlan,
  TextHeader,
  TextButton,
  ContentPrices,
} from './styles';

const INITIAL_STATE = {
  origin: 0,
  destine: 0,
  time: 0,
  plan: 0,
};

async function calculatePrices({form = {}}) {
  try {
    const response = await api.post('/calcpriceplan', form);
    return response.data;
  } catch (error) {}
}

export function Form() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [prices, setPrices] = useState();

  async function handleCalculatePrices() {
    const response = await calculatePrices({form});
    setPrices(response);
  }

  function updateForm({
    origin = null,
    destine = null,
    plan = null,
    time = null,
    type = null,
  }) {
    if (type === 'plan') {
      setForm({...form, plan});
    } else if (type === 'origin') {
      setForm({...form, origin});
    } else if (type === 'destine') {
      setForm({...form, destine});
    } else if (type === 'time') {
      setForm({...form, time});
    }
  }

  return (
    <Container>
      <Header>
        <TextHeader>
          Digite abaixo o ddd de origem e o de destino que vamos mostrar para
          você os beneficios do plano FaleMais.
        </TextHeader>

        <Content>
          <ContainerInput>
            <Input
              onChangeText={text => updateForm({origin: text, type: 'origin'})}
              placeholder="DDD de origem"
              keyboardType="numeric"
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="DDD de Destino"
              onChangeText={text =>
                updateForm({destine: text, type: 'destine'})
              }
              keyboardType="numeric"
            />
          </ContainerInput>
        </Content>
        <Input
          onChangeText={text => updateForm({time: text, type: 'time'})}
          placeholder="Tempo da ligação"
          keyboardType="numeric"
        />
        <TextHeader>Planos</TextHeader>
        <Content>
          <ButtonPlan
            selected={form.plan === '1'}
            onPress={() => updateForm({plan: '1', type: 'plan'})}>
            <TextButtonPlan>FaleMais 30min</TextButtonPlan>
          </ButtonPlan>
          <ButtonPlan
            selected={form.plan === '2'}
            onPress={() => updateForm({plan: '2', type: 'plan'})}>
            <TextButtonPlan>FaleMais 60min</TextButtonPlan>
          </ButtonPlan>
          <ButtonPlan
            selected={form.plan === '3'}
            onPress={() => updateForm({plan: '3', type: 'plan'})}>
            <TextButtonPlan>FaleMais 120min</TextButtonPlan>
          </ButtonPlan>
        </Content>
        <ContentPrices>
          <TextHeader>Custo da ligação com FaleMais:</TextHeader>
          <TextHeader color={colors.success}>
            {prices?.totalWithFaleMais}
          </TextHeader>
          <TextHeader>Custo da ligação sem FaleMais:</TextHeader>
          <TextHeader color={colors.danger}>
            {prices?.totalwithoutFaleMais}
          </TextHeader>
        </ContentPrices>
      </Header>
      <ContainerButton>
        <Button onPress={handleCalculatePrices}>
          <TextButton>Comparar planos</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
}
