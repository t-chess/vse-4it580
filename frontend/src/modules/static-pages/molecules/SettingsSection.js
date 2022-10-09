import {
  Box,
  Button,
  Heading,
  Paragraph,
  Stack,
} from 'src/shared/design-system';

import { Form, yup, yupResolver } from 'src/shared/hook-form';

export function SettingsSection({ formProps, title, description, schema, children }) {
  return (
    <Form {...formProps} resolver={yupResolver(schema)} >
      <Stack width={{ base: '100%', lg: '30%' }} float='left'>
        <Heading>{title}</Heading>
        {description && <Paragraph color='gray.500'>{description}</Paragraph>}
      </Stack>
      <Stack width={{ base: '100%', lg: '65%' }} float='right' p="8" bg="white">
        {children}
        <Box textAlign="right">
          <Button type="submit" bg='green.500' color='white'>Save</Button>
        </Box>
      </Stack>
    </Form>
  );
}
