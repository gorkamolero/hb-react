import React, { useContext, useState } from 'react';
import { SlideContext } from "../../../context/SlideContext";
import { FlexBox } from "react-styled-flex";
import { HbSection } from '../../../visly/Pages'
import { HbWave, colors, useBreakpoint, HbSliderArrow, HbCircleIcon, icons } from '../../../visly'
import { HbTestimonial } from '../../../visly/Compounds'
import Carousel from 'nuka-carousel'
import ReadMoreAndLess from 'react-read-more-less';

const Testimonial = ({testimonial, resize}) => {
  return (
    <HbTestimonial
      className="HbTestimonial"
      imageSrc={testimonial.Photo}
      style={{ outline: 'none', border: 'none' }}
      title={testimonial.Title}
      client={testimonial.Name}
      dog={`Breed: ${testimonial.Breed} - Age: ${testimonial.Age} - Pickiness: ${testimonial.Pickiness}`}
      stars={<FlexBox gap={5}>
        {[...Array(5).keys()].map((i) => (<HbCircleIcon key={i} justEmoji icon={icons.hbStar} />))}
      </FlexBox>}

      Texto={
        <div className="read-more-testimonials" onClick={() => resize()}>
          <ReadMoreAndLess
            className="read-more-content"
            charLimit={250}
            readMoreText="Read more"
            readLessText="Read less"
            >
              {testimonial.Content}
          </ReadMoreAndLess>
        </div>
      }
    />

  )
}

const Testimonials = ({title}) => {
  const { getDatasheet } = useContext(SlideContext)
  const [ testimonials, setTestimonials ] = useState([])
  const resize = () => {
    window.dispatchEvent(new Event('resize'));
  }

  React.useEffect(() => {
    const id = '1XaJ9jNcSLz'
    const getTestimonials = async () => {
      try {
        let testimonials = await getDatasheet([{id}])
        // console.log(testimonials)
        testimonials = testimonials.result[id]
        setTestimonials(testimonials)
      } catch(err) {
        console.error(err)
      }
    }

    getTestimonials()
  }, [getDatasheet])

  
  const size = useBreakpoint("small", ["medium", "large", "large"]);
  const settings = {
    slidesToShow: size === 'large' ? 3 : size === 'medium' ? 2 : 1,
    renderCenterLeftControls: ({ previousSlide }) => <HbSliderArrow reverse onClick={ previousSlide }/>,
    renderCenterRightControls: ({nextSlide}) => <HbSliderArrow onClick={ nextSlide } />,
    framePadding: size === 'small' ? '20px 10px 80px' : '0 0 80px',
    cellSpacing: 20,
    frameOverflow: 'hidden',
    defaultControlsConfig: {
      pagingDotsStyle: {
        fill: colors.hbBrown,
      },
      pagingDotsClassName: "pagingDots"
    }
  };

  return (
    <HbSection
      noMaxWidth
      waveslot1={<HbWave style={{ transform: 'scaleX(-1)' }} dark />}
      column
      alignItems="center"
      className="wave"
      title={title || "What Dog Owners Like You Are Saying"}
      style={{ backgroundColor: colors.hbYellow, paddingBottom: 20, overflow: 'hidden' }}
    >
      <Carousel {...settings}>
        {
          testimonials.map( (testimonial, i) => (
              <Testimonial
                resize={resize}
                key={i}
                testimonial={testimonial}
              />
          ))
        }
      </Carousel>
    </HbSection>
  );
}
 
export default Testimonials;