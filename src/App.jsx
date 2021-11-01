import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container'
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegistrationView from './views/RegistrationView/RegistrationView';
import AuthView from './views/AuthView/AuthView';


function App() {
  return (
    <Container>
      <AppBar />
      
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegistrationView}/>
        <Route path="/login" component={AuthView} />        
      </Switch>

    </Container>
  );
}

export default App;
