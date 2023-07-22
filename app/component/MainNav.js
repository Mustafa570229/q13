"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
 import styles from '@/app/component/MainNav.module.css'

function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className={styles.logo} href="/">Kyoo</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.links + " me-auto"}>
            <Link href="/The-journey-of-certainty">The Journey of Certainty</Link>
            <Link href="/chains">Chains</Link>
            <Link href="/Stories">Stories</Link>
            <Link href="/Mix">mix</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;