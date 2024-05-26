import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Cards from './Cards';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css';

const Categories = ({challengesInfo}) => {
  const [searchQuery, setSearchQuery] = useState('');
    if (!challengesInfo || challengesInfo.length === 0) {
        return null; // or return a placeholder message or loading indicator
      }
// Get unique categories
const categories = [...new Set(challengesInfo.map(project => project.Category))];

  // Function to filter projects based on search query
  const filterProjects = project => {
    const searchString = searchQuery.toLowerCase();
    // Check if any project information matches the search query
    for (const key in project) {
      if (typeof project[key] === 'string' && project[key].toLowerCase().includes(searchString)) {
        return true;
      }
    }
    return false;
  };

return (
  <Tabs
    defaultActiveKey="all" // Use the first category as the default active key
    id="categories-tab"
    className="mb-3 custom-tabs"
    justify
  >
      <Tab eventKey='featured' title="Featured">
        {/* Filter projects by category and pass them to the Cards component */}
        <Cards challengesInfo={challengesInfo.filter(project => project.Highlight === true)} />
      </Tab>
    <Tab eventKey='all' title="All Projects">
    <Row className="justify-content-md-center">
    <Col className="search-field "md={5}>
    <Form.Control size="md" type="text" placeholder="Search projects" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
    </Col>
    </Row>
        {/* Filter projects by search query and pass them to the Cards component */}
        <Cards challengesInfo={challengesInfo.filter(filterProjects)} />
      </Tab>
    {categories.map((category, index) => (
      <Tab key={index} eventKey={category} title={category}>
        {/* Filter projects by category and pass them to the Cards component */}
        <Cards challengesInfo={challengesInfo.filter(project => project.Category === category)} />
      </Tab>
    ))}
  </Tabs>
);
}

export default Categories