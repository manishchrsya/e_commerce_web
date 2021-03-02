import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginPage from '../modules/loginPage/LoginPage';
import RegisterPage from '../modules/registerPage/RegisterPage';
import HomePage from '../modules/homePage/HomePage';


const Routes = () => {
    return ( 
        <Switch>
            <Route path='/login'>
                <LoginPage/>
            </Route>
            <Route path='/register'>
                <RegisterPage/>
            </Route>
            <Route exact path='/'>
                <HomePage/>
            </Route>
            <Redirect to='/' from='*'/>
        </Switch>
     );
}
 
export default Routes;