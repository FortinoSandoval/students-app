import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/js/theme';

// Pages
import { StudentsPage } from './pages';
import { StudentDetailsPage } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/student-details/:id" component={StudentDetailsPage}/>
          <Route path="/" component={StudentsPage}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
