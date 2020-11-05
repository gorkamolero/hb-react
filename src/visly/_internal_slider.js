// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import assert from "assert";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { mergeProps } from "@visly/core";
import { combineRef, exists, renderChildren } from "./_internal_utils";
import { usePrimitive } from "./_internal_usePrimitive";

const snap = (value, steps) => {
  const snapped = steps.find((s) => s.start <= value && s.end >= value);
  return exists(snapped) ? snapped.value : value;
};

const clamp = (value, min, max) => {
  return Math.min(max, Math.max(min, value));
};

export class SlideHandler {
  constructor({ trackDOM, value, max, min, steps }) {
    this.trackDOM = trackDOM;
    this.value = value;
    this.max = max;
    this.min = min;
    this.steps = steps;
  }

  getNextStep(direction) {
    if (!exists(this.steps)) {
      return undefined;
    }

    const currentIndex = this.steps.findIndex(
      (s) => s.start <= this.value && s.end >= this.value
    );

    if (exists(currentIndex)) {
      const currentStep = this.steps[currentIndex];
      const stepBy =
        this.value === currentStep.value
          ? direction
          : this.value < currentStep.value && direction === 1
          ? 0
          : this.value > currentStep.value && direction === -1
          ? 0
          : direction;
      return this.steps[currentIndex + stepBy];
    }

    return undefined;
  }

  getNextValue(direction) {
    const step = (this.max - this.min) / 10;
    return this.value + direction * step;
  }

  getProgress() {
    return this.value / this.max - this.min;
  }

  updateValueFromPointerEvent(event) {
    const trackRect = this.trackDOM.getBoundingClientRect();
    const touchX = event.x;
    const progress = (touchX - trackRect.x) / trackRect.width;
    const value = this.min + progress * (this.max - this.min);
    const snapped = exists(this.steps) ? snap(value, this.steps) : value;
    return clamp(snapped, this.min, this.max);
  }

  updateValueFromStep(direction) {
    const next = this.getNextStep(direction);
    return clamp(
      exists(next) ? next.value : this.getNextValue(direction),
      this.min,
      this.max
    );
  }
}
export const calculateSteps = (min, max, stepSize) => {
  const values = [];
  let value = min;

  while (value < max) {
    values.push(value);
    value = value + stepSize;
  }

  values.push(max);
  return values.reduce((sections, value, index) => {
    const prevValue = values[index - 1];
    const nextValue = values[index + 1];
    const start = exists(prevValue) ? value - (value - prevValue) / 2 : value;
    const end = exists(nextValue) ? value + (nextValue - value) / 2 : value;
    return [
      ...sections,
      {
        start: start,
        end: end,
        value,
      },
    ];
  }, []);
};
export const SliderContext = createContext({
  handler: undefined,
  trackRef: undefined,
});
export const SliderContextProvider = ({ min, max, value, step, children }) => {
  assert(max > min, "max must be greater than min");
  const [handler, setHandler] = useState(undefined);
  const trackRef = useRef(null);
  const steps = useMemo(() => {
    return step !== undefined && step > 0
      ? calculateSteps(min, max, step)
      : undefined;
  }, [step, min, max]);
  useEffect(() => {
    if (trackRef.current !== null) {
      setHandler(
        new SlideHandler({
          value,
          min,
          max,
          trackDOM: trackRef.current,
          steps,
        })
      );
    }
  }, [value, min, max, steps]);
  const contextValue = useMemo(
    () => ({
      handler,
      trackRef,
    }),
    [handler, trackRef]
  );
  return (
    <SliderContext.Provider value={contextValue}>
      {children}
    </SliderContext.Provider>
  );
};
export const SliderStyles = {
  thumb: (progress) => ({
    position: "absolute",
    left: `${progress * 100}%`,
    transform: "translate(-50%)",
  }),
  track: {
    position: "relative",
    overflow: "visible",
    alignItems: "center",
  },
  progress: (progress) => ({
    width: `${progress * 100}%`,
    height: "100%",
  }),
  root: {
    position: "relative",
  },
};
export const SliderTrack = ({ className, id, children, measureRef }) => {
  const { trackRef } = useContext(SliderContext);
  return (
    <div
      ref={combineRef(trackRef, measureRef)}
      className={className}
      id={id}
      style={SliderStyles.track}
    >
      {children}
    </div>
  );
};
export const SliderThumb = ({ className, id, measureRef }) => {
  const { handler } = useContext(SliderContext);
  const style = exists(handler)
    ? SliderStyles.thumb(handler.getProgress())
    : undefined;
  return <div ref={measureRef} id={id} style={style} className={className} />;
};
export const SliderProgress = ({ className, id, measureRef }) => {
  const { handler } = useContext(SliderContext);
  const style = exists(handler)
    ? SliderStyles.progress(handler.getProgress())
    : undefined;
  return <div ref={measureRef} id={id} className={className} style={style} />;
};
export function SliderRoot(props) {
  const { min = 0, max = 100, value = 50, ...rest } = props;
  return (
    <SliderContextProvider min={min} max={max} value={value} {...rest}>
      <_SliderRoot min={min} max={max} value={value} {...rest} />
    </SliderContextProvider>
  );
}

const _SliderRoot = (props) => {
  const { onChange = () => {} } = props;
  const { handler } = useContext(SliderContext);
  const onStepUpdate = useCallback(
    (direction) => {
      if (exists(handler)) {
        onChange(handler.updateValueFromStep(direction));
      }
    },
    [onChange, handler]
  );
  const setStepToMin = useCallback(() => {
    if (exists(handler)) {
      onChange(handler.min);
    }
  }, [onChange, handler]);
  const setStepToMax = useCallback(() => {
    if (exists(handler)) {
      onChange(handler.max);
    }
  }, [onChange, handler]);
  const defaultOnKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowDown":
          onStepUpdate(-1);
          break;

        case "ArrowRight":
        case "ArrowUp":
          onStepUpdate(1);
          break;

        case "Home":
          setStepToMin();
          break;

        case "End":
          setStepToMax();
          break;
      }
    },
    [onStepUpdate, setStepToMin, setStepToMax]
  );
  const ref = useRef();
  const onPointerUpdate = useCallback(
    (event) => {
      if (exists(handler)) {
        onChange(handler.updateValueFromPointerEvent(event));
      }
    },
    [onChange, handler]
  );
  const onPointerDown = useCallback(
    (event) => {
      setIsTracking(true);
      onPointerUpdate(event.nativeEvent);
      event.preventDefault();
    },
    [onPointerUpdate]
  );
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ref,
    props: mergeProps(props, {
      onKeyDown: defaultOnKeyDown,
      onPointerDown,
    }),
  });
  const [isTracking, setIsTracking] = useState(false);
  const onPointerUp = useCallback(() => {
    setIsTracking(false);
  }, []);
  const onPointerMove = useCallback(
    (event) => {
      if (isTracking) {
        onPointerUpdate(event);
      }
    },
    [isTracking, onPointerUpdate]
  );
  useEffect(() => {
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [onPointerUp, onPointerMove]);
  return (
    <div
      tabIndex={0}
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...vislyProps}
      style={{ ...style, touchAction: "none", ...SliderStyles.root }}
      role="slider"
      aria-valuenow={exists(handler) ? handler.value : undefined}
      aria-valuemin={exists(handler) ? handler.min : undefined}
      aria-valuemax={exists(handler) ? handler.max : undefined}
    >
      {renderChildren(props.children, values)}
    </div>
  );
};
