import { useAuth } from '../hooks';
import { PageNav, NavigationLink } from '../ui';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <PageNav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </PageNav>
  );
};

export default Navigation;
