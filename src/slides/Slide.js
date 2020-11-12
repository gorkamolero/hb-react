import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import { ModalProvider } from "react-modal-hook";
import { FlexBox } from "react-styled-flex";
import { SlideContext } from '../context/SlideContext';
import Utils from '../utils/Utils'
import Cover from '../slides/Cover/Cover';
import Filter from '../slides/Filter/Filter';
import Info from '../slides/Info/Info';
import Feedback from '../slides/Feedback/Feedback';
import Form from '../slides/Form/Form';
import End from '../slides/End/End';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { HbHeader, useBreakpoint, HbFirstSlideFooter } from "../visly";
import { HbContainer, HbTitle, HbSubtitle } from "../styles/StyledComps";
import LargeBG from '../assets/images/svg-bg-large.svg'
import MidBG from '../assets/images/svg-bg-medium.svg'
import SmallBG from '../assets/images/svg-bg-small.svg'
import Bowl from '../assets/images/Bowl.png'

const SlideView = ({slideModel, ...rest}) => {
  const type = useMemo(() => slideModel.getType(), [slideModel])

  return (
    <>
      {
        {
          'Cover':  <Cover />,
          'Filter':<Filter />,
          'Info':<Info />,
          'Feedback':<Feedback />,
          'Form':<Form {...rest} />,
          'End':<End />,
        }[type]
      }
    </>
  )
}

const Slide = () => {
    const { slideModel, interpolate, progressBar } = useContext(SlideContext);
    const [slideId, setSlideId] = useState(null);
    const size = useBreakpoint("small", ["medium", "large", "super"]);
    const [slideHeight, setSlideHeight] = useState(0)

    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
      if (size) console.log(size) 
      // window.dispatchEvent(new Event('resize'));
    }, [size])
    
    const HeadRef = useRef(null);

    useEffect(() => {
      if (size === 'small') return
      if(HeadRef.current){
        let HeadHeight = HeadRef.current.offsetHeight;
        setHeaderHeight(HeadHeight)
      }
    }, [HeadRef, size])

    useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
        if(HeadRef.current){
          let HeadHeight = HeadRef.current.offsetHeight;
          setHeaderHeight(HeadHeight)
        }
      })
      resizeObserver.observe(document.body);
    }, [])


    React.useEffect(() => {
      if (slideId !== slideModel.getId()) setSlideId(slideModel.getId());
    }, [slideModel, slideId])

    const slideTitle = useMemo(() => progressBar.find(step => step.slideId === slideModel.getId()).title, [slideModel, progressBar])
    const title = useMemo(() => interpolate(Utils.stripHtml(slideModel.getTitle())), [slideModel, interpolate])
    const subtitle = useMemo(() => interpolate(Utils.stripHtml(slideModel.getSubtitle())), [slideModel, interpolate])
    const type = useMemo(() => slideModel.getType(), [slideModel])

    const Container = slideModel.getType() === 'End' ? FlexBox : HbContainer
    const isEndSlide = slideModel.getType() === 'End'
    /* eslint-disable */
    const isFirstSlide = slideId == 101 
    /* eslint-enable */

    return (
      <div>
      {/* <div style={{ height: '100vh', overflow: 'hidden' }}> */}
        <ModalProvider>
          <FlexBox column center className={`slide-${type} slide-${slideId && slideId} animate`}>
            <div className="HbHeadContainer" ref={HeadRef}>
              <HbHeader
                className="HbHeader"
                TitleSlot={<HbTitle data-size={size} size={size} className="title" html={title} />}
                SubtitleSlot={<HbSubtitle data-size={size} size={size} className="subtitle" html={subtitle} />}
                HbLogo={<HbHeader.HbLogo className="HbLogo" onClick={event =>  window.location.href='/'} />}
                HbProgress={<ProgressBar size={size} />}
                HbProgressMobile={<ProgressBar size={size} />}
                HbCircleIcon={<HbHeader.HbCircleIcon />}
                bg={size === "small" ? SmallBG : size === "medium" ? MidBG : LargeBG}
                extraImage={Bowl}
                extraImageT={Bowl}
                size={size === 'large' ? 'super' : size}
                discount="20% Off"
                discount2={isEndSlide ? '$50+ Ships Free' : ''}
                ShowImage={slideTitle === 'Profile'}
                NoWave={ isEndSlide }
                withVideo={ isEndSlide }
                style={{ position: 'fixed !important', top: 0 }}
              />
            </div>
            <FlexBox
              is="main"
              column
              alignItems="center"
              style={{
                position: 'relative',
                zIndex: isEndSlide ? 3 : isFirstSlide ? 2 : 0,
                marginTop: (!isEndSlide && size !=='small') ? headerHeight - 40 : 0,
                flex: 1
            }}>
              <Container style={{ width: '100%', position: 'relative', marginTop: isEndSlide ? -20 : 0 }} alignItems="center" column>
                <SlideView setSlideHeight={size === 'small' && isFirstSlide ? setSlideHeight : null} slideModel={slideModel} />
              </Container>
            </FlexBox>

            {
              
              slideId && isFirstSlide && (
                <div className="slideFooter" style={{ marginTop: slideHeight }}>
                  <HbFirstSlideFooter
                    size={size === 'super' ? 'large' : size}
                  />
                </div>
              )
            }
          </FlexBox>
        </ModalProvider>
      </div>
    );
};

Slide.whyDidYouRender = true

export default Slide
