import React from 'react';
import './App.css';
import Navigation from './routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Admin from './Admin/Admin';

function App() {
  return (
    <div className="makeStyles-wrapper-1">
        <Router>
            <Switch>
                {
                    Navigation.map((item,index) => {
                        if (item.layout === "main"){
                            return (<Route key = {index} exact path={item.url} component={item.component} title = {item.title}/>);
                        } else{
                            return null;
                        }
                    })
                }
                <Redirect from="/" to="/adminres" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
