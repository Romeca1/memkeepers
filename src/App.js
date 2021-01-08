import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MasterProvider from './Contexts';
import PrivateRoute from './Components/PrivateRoute';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';

import Login from './Pages/Login';
import Forgotpassword from './Pages/PasswordForgot';
import Register from './Pages/Register';
import ResetPassword from './Pages/PasswordReset';
import Logout from './Pages/Logout';
import HowItWorks from './Pages/QuickLinks/HowItWorks';
import MemkeepersAbout from './Pages/QuickLinks/AboutUs';
import Contact from './Pages/QuickLinks/ContactUs';
import Profile from './Pages/Profile';
import Timeline from './Pages/Timeline';
import ViewUserProfile from './Pages/UserProfile';
import ViewUserTimeline from './Pages/UserTimeline';
import ViewHonoreeProfile from './Pages/HonoreeProfile';
import ViewHonoreeTimeline from './Pages/HonoreeTimeline';
import ViewHonoreePhotos from './Pages/HonoreePhotos';
import Honorees from './Pages/Honorees';
import PageNotFound from './ProfileComponent/PageNotFound.component';
import Admin from './Pages/Admin';
import Requests from './Pages/Requests';
import Purchases from './Pages/Purchases';
import Groups from './Pages/Groups';
import Pages from './Pages/Pages';
import PageTimeline from './Pages/PageTimeline';
import Policies from './Pages/Policies';

import AuthGoogle from './Pages/Login/authGoogle';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ErrorBoundary>
            <MasterProvider> 
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/forgot" exact component={Forgotpassword} />
                <Route path="/reset/:id" exact component={ResetPassword} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/howitworks" exact component={HowItWorks} />
                <Route path="/aboutmemkeepers" exact component={MemkeepersAbout} />
                <Route path="/policies" component={Policies} />
                <Route path="/auth/google" component={AuthGoogle} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/timeline" component={Timeline} />
                <PrivateRoute path="/honorees" component={Honorees} />
                <PrivateRoute path="/honoree/:id" component={ViewHonoreeProfile} />
                <PrivateRoute path="/usertimeline/:id" component={ViewUserTimeline} />
                <PrivateRoute path="/honoreetimeline/:id" component={ViewHonoreeTimeline} />
                <PrivateRoute path="/honoreephotos/:id" component={ViewHonoreePhotos} />
                <PrivateRoute path="/userprofile/:id" component={ViewUserProfile} />
                <PrivateRoute path="/admin" admin component={Admin} />
                <PrivateRoute path="/requests" component={Requests} />
                <PrivateRoute path="/purchases" component={Purchases} />
                <PrivateRoute path="/groups" component={Groups} />
                <PrivateRoute path="/pages" component={Pages} />
                <PrivateRoute path="/userpage/:id" component={PageTimeline} />
                <Route component={PageNotFound} />
              </Switch>
            </MasterProvider>
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}
