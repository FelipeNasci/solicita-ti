import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { BaseLayout } from '../../components/Layouts';

export const RegisterCall = () => {
  type RegisterCallFormType = {
    requester: string;
    departament: string;
    detailsRequest: string;
  };
  const form = {
    values: {
      requester: '',
      departament: '',
      detailsRequest: '',
    },
    onSubmit: (values: RegisterCallFormType) => console.log(values),
  };

  return (
    <BaseLayout>
      <Formik initialValues={form.values} onSubmit={form.onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Solicitante (Seu nome)</Text>
            <TextInput
              onChangeText={handleChange('requester')}
              onBlur={handleBlur('requester')}
              value={values.requester}
            />
            <Text>Gabinete / Setor solicitante</Text>
            <TextInput
              onChangeText={handleChange('departament')}
              onBlur={handleBlur('departament')}
              value={values.departament}
            />
            <Text>
              Descreva o problema a ser resolvido ou serviço a ser executado:
            </Text>
            <TextInput
              onChangeText={handleChange('detailsRequest')}
              onBlur={handleBlur('detailsRequest')}
              value={values.detailsRequest}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </BaseLayout>
  );
};
