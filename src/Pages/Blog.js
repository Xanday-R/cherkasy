import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <>
      <Container className='for_blog'>
        <Row>
            <Col md="8">
              <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img width={150} height={150} className="mr-3" src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>Lorem</p>
                    </div>
                </div>

                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img width={150} height={150} className="mr-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1W_8Di42aXIbF9-8mJnaTyJGOze-VcDANg&usqp=CAU" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>
                            Lorem
                        </p>
                    </div>
                </div>

                <div className="d-flex align-items-center me-5">
                    <div className="flex-shrink-0">
                        <img width={150} height={150} className="mr-3" src="https://longleafbusinesspark.com/wp-content/uploads/2020/07/Work-From-Home-Business-Industry1.jpg"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5>Blog post</h5>
                        <p>
                            Lorem
                        </p>
                    </div>
                </div>
            </Col>
            <Col md="3">
                <h5 className="text-center mt-5">Категорії</h5>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Категорія 1</ListGroup.Item>
                        <ListGroup.Item>Категорія 2</ListGroup.Item>
                        <ListGroup.Item>Категорія 3</ListGroup.Item>
                        <ListGroup.Item>Категорія 4</ListGroup.Item>
                        <ListGroup.Item>Категорія 5</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card className="mt-3 bg-light">
                    <Card.Body>
                        <Card.Title>Slide widget</Card.Title>
                        <Card.Text>Lorem</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
      </>  
    )
  }
}