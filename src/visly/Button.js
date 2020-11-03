// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./Button.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";

const styles = [
  {
    type: "default",
    layers: {
      HxPKbCp77g: {
        none: {
          text: "Button",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

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
    <ButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "root",
        scope: "57m21SveAo",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          className={"__visly_reset __visly_scope_57m21SveAo_HxPKbCp77g"}
          key={"HxPKbCp77g"}
          text={
            exists(props.text) ? props.text : getStyle("HxPKbCp77g", "text")
          }
          element={getStyle("HxPKbCp77g", "htmlElement")}
        />
      )}
    </ButtonRoot>
  );
}

Button.__variants = [];

export default Button;
