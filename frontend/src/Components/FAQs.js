import React, { useState } from "react";
// import "../Styles/Reviews.css";
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <div className="container" style={{textAlign:"center"}} id="faq">
      <h4 className="py-4">FAQs related to Ayurveda & Allopathy</h4>
    <Accordion style={{fontSize:"larger"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the primary difference between Ayurveda and Allopathy?</Accordion.Header>
        <Accordion.Body>
        Ayurveda is a traditional system of medicine that focuses on holistic well-being and natural remedies, while Allopathy, also known as conventional medicine, relies on pharmaceutical drugs and surgery to treat specific symptoms and diseases.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are Ayurvedic treatments safe to use alongside Allopathic medications?</Accordion.Header>
        <Accordion.Body>
        It's essential to consult with a healthcare professional before combining Ayurvedic treatments with Allopathic medications to ensure they are safe and do not interact adversely. Some Ayurvedic herbs and therapies may complement conventional treatments, but others may interfere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can Ayurveda help manage chronic conditions like diabetes and hypertension?</Accordion.Header>
        <Accordion.Body>
        Ayurveda offers holistic approaches to manage chronic conditions by focusing on lifestyle, diet, and natural remedies. It can be used as a complementary therapy, but it's crucial to consult with a healthcare provider to create a comprehensive treatment plan.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the key principles of Ayurveda, and how do they differ from Allopathic principles of diagnosis and treatment?</Accordion.Header>
        <Accordion.Body>
        Ayurveda is based on principles of balance between body, mind, and spirit, with individualized treatments based on one's dosha (constitution). Allopathy relies on diagnosis through lab tests and imaging and treatments targeting specific symptoms or pathogens.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{paddingBottom:"4px"}}>
        <Accordion.Header>Are there any research studies comparing the effectiveness of Ayurvedic and Allopathic treatments for common health issues?</Accordion.Header>
        <Accordion.Body>
        Yes, there have been research studies comparing the effectiveness of Ayurvedic and Allopathic treatments for various health issues. Some studies suggest that Ayurvedic therapies may be effective in certain cases, while others highlight the benefits of Allopathic treatments. The choice of treatment should be based on individual needs and consultation with a healthcare professional.        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <br />
    </div>
  );
}

export default AllCollapseExample;