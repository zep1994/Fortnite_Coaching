
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Coaches from '../Coaches';
import Meetings from '../Meetings';
import Games from '../Games';
import Home from '../Home/Home';


const Main = () => (
   <Switch >
      < Route exact path = "/"  component={ Home } />
      < Route path = "/meetings"  component={ Meetings } />
      < Route path = "/coaches"  component={ Coaches } />
      < Route path = "/games"  component={ Games } />
   </Switch>
)

export default Main;