// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useState, createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import {
  exists,
  useRect,
  useTimeout,
  renderChildren,
  combineRef,
} from "./_internal_utils";
import { usePrimitive } from "./_internal_usePrimitive";
export let Gravity;

(function (Gravity) {
  Gravity[(Gravity["Top"] = 0)] = "Top";
  Gravity[(Gravity["Bottom"] = 1)] = "Bottom";
  Gravity[(Gravity["Left"] = 2)] = "Left";
  Gravity[(Gravity["Right"] = 3)] = "Right";
})(Gravity || (Gravity = {}));

export function gravityStringToEnum(g) {
  return g === "left"
    ? Gravity.Left
    : g === "right"
    ? Gravity.Right
    : g === "top"
    ? Gravity.Top
    : g === "bottom"
    ? Gravity.Bottom
    : Gravity.Bottom;
}
const TooltipContext = createContext(null);
export function TooltipRoot(props) {
  const { innerRef, values, style, vislyProps } = usePrimitive({
    ref: null,
    props,
    isInteractive: false,
  });
  const gravity = gravityStringToEnum(props.gravity);
  const delayMs = props.delayMs;
  const renderInline = props.renderInline || false;
  return (
    <TooltipContext.Provider
      value={{
        delayMs,
        gravity,
        renderInline,
        color: values[props.internal.layerId].arrowColor,
        measureRef: props.measureRef,
      }}
    >
      <Tooltip
        style={style}
        content={
          <div
            ref={combineRef(innerRef, props.measureRef)}
            {...vislyProps}
            role="tooltip"
            style={{
              overflow: "visible",
              position: "relative",
            }}
          >
            {renderChildren(props.internalChildren, values)}
          </div>
        }
      >
        {props.children}
      </Tooltip>
    </TooltipContext.Provider>
  );
}
export function TooltipArrow(props) {
  const { color, gravity } = useContext(TooltipContext);
  const arrowStyles = {
    position: "absolute",
    content: "",
    backgroundColor: color,
    alignSelf: "center",
    ...arrow(gravity),
  };
  return (
    <div
      style={arrowStyles}
      id="arrow"
      className={props.className}
      ref={props.measureRef}
    />
  );
}
const MARGIN = 10;
export function Tooltip(props) {
  const { renderInline } = useContext(TooltipContext);
  const [showing, setShowing] = useState(false);
  const ref = useRef(null);

  const onMouseEnter = () => setShowing(true);

  const onMouseLeave = () => setShowing(false);

  if (renderInline) {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
        }}
      >
        <TooltipImpl outerRef={ref}>{props.content}</TooltipImpl>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={props.style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showing
        ? createPortal(
            <TooltipImplDelayed outerRef={ref}>
              {props.content}
            </TooltipImplDelayed>,
            document.body
          )
        : null}
      {props.children}
    </div>
  );
}

function TooltipImplDelayed(props) {
  const { delayMs } = useContext(TooltipContext);
  const [showing, setShowing] = useState(false);
  const animationSettings = {
    delayShow: exists(delayMs) ? delayMs : 400,
    velocityShow: 20,
    delayHide: 0,
    velocityHide: 200,
  };
  useTimeout(
    () => {
      setShowing(true);
    },
    showing ? animationSettings.delayHide : animationSettings.delayShow,
    [setShowing]
  );
  return showing ? <TooltipImpl {...props} /> : null;
}

function TooltipImpl(props) {
  const [bounds, ref] = useRect({
    observe: true,
    deps: [props],
  });
  const [targetBounds] = useRect({
    ref: props.outerRef,
    observe: true,
  });
  const { gravity, renderInline } = useContext(TooltipContext);
  let x, y, direction;

  switch (gravity) {
    case Gravity.Top:
      x = targetBounds.x + targetBounds.width / 2 - bounds.width / 2;
      y = targetBounds.y - bounds.height - MARGIN;
      direction = "column";
      break;

    case Gravity.Bottom:
      x = targetBounds.x + targetBounds.width / 2 - bounds.width / 2;
      y = targetBounds.y + targetBounds.height + MARGIN;
      direction = "column";
      break;

    case Gravity.Left:
      x = targetBounds.x - bounds.width - MARGIN;
      y = targetBounds.y + targetBounds.height / 2 - bounds.height / 2;
      direction = "row";
      break;

    case Gravity.Right:
      x = targetBounds.x + targetBounds.width + MARGIN;
      y = targetBounds.y + targetBounds.height / 2 - bounds.height / 2;
      direction = "row";
      break;
  }

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: "center",
        justifyContent: "center",
        ...(renderInline ? {} : tooltipStyles(x, y)),
      }}
    >
      {props.children}
    </div>
  );
}

const tooltipStyles = (x, y) => ({
  position: "absolute",
  zIndex: 100000,
  left: `${x}px`,
  top: `${y}px`,
});

const arrow = (gravity) => {
  switch (gravity) {
    case Gravity.Top:
      return {
        bottom: 0,
        marginLeft: 0,
        marginRight: 0,
        transform: "translateY(50%) rotate(45deg)",
      };

    case Gravity.Bottom:
      return {
        top: 0,
        marginLeft: 0,
        marginRight: 0,
        transform: "translateY(-50%) rotate(45deg)",
      };

    case Gravity.Left:
      return {
        right: 0,
        marginTop: 0,
        marginBottom: 0,
        transform: "translateX(50%) rotate(45deg)",
      };

    case Gravity.Right:
      return {
        left: 0,
        marginTop: 0,
        marginBottom: 0,
        transform: "translateX(-50%) rotate(45deg)",
      };
  }
};
