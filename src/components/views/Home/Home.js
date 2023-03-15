import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <Container className="d-flex text-end my-5">
      <Col className={styles.col}>
        <h1>Rule the galaxy!</h1>
        <h2>Make alliance!</h2>
        <h3>The warriors are many, but the leader can be one!</h3>
        <Button>Click to play!</Button>
      </Col>
    </Container>
  )
}

export default Home
