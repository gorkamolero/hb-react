// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbTag.css";
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
} from "./_internal_primitives";
import HbOnlyIconButtonComposite, {
  HbOnlyIconButtonContext,
} from "./HbOnlyIconButton";

const styles = [
  {
    type: "default",
    layers: {
      XJDGMLiSr8: {
        none: {
          text: "Example allergy",
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
        layers: {},
      },
    ],
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      C5Ko4vdujm: {},
    },
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "small",
        layers: {
          C5Ko4vdujm: {},
        },
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

export const HbTagContext = createContext(null);

function HbTag(_props) {
  const defaults = useContext(HbTagContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="GUwTDFwRcZ"
      addSpacing={false}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "GUwTDFwRcZ",
        scope: "R7jV18AV1o",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        <TextPrimitive
          id={"Tag text_XJDGMLiSr8"}
          className={
            "__visly_reset_WDRq65T88Q __visly_scope_R7jV18AV1o_XJDGMLiSr8"
          }
          key={"XJDGMLiSr8"}
          text={
            exists(props.tagText)
              ? props.tagText
              : getStyle("XJDGMLiSr8", "text")
          }
          element={getStyle("XJDGMLiSr8", "htmlElement")}
        />,
        <SpacerPrimitive
          id={"Spacer_MQ47jJXDie"}
          className={
            "__visly_reset_WDRq65T88Q __visly_scope_R7jV18AV1o_MQ47jJXDie"
          }
          key={"MQ47jJXDie"}
        />,
        props.HbOnlyIconButton === undefined ? (
          <HbOnlyIconButtonComposite
            key={"C5Ko4vdujm"}
            {...getCompositeDefaultProps("C5Ko4vdujm")}
            id="HbOnlyIconButton_C5Ko4vdujm"
            className="__visly_reset_WDRq65T88Q __visly_scope_R7jV18AV1o_C5Ko4vdujm"
          />
        ) : (
          <HbOnlyIconButtonContext.Provider
            key="C5Ko4vdujm-provider"
            value={{
              key: "C5Ko4vdujm",
              id: "HbOnlyIconButton_C5Ko4vdujm",
              className:
                "__visly_reset_WDRq65T88Q __visly_scope_R7jV18AV1o_C5Ko4vdujm",
              ...getCompositeDefaultProps("C5Ko4vdujm"),
            }}
          >
            {props.HbOnlyIconButton}
          </HbOnlyIconButtonContext.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

HbTag.HbOnlyIconButton = HbOnlyIconButtonComposite;
HbTag.__variants = [
  {
    name: "size",
    type: "group",
    variants: ["small"],
  },
];

export default HbTag;
