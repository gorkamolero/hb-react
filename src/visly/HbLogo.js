// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbLogo.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { RootPrimitive, IconPrimitive } from "./_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      FLHNXYLopv: {
        none: {
          icon: require("./assets/ab92840c-8034-4e5a-8bf1-9ba903d98d7a.svg"),
          useMask: true,
        },
      },
    },
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "small",
        layers: {
          FLHNXYLopv: {
            none: {
              icon: require("./assets/b903d3b8-3830-4199-b34c-ca76aadb867b.svg"),
            },
          },
        },
      },
    ],
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "small",
        layers: {},
      },
    ],
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "size",
    propValues: ["small"],
  },
];

export const HbLogoContext = createContext(null);

function HbLogo(_props) {
  const defaults = useContext(HbLogoContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="RuuCtDNuhF"
      addSpacing={false}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "RuuCtDNuhF",
        scope: "3udiZxmptc",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          id={"Icon_FLHNXYLopv"}
          className={
            "__visly_reset_WDRq65T88Q __visly_scope_3udiZxmptc_FLHNXYLopv"
          }
          key={"FLHNXYLopv"}
          useMask={getStyle("FLHNXYLopv", "useMask")}
          src={getStyle("FLHNXYLopv", "icon")}
        />
      )}
    </RootPrimitive>
  );
}

HbLogo.__variants = [
  {
    name: "size",
    type: "group",
    variants: ["small"],
  },
];

export default HbLogo;
