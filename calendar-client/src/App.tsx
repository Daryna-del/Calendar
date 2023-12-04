import styled from "@emotion/styled/macro";
import { Calendar } from './components/calendar/Calendar';

const AppDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;


function App() {
  return (
    <AppDiv>
      <Calendar />
    </AppDiv>
  );
}

export default App;
