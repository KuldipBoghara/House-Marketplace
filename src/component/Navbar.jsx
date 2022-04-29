import React from 'react';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutLineIcon } from '../assets/svg/personOutlineIcon.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            {/* By default, an active class is added to a <NavLink> component
             when it is active */}

            <NavLink to="/">
              {({ isActive }) => (
                <>
                  <ExploreIcon
                    fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                    width="36px"
                    height="36px"
                  />
                  <p
                    className={
                      isActive
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                    }
                  >
                    Explore
                  </p>
                </>
              )}
            </NavLink>
          </li>

          <li className="navbarListItem">
            <NavLink to="/offers">
              {({ isActive }) => (
                <>
                  <OfferIcon
                    fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                    width="36px"
                    height="36px"
                  />
                  <p
                    className={
                      isActive
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                    }
                  >
                    Offers
                  </p>
                </>
              )}
            </NavLink>
          </li>

          <li className="navbarListItem">
            <NavLink to="/profile">
              {({ isActive }) => (
                <>
                  <PersonOutLineIcon
                    fill={isActive ? '#2c2c2c' : '#8f8f8f'}
                    width="36px"
                    height="36px"
                  />
                  <p
                    className={
                      isActive
                        ? 'navbarListItemNameActive'
                        : 'navbarListItemName'
                    }
                  >
                    Profile
                  </p>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
