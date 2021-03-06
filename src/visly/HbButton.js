// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbButton.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive, ContainerPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";

const styles = [
  {
    type: "default",
    layers: {
      QrGpru5iuK: {
        none: {
          text: "Button",
        },
      },
    },
  },
  {
    type: "enum",
    propName: "variant",
    values: [
      {
        propValue: "contained",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "withProgress",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "enum",
    propName: "variant",
    values: [
      {
        propValue: "contained",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "withProgress",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "variant",
    propValues: ["contained"],
  },
  {
    type: "boolean",
    propName: "withProgress",
  },
];

export const HbButtonContext = createContext(null);

function HbButton(_props) {
  const defaults = useContext(HbButtonContext);
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
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "root",
        scope: "LoHyGddKTC",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Overlay_VgX8sxpTgz"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_LoHyGddKTC_VgX8sxpTgz"
            }
            key={"VgX8sxpTgz"}
            addSpacing={false}
            element={getStyle("VgX8sxpTgz", "htmlElement")}
            style={{
              position: "absolute",
            }}
          >
            {
              <ContainerPrimitive
                id={"Progress_UgHyr1HdEi"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_LoHyGddKTC_UgHyr1HdEi"
                }
                key={"UgHyr1HdEi"}
                addSpacing={false}
                element={getStyle("UgHyr1HdEi", "htmlElement")}
              >
                {null}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <TextPrimitive
            id={"text_QrGpru5iuK"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_LoHyGddKTC_QrGpru5iuK"
            }
            key={"QrGpru5iuK"}
            text={
              exists(props.text) ? props.text : getStyle("QrGpru5iuK", "text")
            }
            element={getStyle("QrGpru5iuK", "htmlElement")}
          />
        </>
      )}
    </ButtonRoot>
  );
}

HbButton.__variants = [
  {
    name: "variant",
    type: "group",
    variants: ["contained"],
  },
  {
    name: "withProgress",
    type: "variant",
  },
];

export default HbButton;
