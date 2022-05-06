import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useDispatch, useSelector } from 'react-redux';
import { closeRewardSec, openRewardSec } from '../../new/rewardActions';

export default function NavBar({ setFormOpen }) {
  const dispatch= useDispatch();
  const { authenticated } = useSelector(state => state.auth);
  const { isOpen } = useSelector((state) => state.reward);
  return (
    <Menu inverted stackable style={{marginTop:"0px"}}>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Ka-rib
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {/* <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' /> */}
        {authenticated && (
          <><Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' onClick={() => dispatch(openRewardSec())}/>
          </Menu.Item>
          {isOpen && <Menu.Item as={NavLink} to='/reward'>
              <Button positive inverted content='Rewards' onClick={ () => dispatch(closeRewardSec()) }/>
            </Menu.Item>}
            </>
        )}
        {authenticated ? (
          <SignedInMenu />
        ) : (
          <SignedOutMenu />
        )}
      </Container>
    </Menu>
  );
}
