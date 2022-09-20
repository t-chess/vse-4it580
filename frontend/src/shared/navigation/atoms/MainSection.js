import { Box, Center } from 'src/shared/design-system';

export function MainSection({ children, ...restProps }) {
  return (
    <Center p="4" borderTop="1px" borderColor="blackAlpha.200">
      <Box as="section" minW="30rem" {...restProps}>
        {children}
      </Box>
    </Center>
  );
}
