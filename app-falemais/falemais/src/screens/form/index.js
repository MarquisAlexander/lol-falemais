import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icons from 'react-native-vector-icons/Feather';
import BottomSheet from '@gorhom/bottom-sheet';

import {CardPlan} from '../../components/CardPlans';
import {CardResume} from '../../components/CardResume';
import {calculatePrices} from '../../utils';
import {codes} from '../../assets/constants';

import {
  Container,
  Header,
  Input,
  ContainerInput,
  BoxForm,
  Button,
  TextHeader,
  TextButton,
  ContentPrices,
  TitleText,
  Content,
  BottomSheetContent,
  TextSheet,
  styles,
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

export function Form() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [prices, setPrices] = useState();

  const bottomSheetRef = useRef(null);

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

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <ScrollView>
      <Container>
        <Content>
          <Header>
            <TitleText testID="welcome">Telzin Planos</TitleText>
            <TouchableOpacity onPress={handleOpen}>
              <Icons name="info" color={'#fff'} size={24} />
            </TouchableOpacity>
          </Header>
          <TextHeader>
            Selecione abaixo o ddd de origem e o de destino e digite quanto
            tempo de ligação você usa que vamos mostrar para você os beneficios
            do plano FaleMais.
          </TextHeader>

          <BoxForm>
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
          </BoxForm>
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
            <CardResume price={prices?.totalWithFaleMais} type={'with'} />
            <CardResume price={prices?.totalwithoutFaleMais} type={'without'} />
          </ContentPrices>
        </Content>
        <Button onPress={handleCalculatePrices}>
          <TextButton>Calcular custos com FaleMais</TextButton>
        </Button>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[1, 380]}
          backgroundStyle={styles.backgroundBottomSheet}
          handleIndicatorStyle={styles.handleIndicator}>
          <BottomSheetContent>
            <TextSheet>
              Com o novo produto FaleMais da Telzir o cliente adquire um plano e
              pode falar de graça até um determinado tempo (em minutos) e só
              paga os minutos excedentes. Os minutos excedentes tem um acréscimo
              de 10% sobre a tarifa normal do minuto
            </TextSheet>
          </BottomSheetContent>
        </BottomSheet>
      </Container>
    </ScrollView>
  );
}
