import { Container, Card, Row } from 'react-bootstrap';
import '../styles/home.css'


function Home() {

    return (
        <Container class='position-relative' className='all_cards'>
            <Row className='mx-2 row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2'>
                <Card className='text mb-3 border-0'>
                <p className='home_text1'>Welcome to Murwillumbahs most comprehensive guide to whats on in and around town</p>
                <p className='home_text2'>We're just doing our best OK</p>
                <p className='home_text3'>Do you have a gig to share? Are you a venue that wants to list your events? Get in touch!</p>
                </Card>
            </Row>
    </Container>
    )
}

export default Home