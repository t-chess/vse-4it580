import { useNavigate } from 'react-router-dom';

import {
  AvatarPhoto,
  Button,
  Icon,
  Flex,
  QuackerIcon,
} from 'src/shared/design-system';

import { useAuth } from 'src/modules/auth';
import { route, PRACTICALS } from 'src/Routes';

import { RouterLink, RouterNavLink, ReactRouterLink } from '../atoms';

export function TopNavigation() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex as="nav" color="white" bg="green.700" justifyContent="space-between">
      <RouterLink
        to={route.home()}
        noUnderline
        color="white"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        py="3"
        px="4"
      >
        <Icon as={QuackerIcon} mr="2" fontSize="xl" />
        Quacker
      </RouterLink>
      <Flex alignItems="stretch">
        <RouterNavLink to={route.home()}>Home</RouterNavLink>
        {PRACTICALS.map(({ id }) => (
          <RouterNavLink to={route.practical(id)} key={id}>
            {id}
          </RouterNavLink>
        ))}
        <RouterNavLink to={route.about()}>About</RouterNavLink>
        {user ? (
          <>
            <RouterNavLink to={route.userDetail(user.userName)} py="0">
              <AvatarPhoto
                src={user.profileImageUrl}
                alt={user.userName}
                size="6"
                mr="2"
              />
              {user.name}
            </RouterNavLink>
            <Flex alignItems="center">
              <Button
                colorScheme="green"
                size="sm"
                mx="4"
                onClick={() => {
                  signout();
                  navigate(route.home());
                  window.location.reload();
                }}
              >
                Sign Out
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <RouterNavLink to={route.signIn()}>Sign In</RouterNavLink>
            <Flex alignItems="center">
              <Button
                colorScheme="green"
                size="sm"
                mx="4"
                to={route.signUp()}
                as={ReactRouterLink}
              >
                Sign Up
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
