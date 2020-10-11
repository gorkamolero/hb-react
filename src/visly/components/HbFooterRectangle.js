// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import "./HbFooterRectangle.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "./_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      Mo7rGSicAa: {
        none: {
          role: "img",
          src: require("../assets/dbe16c81-bff3-4c34-a2cf-276c5ce67996.png"),
          useMask: true,
        },
      },
      TtJg39uXYB: {
        none: {
          text: "Super premium title",
        },
      },
      "7pDuFKyB8H": {
        none: {
          text: "Made with title & subtitle",
        },
      },
    },
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "medium",
        layers: {},
      },
      {
        propValue: "large",
        layers: {},
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
        propValue: "medium",
        layers: {},
      },
      {
        propValue: "large",
        layers: {},
      },
    ],
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "size",
    propValues: ["medium", "large"],
  },
];

export const HbFooterRectangleContext = createContext(null);

function HbFooterRectangle(_props) {
  const defaults = useContext(HbFooterRectangleContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="QqmbTS93UZ"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "QqmbTS93UZ",
        scope: "Npa8kPzTtv",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <IconPrimitive
            className={"__visly_reset __visly_scope_Npa8kPzTtv_Mo7rGSicAa"}
            key={"Mo7rGSicAa"}
            useMask={getStyle("Mo7rGSicAa", "useMask")}
            src={
              exists(props.icon) ? props.icon : getStyle("Mo7rGSicAa", "src")
            }
          />
          <SpacerPrimitive
            className={"__visly_reset __visly_scope_Npa8kPzTtv_UHuqLDWte5"}
            key={"UHuqLDWte5"}
          />
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_Npa8kPzTtv_CD54kq73jf"}
            key={"CD54kq73jf"}
            addSpacing={false}
          >
            <TextPrimitive
              className={"__visly_reset __visly_scope_Npa8kPzTtv_TtJg39uXYB"}
              key={"TtJg39uXYB"}
              text={
                exists(props.title)
                  ? props.title
                  : getStyle("TtJg39uXYB", "text")
              }
            />
            <SpacerPrimitive
              className={"__visly_reset __visly_scope_Npa8kPzTtv_genqiGNMDt"}
              key={"genqiGNMDt"}
            />
            <TextPrimitive
              className={"__visly_reset __visly_scope_Npa8kPzTtv_7pDuFKyB8H"}
              key={"7pDuFKyB8H"}
              text={
                exists(props.subtitle)
                  ? props.subtitle
                  : getStyle("7pDuFKyB8H", "text")
              }
            />
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbFooterRectangle.__variants = [
  {
    name: "size",
    type: "group",
    variants: ["medium", "large"],
  },
];

export default HbFooterRectangle;