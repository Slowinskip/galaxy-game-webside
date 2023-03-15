import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <Container className={styles.row}>
      <Row>
        <Col lg={12} className={styles.col}>
          <h1>Rule the galaxy!</h1>
          <h2>Make alliance!</h2>
          <Button className={styles.button}>Click to play!</Button>
        </Col>
      </Row>
      <Col lg={12} className={styles.homeFooter}>
        <h3>The warriors are many, but the leader can be one!</h3>
      </Col>
    </Container>
  )
}

export default Home
