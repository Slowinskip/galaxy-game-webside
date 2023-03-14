import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Navbar.module.scss'
import { GiSpaceSuit } from 'react-icons/gi'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Row>
          <Col className={styles.icon}>
            <GiSpaceSuit />
          </Col>
          <Col className={styles.links}>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Login</a>
            <a href="">Register</a>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Navbar
