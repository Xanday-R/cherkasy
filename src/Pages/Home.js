import React, {Component} from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import CarouselBoxHK from '../Components/CarouselBoxHk';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBoxHK />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                          <Card.Img variant="top" src="https://qwertify.io/wp-content/uploads/2021/04/Team.jpeg"/>
                          <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Команда 1</Card.Text>
                            <Button variant="primary">About team</Button>
                          </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
                            />
                            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <Card.Title>Природознавці</Card.Title>
                                <Card.Text>Команда 2</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                  </div>
                  <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAE01zveXY8GV3FWKhi4TQ6n45uoCu-nCwemCYjhGfPKt2YQSBfOCKcGHBgkYKLUPhPQ&usqp=CAU"
                            />
                            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
                                <Card.Title>Маркетилоги</Card.Title>
                                <Card.Text>Команда 3</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
              </Container>
            </>
        );
    }
}