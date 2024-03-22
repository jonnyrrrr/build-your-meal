import Background from '../assets/images/food-bg.jpg'
import AccordionUsage from '../components/Accordion'

function About() {
  return (
    <div
    style={{ backgroundImage : `url(${Background})`}}
    className='flex flex-row place-items-center col-auto justify-center mx-auto bg-cover bg-fixed'
    >
      <AccordionUsage/>
    </div>
  )
}

export default About
