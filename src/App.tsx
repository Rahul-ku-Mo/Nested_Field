import { FieldDataProvider } from "./context/FieldProvider";
import Container from "./components/Container";
import { SnackbarProvider } from "notistack";

const App: React.FC = () => {
  return (
    <SnackbarProvider>
      <FieldDataProvider>
        <Container />
      </FieldDataProvider>
    </SnackbarProvider>
  );
};

export default App;
