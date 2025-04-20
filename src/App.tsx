import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

import './styles/theme.css';
import './styles/global.css';
import { MainRoute } from './routes/MainRouter';

const App = () => {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRoute />
      </MessagesContainer>
    </TaskContextProvider>
  );
};

export default App;
