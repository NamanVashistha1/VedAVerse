import React , { useEffect, useState }  from 'react';
import Navbar from '../Components/Navbar'
import '../Styles/Knowledge.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Ebooks from '../Components/Ebooks';
import pdf1 from '../Assets/pdf1.jpg'
import pdf2 from '../Assets/pdf2.png'
import pdf3 from '../Assets/pdf3.jpg'
import pdf4 from '../Assets/pdf4.png'



function Knowledge() {
    const cardContainerStyle = {
        display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:'30px'
      };
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '1500px',
        margin: '0',     
        padding: '0', 
      };
      const text={
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        marginLeft:'30px'
      }
      
      const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // After the component has mounted, trigger the image animation
    setTimeout(() => {
      setImageLoaded(true);
    }, 450); // Adjust the delay as needed

    // Clean up the effect
    return () => {
      setImageLoaded(false);
    };
  }, []);


  return (
    <div style={{background: "linear-gradient(to right, #ECF2FF, #FBFCFF)"}}>
    <Navbar/>
     {/* <div className='container'>
  <div className='row col-12 my-2' >
    <div className='col-lg-5 col-12'>
      <img style={{height:"95%", width:"100%", borderRadius: "25px" ,boxShadow: "0px 0px 20px -5px rgba(0, 0, 0, 0.2)"}} src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=740&t=st=1695581238~exp=1695581838~hmac=24f3ac561ee8de3320e314cf3f76d10773499c38a0b91be455313d960e0cb92d" alt="" />
    </div>
    <div className="section-container col-lg-7 col-12" >
      <div className="hero-section" >
        <div className="text-section" >
          <br /><br /> <br />
          <p className="text-headline" > Get Started with ayurveda</p> 
          <h2 className="text-title">
           Know more about Ayurved and its History 🕉️
          </h2>
          <p className="text-descritpion">
            Learn more about Vedas and the indulge in the grandiose realm of Ayurved and its benefits 
          </p>
          
          <div className="text-stats">
            <div className="text-stats">
              <p>100k+</p>
              <p>Research and Resources</p>
            </div>
          </div>
        </div> 

        <div className="hero-image-section"> 
          <img className="hero-image1" src={Doctor} alt="Doctor" />
         </div>
      </div>
    </div > 
     <Ebooks ebooks={ebooks} /> 
  </div>  
  </div> */}

<section className="intro">
      <div className="container" >
        <div className="row">
          <div className="col-md-6 py-3" > 
            <h2 className="intro-title">Discover the Magic of Ayurveda🧘‍♀️</h2>
            <p className="intro-text">
              Welcome to a world where ancient wisdom meets modern wellness – Ayurveda. 🌿
            </p>
            <p className="intro-text">
              Ayurveda isn't just another health trend; it's a timeless treasure chest of
              holistic health secrets passed down through the ages. It's about harmony,
              balance, and unlocking your body's full potential.
            </p>
            <p className="intro-text">
              Dive into this journey, and you'll uncover the power of herbs, the art of
              mindfulness, and the science of self-care. Whether you're a curious explorer or
              an aspiring Ayurvedic guru, we've got everything you need to embark on a path
              towards vibrant well-being.
            </p>
            <p className="intro-text">
              Let's embrace the balance of mind, body, and spirit. Are you ready to embark on a
              transformative adventure?
            </p>
          </div>
          <div className="col-md-6">
            <img style={{height:"95%", width:"100%", borderRadius: "25px" ,boxShadow: "0px 0px 20px -5px rgba(0, 0, 0, 0.2)"}} src="https://4.bp.blogspot.com/-mdO6kmA2KeM/XApehr93OwI/AAAAAAAADa4/zG8LibYlZL45QDsi5a-SMybGxFwpTYbygCLcBGAs/s1600/meditation_blue_sun.jpg" alt="Ayurveda" className={`img-fluid sliding-image ${imageLoaded ? 'slide-in' : ''}`} />
          </div>
        </div>
      </div>
    </section>


    <Container style={cardContainerStyle}>
    <Card style={cardStyle} >
      <Card.Body  >
        <div className='row col-12'>
        <div className='col-lg-6 col-12'>
      <iframe src="https://www.youtube.com/embed/_6TYky-ZU48" style={{width:"100%", height:"350px"}} ></iframe>
      </div>
      <div className='col-lg-6 col-12'>
        <Card.Title style={text} className='mt-5'>In Vedas</Card.Title>
        <Card.Text style={text}>
 Ayurveda means Study of Life <br/>Ancient medicine system of india
Ayurveda's core principles are based on the Vedas, particularly the Atharva Veda and Rig Veda, where it finds mention. This holistic system of medicine emphasizes balance and harmony within the body, mind, and spirit. It recognizes the significance of the doshas (Vata, Pitta, Kapha) and places great importance on personalized, natural remedies, including herbal medicines, diet, and lifestyle choices.
        </Card.Text>
        </div>
        </div>
      </Card.Body>
    </Card>
    </Container>

    <Container style={cardContainerStyle}>
    <Card style={cardStyle} >
      <Card.Body  >
        <div className='row col-12'>
        <div className='col-lg-6 col-12'>
      <iframe src="https://www.youtube.com/embed/HzTvEK1sVi0" style={{width:"100%", height:"350px"}} ></iframe>
      </div>
      <div className='col-lg-6 col-12'>
        <Card.Title style={text} className='mt-5'>TEDx Talk By Dr.BM Hegde</Card.Title>
        <Card.Text style={text}>
        Dr.BM Hegde speaks on the idea of how the ayurvedic medicines are far better for the human body than western medicines. He talks about important theories on how the human body actually functions with a given environment and how Ayurveda blends  itself with the human body. Dr.Hegde speaks about the importance of meta medicines which would eventually decide the health factor of humans on earth. 
        </Card.Text>
        </div>
        </div>
      </Card.Body>
    </Card>
    </Container>

    <Container style={cardContainerStyle}>
    <Card style={cardStyle} >
      <Card.Body  >
        <div className='row col-12'>
        <div className='col-lg-6 col-12'>
      <iframe src="https://www.youtube.com/embed/KXWot5eeqoM" style={{width:"100%", height:"350px"}} ></iframe>
      </div>
      <div className='col-lg-6 col-12'>
        <Card.Title style={text} className='mt-5'>The Untold Story of AYURVEDAM </Card.Title>
        <Card.Text style={text}>
        Ayurveda is considered by many scholars to be the oldest healing science. In Sanskrit, Ayurveda means “The Science of Life.” Ayurvedic knowledge originated in India thousands of years ago and is the “Mother of All Healing.” This is an untold story about Ayurvedam.
        </Card.Text>
        </div>
        </div>
      </Card.Body>
    </Card>
    </Container>
        
        
    <Container style={cardContainerStyle}>
    <Card style={cardStyle} >
      <Card.Body  >
        <div className='row col-12'>
        <div className='col-lg-6 col-12'>
        <Ebooks pdfUrl="https://www.ayurveda.com/pdf/intro_ayurveda.pdf" pdf1={pdf1} pdf2={pdf2} />
      </div>
      <div className='col-lg-6 col-12'>
        <Card.Title style={text} className='mt-5'>The Science Of Life</Card.Title>
        <Card.Text style={text}>
        Ayurveda, often called the "Science of Life," is an ancient Indian holistic healthcare system that emphasizes balance and harmony. It views individuals as unique combinations of physical, mental, and spiritual elements, seeking to restore and maintain health by addressing the balance of fundamental energies called doshas. Ayurveda offers personalized, natural remedies such as herbs, diet, yoga, and meditation, considering each person's constitution and specific health needs. It combines preventive practices with curative treatments, emphasizing the profound mind-body connection and timeless principles for well-being.
        </Card.Text>
        </div>
        </div>
      </Card.Body>
    </Card>
    </Container>

    <Container style={cardContainerStyle}>
    <Card style={cardStyle} >
      <Card.Body  >
        <div className='row col-12'>
        <div className='col-lg-6 col-12'>
        <Ebooks pdfUrl="http://ccras.nic.in/sites/default/files/II%20Ayurveda%20Day/Ayurvedic%20%20Home%20Remedies%20English.pdf" pdf1={pdf3} pdf2={pdf4} />
      </div>
      <div className='col-lg-6 col-12'>
        <Card.Title style={text} className='mt-5'>AYURVEDIC HOME REMEDIES</Card.Title>
        <Card.Text style={text}>
        Most of the diseases arise due to improper food habits
and faulty life style besides hereditary and other reasons.
Mankind has constantly grappled with ill health and tried to
achieve health & happiness. These efforts are on from time
immemorial. These endeavors have thrown up various
systems of medicine. Ayurveda is one such system evolved
in India, which tries to bring harmony between man & nature
by using holistic methods of diagnosis, prevention and
treatment. Like all other Indian contributions
        </Card.Text>
        </div>
        </div>
      </Card.Body>
    </Card>
    </Container>
    </div>
  )
}

export default Knowledge