import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultColorScheme="dark"
    >
      <Container py="md">
        <h1>NikshapJain</h1>
      </Container>
    </MantineProvider>
  );
}

export default App;
