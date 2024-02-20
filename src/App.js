import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MobileDashboard from './components/MobileDashboard';
import './App.scss';

function AppRoot() { // Renamed from RootApp to AppRoot
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mobile" component={MobileDashboard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <AppRoot /> {/* Render AppRoot instead of App */}
  </Provider>,
  document.getElementById('root')
);

export default AppRoot; // Export AppRoot as the default export
