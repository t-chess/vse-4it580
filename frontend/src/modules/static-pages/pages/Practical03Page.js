import {
  Heading,
  Paragraph,
  StackDivider,
  BodyBackground,
  Stack,
  Textarea,
  Select,
  Switch,
  RadioGroup,
  Radio,
  Box,
} from 'src/shared/design-system';

import { FormField, yup } from 'src/shared/hook-form';

import { SettingsSection } from '../molecules';


const schema = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  username: yup.string().required().label('Username'),
  email: yup.string().email().required().label('Email'),
  about: yup.string().required().label('Bio'),
  agreeToc: yup.bool().required().oneOf([true],"Must be accepted.").label('Agreement'),
});
const schemaNotif = yup.object().shape({
  notificationsLevel: yup.string().required().label('Notifications level'),
});

export function Practical03Page() {
  return (
    <>
      <BodyBackground bg="gray.100" />
      <Heading pb="4">Practical 03</Heading>

      <Stack>
        <SettingsSection
          title="Profile"
          description="This is your profile information."
          schema={schema}
          formProps={{
            defaultValues: {
              firstName: 'John',
              lastName: 'Doe',
              username: 'jdoe',
              email: 'john@doe.com',
              about: 'Lorem ipsum',
              visibility: 'public',
              agreeToc: false,
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <Stack direction={{ base: 'column', md: 'row' }} > 
            <FormField label="First name" name='firstName' />
            <FormField label="Last name" name='lastName' />
          </Stack>
          <FormField label="Username" width={{ base: '100%', md: '50%' }} name='username' />
          <FormField label="Email" width={{ base: '100%', md: '50%' }} name='email' />
          <FormField label="Profile bio" name='about' as={Textarea} />
          <FormField label="Profily visibility" name='visibility' as={Select}>
            <option value="public">Public</option>
            <option value="friends">Only friends</option>
            <option value="private">Private</option>
          </FormField>

          <FormField label="Agree to Terms and Conditions" border='none' name='agreeToc' as={Switch} />
        </SettingsSection>
        <SettingsSection
          title="Notifications"
          description="Setup how much notification you will receive"
          schema={schemaNotif}
          formProps={{
            defaultValues: {
              notificationsLevel: 'mentions',
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <FormField name='notificationsLevel' as={RadioGroup} border='none' height='100%'>
            <Heading as="h5">Notify me</Heading>
            <Paragraph>When you should be notified:</Paragraph>
            <Stack>
              <Radio value="all">Every time someone quacks</Radio>
              <Radio value="mentions">Only mentions (@username)</Radio>
              <Radio value="never">Never</Radio>
            </Stack>
          </FormField>
        </SettingsSection>
      </Stack>
    </>
  );
}
