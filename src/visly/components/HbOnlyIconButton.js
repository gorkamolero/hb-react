// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./HbOnlyIconButton.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { IconPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";

const styles = [
  {
    type: "default",
    layers: {
      BCvLM6xQoX: {
        none: {
          role: "img",
          src: require("../assets/cf60e26b-cb28-4b08-9866-ddf51237300e.svg"),
          useMask: true,
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

export const HbOnlyIconButtonContext = createContext(null);

function HbOnlyIconButton(_props) {
  const defaults = useContext(HbOnlyIconButtonContext);
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
        scope: "LFvSjwFotj",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          className={"__visly_reset __visly_scope_LFvSjwFotj_BCvLM6xQoX"}
          key={"BCvLM6xQoX"}
          useMask={getStyle("BCvLM6xQoX", "useMask")}
          src={getStyle("BCvLM6xQoX", "src")}
        />
      )}
    </ButtonRoot>
  );
}

HbOnlyIconButton.__variants = [];

export default HbOnlyIconButton;
