import Container from "@mui/material/Container";
import { Header } from "./Header";
import Box from "@mui/material/Box";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ position: "absolute", top: 64, bottom: 0, left: 0, right: 0 }}
    >
      <Header />
      <Box display={"flex"} height={"100%"}>
        <Sidebar />
        <Box padding={5} width={"100%"}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
