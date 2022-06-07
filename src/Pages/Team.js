import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'

export default function Team() {
    return(
        <>
        <Container className='team'>
        <h2 className="text-center m-4">Our team</h2>
        <div className="row">
          <div className="col">
            <Card className="m-4 text-center" bg="light" style={{ width: '18rem' }}>
              <Card.Img
              variant="top"
              src="https://senior.ua/storage/article/content/8b337d60-7751-4324-bbed-f0b2d86173a6.jpeg"
              />
              <Card.Body>
                <Card.Title>Менеджер проєктів</Card.Title>
                <Card.Text>Це фахівець у сфері управління проєктами. Менеджер проєкту може бути відповідальним за планування, виконання та завершення будь-якого проєкту</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
                <Card className="m-4 text-center" bg="light" style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://www.profguide.io/images/article/a/7/7Y0-WkAIch.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Бекенд-розробники</Card.Title>
                        <Card.Text>Це робота над програмними засобами, спрямованими на реалізацію логіки ресурсу. Ця частина прихована від очей користувача</Card.Text>
                    </Card.Body>
                </Card>
          </div>
          <div className="col">
                <Card className="m-4 text-center" bg="light" style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://vorobus.com/wp-content/uploads/2021/03/front-end-developer.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Фронтенд-розробники</Card.Title>
                        <Card.Text>Передбачає кропітку роботу, внаслідок якої кожна іконка, кнопка або текст стоять на своєму місці, виглядають цілісно і не заважають, не перекривають один одного</Card.Text>
                    </Card.Body>
                </Card>
                </div>
            <div className="col">
                <Card className="m-4 text-center" bg="light" style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://webdesguru.com/wp-content/uploads/2020/03/v-chem-raznica-mezhdu-ux-i-ui-dizajnom-4-1024x683.png"
                    />
                    <Card.Body>
                        <Card.Title>UI/UX дизайнери</Card.Title>
                        <Card.Text>Це креативний фахівець, який проектує інтерфейси користувача. UI і UX - це два різні профілю дизайну, але найчастіше їх робить один універсальний фахівець.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="col">
                <Card className="m-4 text-center" bg="light" style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://itstolytsa.ua/images/07-it-blog/17-it-courses/2-testirovshik-programmnogo-obespecheniya-v-poiskah-oshibok.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Тестувальники</Card.Title>
                        <Card.Text>Це IT-фахівець, який займається тестуванням програмного забезпечення, виявленням та усуненням помилок у програмному коді.</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        
        </div>
      </Container>
        </>
    )
}