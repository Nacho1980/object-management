import { HeaderDiv, LinkText, LinkGrid, IconWrapper } from "./styles";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SchemaIcon from '@mui/icons-material/Schema';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { S_ICON_SIZE } from "../../theme";

/**
 * Header for the application.
 * @author Ignacio
 * @version 1.0.0
 */
export const AppHeader = () => {
  const location = useLocation();
  const currentScreen = location.pathname.substring(1);
  return (
    <HeaderDiv>
      <h1>Object Management System (OMS)</h1>
      <nav>
        <LinkGrid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkText current={currentScreen === ""}>
              <IconWrapper><HomeIcon sx={{ fontSize: S_ICON_SIZE, cursor: 'pointer' }} /></IconWrapper>
              Home
            </LinkText>
          </Link>
          <Link to="/objects" style={{ textDecoration: "none" }}>
            <LinkText current={currentScreen === 'objects'}>
              <IconWrapper><WidgetsIcon sx={{ fontSize: S_ICON_SIZE, cursor: 'pointer' }} /></IconWrapper>
              Objects
            </LinkText>
          </Link>
          <Link to="/relations" style={{ textDecoration: "none" }}>
            <LinkText current={currentScreen === 'relations'}>
              <IconWrapper><SchemaIcon sx={{ fontSize: S_ICON_SIZE, cursor: 'pointer' }} /></IconWrapper>
              Relations
            </LinkText>
          </Link>
        </LinkGrid>
      </nav>
    </HeaderDiv>
  );
};
