import { useState } from 'react';

export default function useLogin() {
    const getLoggedIn = () => {
        const loginString = localStorage.getItem('loggedInStatus');
        const userStatus = JSON.parse(loginString);
        return userStatus?.loggedInStatus
      };

    const [loggedIn, setLoggedIn] = useState(getLoggedIn());
  
    const saveLogIn = userStatus => {
        localStorage.setItem('loggedInStatus', JSON.stringify(userStatus));
        setLoggedIn(userStatus.loggedInStatus);
      };

      return {
        loggedIn,
        setLoggedIn: saveLogIn
      }
  }