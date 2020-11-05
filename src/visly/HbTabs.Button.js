// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbTabs.Button.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { RadioGroupButtonRoot } from "./_internal_radio_group";

const styles = [
  {
    type: "default",
    layers: {
      "segmented-control-button-text": {
        none: {
          text: "Text",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "selected",
  },
];

export const ButtonContext = createContext(null);

function Button(_props) {
  const defaults = useContext(ButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RadioGroupButtonRoot
      {...props}
      key="segmented-control-button-root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "segmented-control-button-root",
        scope: "6rBeU2qt8y",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          className={
            "__visly_reset __visly_scope_6rBeU2qt8y_segmented-control-button-text"
          }
          key={"segmented-control-button-text"}
          text={
            exists(props.text)
              ? props.text
              : getStyle("segmented-control-button-text", "text")
          }
          element={getStyle("segmented-control-button-text", "htmlElement")}
        />
      )}
    </RadioGroupButtonRoot>
  );
}

Button.__variants = [
  {
    name: "selected",
    type: "variant",
  },
];

export default Button;