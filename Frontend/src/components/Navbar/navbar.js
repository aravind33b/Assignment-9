import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navbarElements';
import { Navigate } from 'react-router-dom';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import Login from '../Login/Login';

const Navbar = () => {
const userData = JSON.parse(localStorage.getItem('loggedInStatus'));
var loggedUser = "Hello";
if(userData!=undefined){
    var loggedUser = "Hello " +userData.data.userName + "!";
}

const logout = () => {
        localStorage.clear();
        window.location.href = '/';
  };

return (
	<>
	<Nav>
		{/* <Bars /> */}

		<NavMenu>
        <NavLink to='/Home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/AboutUs' activeStyle>
			About Us
		</NavLink>
		<NavLink to='/Contact' activeStyle>
			Contact
		</NavLink>
		<NavLink to='/Jobs' activeStyle>
			Jobs
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
        <Dropdown autoClose="outside">
            <DropdownButton id="dropdown-basic-button" title={loggedUser} style={{padding:"30px 25px" }}>
                <Dropdown.Menu>
                    <Dropdown.Item onClickCapture={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </DropdownButton>
        </Dropdown>
	</Nav>
	</>
);
};

export default Navbar;
