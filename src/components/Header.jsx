import { AppBar, Toolbar, styled } from '@mui/material';
import logo from '../assets/logo.webp';
const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 150 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
