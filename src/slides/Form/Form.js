import React, { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { FlexBox } from "react-styled-flex";
import { SlideContext } from "../../context/SlideContext";
import FormFields from "../../components/FormFields/FormFields";
import Navigation from '../../components/Navigation/Navigation'
import { motion, AnimatePresence } from "framer-motion"


export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: '100vh',
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '-100vh',
  },
}

function Form({setSlideHeight, isFirstSlide, isEndSlide}) {
  const { slideModel, touched } = useContext(SlideContext);
  const [showErrors, setShowErrors] = useState(false);
  const fields = slideModel.getFields()
  const id = slideModel.getId()
  const [isValid, setIsValid] = useState(false)
  const [doNotScroll, setDoNotScroll] = useState(false)

  
  const SlideRef = useRef(null);

  useEffect(() => {
    if (!setSlideHeight) return
    if(SlideRef.current){
      let SlideHeight = SlideRef.current.clientHeight;
      setSlideHeight(SlideHeight)
    }
  }, [SlideRef, setSlideHeight])

  useEffect(() => {
    if (!setSlideHeight) return
    const resizeObserver = new ResizeObserver(() => {
      if (!setSlideHeight) return
      if(SlideRef.current){
        let SlideHeight = SlideRef.current.offsetHeight;
        setSlideHeight(SlideHeight)
      }
    })
    resizeObserver.observe(SlideRef.current);
  }, [setSlideHeight])

  useEffect(() => {
    if (isEndSlide || !slideModel.getType()==='Form') return

    if (slideModel.validate()) {
      setIsValid(true)
    } else {
      setIsValid(false)
      setShowErrors(true);
    }
  }, [touched, fields, slideModel, isEndSlide])
  
  return (
    <AnimatePresence>
      <FlexBox ref={SlideRef} column center className={`slideAnimate ${isValid ? 'isValid' : 'isNotValid'}`} key={id} data-key={id}>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.35 }}
          style={{ width: '100%' }}
        >
            <FormFields doNotScroll={doNotScroll} isFirstSlide={isFirstSlide} showErrors={showErrors} fields={fields}>
              <Navigation isValid={isValid} doNotScroll={doNotScroll} setDoNotScroll={setDoNotScroll} />
            </FormFields>
        </motion.div>
      </FlexBox>      
    </AnimatePresence>
  );  
}

export default Form;