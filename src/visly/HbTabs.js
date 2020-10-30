// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbTabs.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { RadioGroupRoot } from "./_internal_radio_group";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const HbTabsContext = createContext(null);

function HbTabs(_props) {
  const defaults = useContext(HbTabsContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RadioGroupRoot
      {...props}
      key="segmented-control-root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "segmented-control-root",
        scope: "33ja1dLx3n",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => props.children}
    </RadioGroupRoot>
  );
}

HbTabs.__variants = [];

export default HbTabs;
