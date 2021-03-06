import React, { useContext, useMemo, useEffect } from "react";
import {
  HbProgress,
  HbProgressStep,
} from "../../visly";
import { SlideContext } from "../../context/SlideContext";

const ProgressBar = ({size}) => {
  const { progress, progressBar, slideModel } = useContext(SlideContext);

  // console.log(progress, progressBar)

  const [activeStep, setActiveStep] = React.useState({})
  
  useEffect(() =>  {
    let el
    if (slideModel.getType() === 'End') {
      el = progressBar.find((el) => el.slideId === 'end');
    } else {
      el = progressBar.find((el) => el.slideId === slideModel.id);
    }
    setActiveStep(el);
  }, [slideModel, progressBar])

  const steps = useMemo(() => progressBar.map(step => step.slideId), [progressBar])

  const pastSteps = useMemo(() => {
    if (activeStep) {
      const active = steps.indexOf(activeStep.slideId)
      return steps.slice(0, active)
    } else return null
  }, [activeStep, steps])

  return (
    <HbProgress
      // style={{ pointerEvents: "none" }}
      HbProgressBar={<HbProgress.HbProgressBar value={progress / 100} />}
    >
      {progressBar.map(({ title, slideId }, i) => {
        if (!title) return null;
        if (progressBar[i - 1] && progressBar[i-1].title === title) return null;

        const isActiveStep = activeStep.slideId === slideId || activeStep.title === title;
        const isNextStep = progressBar.findIndex(el => el.id === activeStep.id) + 1 === i
        const isPrevStep = pastSteps.includes(slideId)

        return (
          <HbProgressStep
            size={size}
            key={slideId}
            stepTitle={title}
            HbActiveStep={isActiveStep}
            HbFutureStep={!isActiveStep && !isNextStep}
            HbPastStep={!isActiveStep && isPrevStep}
          ></HbProgressStep>
        );
      })}
    </HbProgress>
  );
};

export default ProgressBar;
