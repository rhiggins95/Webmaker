import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Users Components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Website Components
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widget Components 
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

function App() {
  
  // users data
const [users, setUsers] =useState([
  
  {
    _id: "123", 
  username: "alice", 
  password: "alice", 
  firstName: "Alice", 
  lastName: "Wonder", 
  email: "alice@gmail.com"
},
  
  {
    _id: "234", 
  username: "bob", 
  password: "bob", 
  firstName: "Bob", 
  lastName: "Marley", 
  email: "bob@whatever.com"},
  
  {
    _id: "345", 
  username: "charly", 
  password: "charly", 
  firstName: "Charly", 
  lastName: "Garcia", 
  email: "charly@ulem.com"},
  
  {
    _id: "456", 
  username: "ronelle", 
  password: "ronelle", 
  firstName: "ronelle", 
  lastName: "Higgins", 
  email: "swang@ulem.org"
}
  ]);

  return ( 
   <Router>
      <Switch>
        <Route exact path="/login"> <Login users={users} /> </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/user/:uid" component={Profile}/>
        <Route exact path="/user/:uid/website" component={WebsiteList}/>
        <Route exact path="/user/:uid/website/new" component={WebsiteNew}/>
        <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit}/>
        <Route exact path="/user/:uid/website/:wid/page" component={PageList}/>
        <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew}/>
        <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit}/>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/list" component={WidgetList}/>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/chooser" component={WidgetChooser}/>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/edit" component={WidgetEdit}/>

  <Route path="/"> <Login users={users} /> </Route>
  </Switch>
</Router>
  );
}

export default App;
