import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '@mdi/react';
import { mdiHome, mdiViewList, mdiPlaylistPlus } from '@mdi/js';

function Navbar() {
  const router = useRouter();

  return (
    <StyledNav>
      <Link passHref href="/">
        <NavSideButton isActive={router.pathname === '/'}>
          <Icon path={mdiHome} title="Home" size={1} />
          <div>Home</div>
        </NavSideButton>
      </Link>
      <Link passHref href="/create-meeting">
        <NavCenterButton isActive={router.pathname === '/create-meeting'}>
          <Icon path={mdiPlaylistPlus} title="Erstelle ein Meeting" size={1} />
          <div>Meeting</div>
        </NavCenterButton>
      </Link>
      <Link passHref href="/meetings">
        <NavSideButton isActive={router.pathname === '/meetings'}>
          <Icon path={mdiViewList} title="Meetings" size={1} />
          <div>Meetings</div>
        </NavSideButton>
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const NavButton = styled.a`
  background-color: #158322;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const NavSideButton = styled(NavButton)`
  align-items: center;
  border-radius: 5px 5px 0 0;
  color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
  height: 40px;
  width: 40%;
`;

const NavCenterButton = styled(NavButton)`
  align-items: center;
  background-color: ${({ isActive }) => (isActive ? 'orange' : '#158322')};
  border-radius: 120px 120px 0 0;
  bottom: 0;
  color: ${({ isActive }) => (isActive ? '#1976d2' : 'white')};
  flex-direction: column;
  height: 60px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 110px;
`;

export default Navbar;
