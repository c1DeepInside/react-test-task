import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import BorderColorRoundedIcon from '@mui/icons-material/Create';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar variant="dense" sx={{ p: 0 }}>
          <Link href="/" underline="none" sx={{ color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>
              <BorderColorRoundedIcon sx={{ transform: 'translate(1px, 3px)' }} />
              Notes
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
