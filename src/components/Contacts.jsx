import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './styles.css';

function Contacts() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://smartchallenges.asu.edu/sites/default/files/styles/block_image_med/public/2024-03/Orr_Tom.JPG?h=a8a749e3&itok=5p2mejXF" className="contact-image" />
        <Card.Body>
          <Card.Title>Tom Orr</Card.Title>
          <Card.Text>
            Sr. Program Manager, AWS
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="mailto:orrto@amazon.com">orrto@amazon.com</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://smartchallenges.asu.edu/sites/default/files/styles/image/public/2023-04/Arun-Karthick-Approved.jpg?itok=3GZ7OxNz" className="contact-image" />
        <Card.Body>
          <Card.Title>Arun Arunachalam</Card.Title>
          <Card.Text>
            Sr. Solutions Architect, AWS
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="mailto:awsaruna@amazon.com">awsaruna@amazon.com</a></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://smartchallenges.asu.edu/sites/default/files/styles/image/public/2023-11/Colleen%20Schwab_headshot.jpg?itok=bZEah05J" className="contact-image" />
        <Card.Body>
          <Card.Title>Colleen Schwab</Card.Title>
          <Card.Text>
            Digital Innovation Lead, AWS
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href="mailto:cmschwab@amazon.com">cmschwab@amazon.com</a></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Contacts;
