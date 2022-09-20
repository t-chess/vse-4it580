import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { PageWrapper, NotFoundPage } from 'src/shared/navigation';

import { SignInPage, SignUpPage } from 'src/modules/auth';
import { HomePage, UserDetailPage } from 'src/modules/quack';
import { AboutPage, Practical01Page } from 'src/modules/static-pages';

export const route = {
  home: () => `/`,
  practical: (id) => `/practical/${id}`,
  about: () => `/about`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (userName) => `/${userName}`,
};

export const PRACTICALS = [
  // Practical pages
  { id: '01', PageComponent: Practical01Page },
];

export function Routes() {
  return (
    <RouterRoutes>
      <Route path={route.home()} element={<HomePage />} />
      {PRACTICALS.map(({ id, PageComponent }) => (
        <Route
          path={route.practical(id)}
          key={id}
          element={
            <PageWrapper>
              <PageComponent />
            </PageWrapper>
          }
        />
      ))}
      <Route path={route.about()} element={<AboutPage />} />
      <Route path={route.signIn()} element={<SignInPage />} />
      <Route path={route.signUp()} element={<SignUpPage />} />
      <Route
        path={route.userDetail(':userName')}
        element={<UserDetailPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
