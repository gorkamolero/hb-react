// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbProgressStep.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      "9kNRN8qWcz": {
        none: {
          text: "Step",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "HbActiveStep",
    layers: {},
  },
  {
    type: "boolean",
    propName: "HbFutureStep",
    layers: {},
  },
  {
    type: "boolean",
    propName: "HbPastStep",
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
      {
        propValue: "medium",
        layers: {},
      },
      {
        propValue: "large",
        layers: {},
      },
      {
        propValue: "super",
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
    type: "boolean",
    propName: "HbActiveStep",
    layers: {},
  },
  {
    type: "boolean",
    propName: "HbFutureStep",
    layers: {},
  },
  {
    type: "boolean",
    propName: "HbPastStep",
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
      {
        propValue: "medium",
        layers: {},
      },
      {
        propValue: "large",
        layers: {},
      },
      {
        propValue: "super",
        layers: {},
      },
    ],
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "HbActiveStep",
  },
  {
    type: "boolean",
    propName: "HbFutureStep",
  },
  {
    type: "boolean",
    propName: "HbPastStep",
  },
  {
    type: "enum",
    propName: "size",
    propValues: ["small", "medium", "large", "super"],
  },
];

export const HbProgressStepContext = createContext(null);

function HbProgressStep(_props) {
  const defaults = useContext(HbProgressStepContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="E1DeTUQrkS"
      addSpacing={false}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "E1DeTUQrkS",
        scope: "VDZamdUPev",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Overlay_ND1GG14HkM"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_VDZamdUPev_ND1GG14HkM"
            }
            key={"ND1GG14HkM"}
            addSpacing={false}
            element={getStyle("ND1GG14HkM", "htmlElement")}
            style={{
              position: "absolute",
            }}
          >
            {
              <TextPrimitive
                id={"Step Title_9kNRN8qWcz"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_VDZamdUPev_9kNRN8qWcz"
                }
                key={"9kNRN8qWcz"}
                text={
                  exists(props.stepTitle)
                    ? props.stepTitle
                    : getStyle("9kNRN8qWcz", "text")
                }
                element={getStyle("9kNRN8qWcz", "htmlElement")}
              />
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"Column_T9iA7HLyzJ"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_VDZamdUPev_T9iA7HLyzJ"
            }
            key={"T9iA7HLyzJ"}
            addSpacing={false}
            element={getStyle("T9iA7HLyzJ", "htmlElement")}
          >
            {null}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbProgressStep.__variants = [
  {
    name: "HbActiveStep",
    type: "variant",
  },
  {
    name: "HbFutureStep",
    type: "variant",
  },
  {
    name: "HbPastStep",
    type: "variant",
  },
  {
    name: "size",
    type: "group",
    variants: ["small", "medium", "large", "super"],
  },
];

export default HbProgressStep;
