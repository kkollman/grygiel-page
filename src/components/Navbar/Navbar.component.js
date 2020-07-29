import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { Link as Scroll } from 'react-scroll';

import Logo from 'components/Logo';

import styles from './Navbar.module.scss';

const NavbarElements = [
  {
    label: 'O firmie',
    link: 'about',
  },
  {
    label: 'Oferta',
    link: 'services',
  },
  {
    label: 'Realizacje',
    link: 'work',
  },
  {
    label: 'Kontakt',
    link: 'contact',
  },
];

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }

  handleHamburgerClick() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    let { elements } = this.props;
    const mapElementsToLinks = elements => {
      return elements.map(element => {
        return (
          <span className={styles.element}>
            <Scroll smooth to={element.link}>
              {element.label}
            </Scroll>
          </span>
        );
      });
    };
    return (
      <nav className={cls(styles.navbar)}>
        <a href="#">
          <Logo size={52} color={'white'} />
        </a>
        <section className={cls(styles.navElements)}>
          <div className={cls('desktop')}>{mapElementsToLinks(elements)}</div>
          <div
            className={cls('mobile', this.state.isMenuOpen && styles.isOpen)}
          >
            <div className={styles.mobileMenu}>
              {mapElementsToLinks(elements)}
            </div>
            <div
              onClick={this.handleHamburgerClick.bind(this)}
              className={cls(styles.hamburger)}
            >
              <div className={cls(styles.hamburgerStripe, styles.stripeOne)} />
              <div className={cls(styles.hamburgerStripe, styles.stripeTwo)} />
              <div
                className={cls(styles.hamburgerStripe, styles.stripeThree)}
              />
            </div>
          </div>
        </section>
      </nav>
    );
  }
}

Navbar.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};
Navbar.defaultProps = {
  elements: NavbarElements,
};

export default Navbar;

//TODO: dodać napis satysfakcja gwarantowana kiedy skrolujesz, tlo na menu kiedy nie jest na samej górze
