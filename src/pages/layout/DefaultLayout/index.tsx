import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LayoutContainer } from "./styles";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <div style={{ overflowY: "auto" }}>
        <Outlet />
      </div>
    </LayoutContainer>
  );
};

export { DefaultLayout };
