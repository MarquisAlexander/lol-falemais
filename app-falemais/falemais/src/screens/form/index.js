import React, {useState} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Feather';

import {CardPlan} from '../../components/CardPlans';
import {CardResume} from '../../components/CardResume';
import {api} from '../../services/api';

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

import {
  Container,
  Header,
  Input,
  ContainerInput,
  Content,
  Button,
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

const codes = [
  {
    ddd: '011',
    array: ['016', '017', '018'],
  },
  {ddd: '016', array: ['011']},
  {ddd: '017', array: ['011']},
  {ddd: '018', array: ['011']},
];

const styles = {
  buttonStyle: {
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    width: '100%',
    height: 45,
  },
  buttonTextStyle: {
    fontSize: 16,
  },
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
              <SelectDropdown
                data={codes.map(code => code.ddd)}
                onSelect={item => {
                  updateForm({origin: item, type: 'origin'});
                }}
                defaultButtonText="DDD de origem"
                buttonTextStyle={styles.buttonTextStyle}
                buttonStyle={styles.buttonStyle}
              />
            </ContainerInput>
            <Icons name="arrow-right" size={24} color="#fff" />
            <ContainerInput>
              <SelectDropdown
                data={
                  codes[codes.findIndex(code => code.ddd === form.origin)]
                    ?.array
                }
                onSelect={item => {
                  updateForm({destine: item, type: 'destine'});
                }}
                defaultButtonText="DDD de Destino"
                buttonTextStyle={styles.buttonTextStyle}
                buttonStyle={styles.buttonStyle}
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
              paddingHorizontal: 20,
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
        <Button onPress={handleCalculatePrices}>
          <TextButton>Calcular custos com FaleMais</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
}
