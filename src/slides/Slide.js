import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import { FlexBox } from "react-styled-flex";
import { SlideContext } from '../context/SlideContext';
import Utils from '../utils/Utils'
// import Cover from '../slides/Cover/Cover';
// import Filter from '../slides/Filter/Filter';
// import Info from '../slides/Info/Info';
// import Feedback from '../slides/Feedback/Feedback';
import Form from '../slides/Form/Form';
import End from '../slides/End/End';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { HbHeader, useBreakpoint } from "../visly";
import { HbContainer, HbTitle, HbSubtitle } from "../styles/StyledComps";
import LargeBG from '../assets/images/svg-bg-large.svg'
import MidBG from '../assets/images/svg-bg-medium.svg'
import SmallBG from '../assets/images/svg-bg-small.svg'
import Bowl from '../assets/images/Bowl.png'

const SlideView = ({slideModel, ...rest}) => {
  const type = useMemo(() => slideModel.getType(), [slideModel])

  return (
    <FlexBox column center style={{ width: '100%' }}>
      {
        {
          // 'Cover':  <Cover />,
          // 'Filter':<Filter />,
          // 'Info':<Info />,
          // 'Feedback':<Feedback />,
          'Form':<Form {...rest} />,
          'End':<End {...rest} />,
        }[type]
      }
    </FlexBox>
  )
}

const Slide = () => {
    const { slideModel, interpolate, progressBar } = useContext(SlideContext);
    const [slideId, setSlideId] = useState(null);
    const size = useBreakpoint("small", ["medium", "large", "super"]);
    const [loading, setLoading] = useState(true)
    const [marginTop, setMarginTop] = useState(0)
    // const [slideHeight, setSlideHeight] = useState(0)
    const HeadRef = useRef(null);
    const isEndSlide = slideModel.getType() === 'End'
    /* eslint-disable */
    const isFirstSlide = slideId == 101 
    const isSecondSlide = slideId == 124

    useEffect(() => {
      if(HeadRef.current){
        let HeadHeight = HeadRef.current.offsetHeight;
        
        
        if (isEndSlide || size === 'small') setMarginTop(0)
        if(size !=='small' && size !== 'medium') setMarginTop(HeadHeight - 40)
      }
    }, [size])

    useEffect(() => console.log(marginTop), [marginTop])


    React.useEffect(() => {
      if (slideId !== slideModel.getId()) setSlideId(slideModel.getId());
    }, [slideModel, slideId])

    const slideTitle = useMemo(() => progressBar.find(step => step.slideId === slideModel.getId()).title, [slideModel, progressBar])
    const title = useMemo(() => interpolate(Utils.stripHtml(slideModel.getTitle())), [slideModel, interpolate])
    const subtitle = useMemo(() => interpolate(Utils.stripHtml(slideModel.getSubtitle())), [slideModel, interpolate])

    const type = useMemo(() => slideModel.getType(), [slideModel])
    
    const nextSlideIsEndSlide = useMemo(() => {
      const me = progressBar.find((el) => el.slideId === slideModel.id);
      const next = progressBar[progressBar.indexOf(me) + 1]
      return (next.slideId === 'end')
    }, [progressBar, slideModel])

    const Container = slideModel.getType() === 'End' ? FlexBox : HbContainer
    /* eslint-enable */

    if (!Container) return null

    const style = {
        position: 'relative',
        zIndex: isEndSlide ? 999 : isFirstSlide ? 2 : 0,
        marginTop: isEndSlide ? 0 : marginTop,
        flex: 1
    }
    return (
      <FlexBox column center className={`slide-${type} slide-${slideId && slideId} animate`}>
        <div className={`HbHeadContainer ${(!slideTitle === 'Profile' || isEndSlide) ? 'hidingImage' : 'showingImage'} ${isEndSlide ? 'isEndSlide' : 'isNotEndSlide'} ${nextSlideIsEndSlide ? 'nextSlideIsEndSlide' : ''}`} ref={HeadRef}>
          <HbHeader
            className={`HbHeader ${(!slideTitle === 'Profile' || isEndSlide) ? 'hideImage' : ''} ${loading && isEndSlide ? 'isLoading' : 'finishedLoading'} ${!title && !subtitle ? 'noTitleNoSubtitle' : ''} ${title && !subtitle ? 'titleNoSubtitle' : ''} ${!title && subtitle ? 'noTitleSubtitle' : ''} ${isFirstSlide ? 'isFirstSlide' : ''} ${isSecondSlide ? 'isSecondSlide' : ''} `}
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
            discount={ window.hungry.values.discountHeader1 }
            discount2={isEndSlide ? window.hungry.values.discountHeader2 : ''}
            NoWave={ isEndSlide }
            withVideo={ isEndSlide }
            style={{ position: 'fixed !important', top: 0 }}
            noTitleNoSubtitle={!title && !subtitle}
          />
        </div>
        <FlexBox
          is="main"
          column
          alignItems="center"
          className={`${nextSlideIsEndSlide ? "main-nextSlideIsEndSlide" : ''} ${loading && isEndSlide ? 'isLoading' : 'finishedLoading'} `}
          style={style}>
          <Container style={{ width: '100%', position: 'relative', marginTop: 0 }} alignItems="center" column>
            <SlideView isEndSlide={isEndSlide} isFirstSlide={isFirstSlide} loading={loading} setLoading={setLoading} slideModel={slideModel} />
            {/*  setSlideHeight={size === 'small' && isFirstSlide ? setSlideHeight : null}  */}
          </Container>
        </FlexBox>

        {/* {
          
          slideId && isFirstSlide && (
            <div className="slideFooter" style={{ marginTop: slideHeight }}>
              <HbFirstSlideFooter
                size={size === 'super' ? 'large' : size}
              />
            </div>
          )
        } */}
      </FlexBox>
    );
};

export default Slide
