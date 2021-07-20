import './App.css';
import React, { Fragment } from 'react';
import Login from './page/Login';
import func from './asset/func';
import User from './storage/User';
import Main from './page/Main';

function App() {
  const [user,setUser] = React.useState(User.getUser())

  React.useEffect(async () =>{
    try {
        setUser(User.getUser())

    } catch (error) {
      
    }
  },[])
  if(user.length > 0){
    return(
      <Fragment>
          <Main></Main>
      </Fragment>
    )
  }else{
    return (
      <Fragment>
        <Login></Login>
      </Fragment>
    );
  }
}

export default App;
