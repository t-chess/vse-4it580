import { MainSection } from '../atoms';
import { TopNavigation } from './TopNavigation';

export function PageWrapper({ children }) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">{children}</MainSection>
    </>
  );
}
