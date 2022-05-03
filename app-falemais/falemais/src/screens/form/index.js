import React, {useState} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';

import {CardPlan} from '../../components/CardPlans';
import {CardResume} from '../../components/CardResume';
import {api} from '../../services/api';

import {
  Container,
  Header,
  Input,
  ContainerInput,
  Content,
  Button,
  ContainerButton,
  TextHeader,
  TextButton,
  ContentPrices,
  TitleText,
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
    <ScrollView>
      <Container>
        <Header>
          <TitleText>Telzin Planos</TitleText>

          <TextHeader>
            Digite abaixo o ddd de origem e o de destino que vamos mostrar para
            você os beneficios do plano FaleMais.
          </TextHeader>

          <Content>
            <ContainerInput>
              <Input
                onChangeText={text =>
                  updateForm({origin: text, type: 'origin'})
                }
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
          
          <FlatList
            data={['basic', 'professional', 'team']}
            ListEmptyComponent={() => <Text>Nenhum plano encontrado</Text>}
            ListFooterComponent={() => <View style={{marginLeft: 40}} />}
            ItemSeparatorComponent={() => <View style={{marginLeft: 10}} />}
            showsHorizontalScrollIndicator={false}
            style={{
              marginLeft: -20,
              marginRight: -20,
              paddingHorizontal: 20
            }}
            horizontal
            renderItem={({item}) => {
              return (
                <CardPlan
                  plan={item}
                  onClick={obj => updateForm({plan: obj.plan, type: obj.type})}
                />
              );
            }}
          />
          <ContentPrices>
            <CardResume price={prices?.totalWithFaleMais} type={'with'} />
            <CardResume price={prices?.totalwithoutFaleMais} type={'without'} />
          </ContentPrices>
        </Header>
        <ContainerButton>
          <Button onPress={handleCalculatePrices}>
            <TextButton>Comparar planos</TextButton>
          </Button>
        </ContainerButton>
      </Container>
    </ScrollView>
  );
}
