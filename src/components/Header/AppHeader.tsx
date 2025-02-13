import HomeIcon from "@mui/icons-material/Home";
import SchemaIcon from "@mui/icons-material/Schema";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Link, useLocation } from "react-router-dom";
import { S_ICON_SIZE } from "../../theme";
import {
  HeaderDiv,
  IconWrapper,
  LinkGrid,
  LinkText,
  TitleWrapper,
} from "./styles";

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
      <TitleWrapper>
        <h1>Object Management System (OMS)</h1>
      </TitleWrapper>
      <nav>
        <LinkGrid>
          <Link to="/" style={{ textDecoration: "none" }} id="linkHome">
            <LinkText current={currentScreen === ""}>
              <IconWrapper>
                <HomeIcon sx={{ fontSize: S_ICON_SIZE, cursor: "pointer" }} />
              </IconWrapper>
              Home
            </LinkText>
          </Link>
          <Link
            to="/objects"
            style={{ textDecoration: "none" }}
            id="linkObjects"
          >
            <LinkText current={currentScreen === "objects"}>
              <IconWrapper>
                <WidgetsIcon
                  sx={{ fontSize: S_ICON_SIZE, cursor: "pointer" }}
                />
              </IconWrapper>
              Objects
            </LinkText>
          </Link>
          <Link
            to="/relations"
            style={{ textDecoration: "none" }}
            id="linkRelations"
          >
            <LinkText current={currentScreen === "relations"}>
              <IconWrapper>
                <SchemaIcon sx={{ fontSize: S_ICON_SIZE, cursor: "pointer" }} />
              </IconWrapper>
              Relations
            </LinkText>
          </Link>
        </LinkGrid>
      </nav>
    </HeaderDiv>
  );
};
