import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import styles from './Navbar.module.scss'
import { FaSpaceShuttle } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Row>
          <Col className={styles.icon}>
            <FaSpaceShuttle />
          </Col>
          {window.innerWidth < 500 ? (
            <Col className="d-flex justify-content-end align-items-center">
              <Dropdown className="">
                <Dropdown.Toggle
                  className={styles.dropDownMenu}
                  variant="Secondary"
                  id="dropdown-basic"
                >
                  <AiOutlineMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className={'text-center ' + styles.dropDownMenu}
                  variant="dark"
                >
                  <Dropdown.Item className={styles.dropItem} href="#">
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropItem} href="#">
                    About
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropItem} href="#">
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.dropItem} href="#">
                    Register
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          ) : (
            <Col className={styles.links}>
              <a href="">Home</a>
              <a href="">About us</a>
              <a href="">Login</a>
              <a href="">Register</a>
            </Col>
          )}
        </Row>
      </Container>
    </nav>
  )
}

export default Navbar
