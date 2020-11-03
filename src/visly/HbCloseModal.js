// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbCloseModal.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { IconPrimitive } from "./_internal_primitives";
import { ToggleButtonRoot } from "./_internal_togglebutton";

const styles = [
  {
    type: "default",
    layers: {
      Pu3J7F2Y9P: {
        none: {
          role: "img",
          icon: require("./assets/cf60e26b-cb28-4b08-9866-ddf51237300e.svg"),
          useMask: true,
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "checked",
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
    propName: "checked",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "checked",
  },
];

export const HbCloseModalContext = createContext(null);

function HbCloseModal(_props) {
  const defaults = useContext(HbCloseModalContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ToggleButtonRoot
      {...props}
      key="root"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "root",
        scope: "YSH61WCwjS",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          className={"__visly_reset __visly_scope_YSH61WCwjS_Pu3J7F2Y9P"}
          key={"Pu3J7F2Y9P"}
          useMask={getStyle("Pu3J7F2Y9P", "useMask")}
          src={getStyle("Pu3J7F2Y9P", "icon")}
        />
      )}
    </ToggleButtonRoot>
  );
}

HbCloseModal.__variants = [
  {
    name: "checked",
    type: "variant",
  },
];

export default HbCloseModal;
