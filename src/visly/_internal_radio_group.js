// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, {
  createContext,
  useRef,
  useContext,
  useMemo,
  useEffect,
} from "react";
import {
  useRadioGroup,
  useRadio,
  useFocusRing,
  mergeProps,
  VisuallyHidden,
  useRadioGroupState,
} from "@visly/core";
import { combineRef, exists, renderChildren } from "./_internal_utils";
import { injectSpacing } from "./_internal_component_utils";
import { usePrimitive } from "./_internal_usePrimitive";
import { useFormLabel } from "./_internal_formlabel";
const RadioContext = createContext({
  state: {
    name: "radio",
    selectedValue: null,
    setSelectedValue: () => {},
    lastFocusedValue: null,
    setLastFocusedValue: () => {},
  },
  parentDisabled: false,
  parentFocusProps: {},
});

function vislyToReactAriaProps(props) {
  return {
    value: props.selected,
    isDisabled: props.disabled,
    onChange: props.onSelect,
    "aria-label": props.ariaLabel || props.value || "Radio Group",
    ...props,
  };
}

export function RadioGroupRoot(props) {
  const ref = useRef(null);
  const { focusProps, isFocusVisible } = useFocusRing();
  const {
    style,
    testId,
    innerRef,
    values,
    vislyProps,
    isDisabled,
  } = usePrimitive({
    ref,
    props,
    ignoreFocusHandling: true,
    isFocusVisible,
  });
  const children = injectSpacing(
    props.addSpacing,
    renderChildren(props.children, values)
  );
  const reactAriaProps = vislyToReactAriaProps(props);
  const state = useRadioGroupState(reactAriaProps);
  const { label, registerLabelProps } = useFormLabel();
  const { radioGroupProps, labelProps } = useRadioGroup(
    { ...reactAriaProps, label },
    state
  );
  useEffect(() => {
    registerLabelProps(labelProps);
  }, []);
  const value = useMemo(
    () => ({
      state,
      parentDisabled: isDisabled,
      parentFocusProps: focusProps,
    }),
    [isDisabled, state, focusProps]
  );
  return (
    <div
      {...mergeProps(radioGroupProps, vislyProps)}
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      style={style}
    >
      <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
    </div>
  );
}
export function RadioGroupButtonRoot(_props) {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const { state, parentDisabled, parentFocusProps } = useContext(RadioContext);
  const props = parentDisabled ? { ..._props, disabled: true } : _props;
  const { focusProps, isFocusVisible } = useFocusRing();
  const { style, testId, values, vislyProps, innerRef } = usePrimitive({
    ref,
    props,
    ignoreFocusHandling: true,
    isFocusVisible,
    variants:
      exists(state.selectedValue) && props.value === state.selectedValue
        ? [
            {
              propName: "selected",
            },
          ]
        : [],
  });
  const reactAriaProps = vislyToReactAriaProps(props);
  const { inputProps } = useRadio(reactAriaProps, state, inputRef);
  return (
    <label
      {...vislyProps}
      ref={combineRef(props.measureRef, combineRef(ref, innerRef))}
      data-testid={testId}
      style={style}
    >
      <VisuallyHidden>
        <input
          {...mergeProps(inputProps, vislyProps, focusProps, parentFocusProps)}
          ref={inputRef}
        />
      </VisuallyHidden>
      {renderChildren(props.children, values)}
    </label>
  );
}
