import React, {useState} from 'react';
import {FlatList, Text, View, ScrollView, Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Feather';

import {CardPlan} from '../../components/CardPlans';
import {CardResume} from '../../components/CardResume';
import {calculatePrices, formatterMoney} from '../../utils';

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

const messagesError = {
  origin: 'Selecione o ddd de origem',
  destine: 'Selecione o ddd de destino',
  time: 'Digite o tempo de duração',
  plan: 'Selecione o plano',
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

export function Form() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [prices, setPrices] = useState();

  async function handleCalculatePrices() {
    const isValid = validateForm();

    if (isValid) {
      const response = await calculatePrices({form});
      setPrices(response);
    }
  }

  function validateForm() {
    let isValid = true;
    Object.keys(form).every(item => {
      if (form[item] === 0) {
        Alert.alert('Erro', `${messagesError[item]}`);
        return (isValid = false);
      } else {
        return (isValid = true);
      }
    });
    return isValid;
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
      let clearNumber = time.replace(/[^0-9]/g, '');
      setForm({...form, time: clearNumber});
    }
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <TitleText testID="welcome">Telzin Planos</TitleText>
          <TextHeader>
            Selecione abaixo o ddd de origem e o de destino e digite quanto
            tempo de ligação você usa que vamos mostrar para você os beneficios
            do plano FaleMais.
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
            value={form.time}
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
            {console.log('quii', prices?.totalWithFaleMais)}
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
