// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbButtonWithIcon.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "./_internal_primitives";
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
      "21mnkDJ1UQ": {
        none: {
          icon: require("./assets/d335cc69-ef1c-4fab-a477-d420f754e056.svg"),
          useMask: true,
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
        layers: {
          "21mnkDJ1UQ": {
            none: {
              useMask: true,
            },
          },
        },
      },
    ],
  },
  {
    type: "boolean",
    propName: "noIcon",
    layers: {},
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
    propName: "noIcon",
    layers: {},
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
    propName: "noIcon",
  },
  {
    type: "boolean",
    propName: "withProgress",
  },
];

export const HbButtonWithIconContext = createContext(null);

function HbButtonWithIcon(_props) {
  const defaults = useContext(HbButtonWithIconContext);
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
      addSpacing={true}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "root",
        scope: "PZuf8HbDvD",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Overlay_MqQmHAoM6W"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_PZuf8HbDvD_MqQmHAoM6W"
            }
            key={"MqQmHAoM6W"}
            addSpacing={false}
            element={getStyle("MqQmHAoM6W", "htmlElement")}
            style={{
              position: "absolute",
            }}
          >
            {
              <ContainerPrimitive
                id={"Progress_Dz8jeyRa9z"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_PZuf8HbDvD_Dz8jeyRa9z"
                }
                key={"Dz8jeyRa9z"}
                addSpacing={false}
                element={getStyle("Dz8jeyRa9z", "htmlElement")}
              >
                {null}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <TextPrimitive
            id={"text_QrGpru5iuK"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_PZuf8HbDvD_QrGpru5iuK"
            }
            key={"QrGpru5iuK"}
            text={
              exists(props.text) ? props.text : getStyle("QrGpru5iuK", "text")
            }
            element={getStyle("QrGpru5iuK", "htmlElement")}
          />
          <IconPrimitive
            id={"Icon_21mnkDJ1UQ"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_PZuf8HbDvD_21mnkDJ1UQ"
            }
            key={"21mnkDJ1UQ"}
            useMask={getStyle("21mnkDJ1UQ", "useMask")}
            src={getStyle("21mnkDJ1UQ", "icon")}
          />
        </>
      )}
    </ButtonRoot>
  );
}

HbButtonWithIcon.__variants = [
  {
    name: "variant",
    type: "group",
    variants: ["contained"],
  },
  {
    name: "noIcon",
    type: "variant",
  },
  {
    name: "withProgress",
    type: "variant",
  },
];

export default HbButtonWithIcon;
