// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbSuperProductEmpty.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      WhwzT2jENf: {
        none: {
          role: "img",
          icon: require("../assets/b5e18a86-70b3-4310-9998-74fd8910ec42.svg"),
          useMask: true,
        },
      },
      "8C3DGxh663": {
        none: {
          text: "Oops… Looks like Oscar has some very specific needs…",
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

export const HbSuperProductEmptyContext = createContext(null);

function HbSuperProductEmpty(_props) {
  const defaults = useContext(HbSuperProductEmptyContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="TEMvSpZsq9"
      addSpacing={true}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "TEMvSpZsq9",
        scope: "6ox65pjGMt",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <ContainerPrimitive
          id={"CardContent_UdYVCcCaqY"}
          className={
            "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_UdYVCcCaqY"
          }
          key={"UdYVCcCaqY"}
          addSpacing={true}
          element={getStyle("UdYVCcCaqY", "htmlElement")}
        >
          <ContainerPrimitive
            id={"DogContainer_CTQf35YXup"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_CTQf35YXup"
            }
            key={"CTQf35YXup"}
            addSpacing={false}
            element={getStyle("CTQf35YXup", "htmlElement")}
          >
            {
              <IconPrimitive
                id={"Icon_WhwzT2jENf"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_WhwzT2jENf"
                }
                key={"WhwzT2jENf"}
                useMask={getStyle("WhwzT2jENf", "useMask")}
                src={getStyle("WhwzT2jENf", "icon")}
              />
            }
          </ContainerPrimitive>
          <SpacerPrimitive
            id={"Spacer_JLos9DaYE8"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_JLos9DaYE8"
            }
            key={"JLos9DaYE8"}
          />
          <ContainerPrimitive
            id={"Content_N3yQYTcaWV"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_N3yQYTcaWV"
            }
            key={"N3yQYTcaWV"}
            addSpacing={false}
            element={getStyle("N3yQYTcaWV", "htmlElement")}
          >
            <TextPrimitive
              id={"CardTitle_8C3DGxh663"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_8C3DGxh663"
              }
              key={"8C3DGxh663"}
              text={
                exists(props.oops) ? props.oops : getStyle("8C3DGxh663", "text")
              }
              element={getStyle("8C3DGxh663", "htmlElement")}
            />
            <SpacerPrimitive
              id={"Spacer_X6tktLxhFT"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_X6tktLxhFT"
              }
              key={"X6tktLxhFT"}
            />
            <ContainerPrimitive
              key={"VYyPJoH3f7"}
              id={"Slot_VYyPJoH3f7"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_VYyPJoH3f7"
              }
              addSpacing={false}
            >
              {props.Extratext}
            </ContainerPrimitive>
            <ContainerPrimitive
              key={"KVQd13HGDM"}
              id={"Slot_KVQd13HGDM"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_6ox65pjGMt_KVQd13HGDM"
              }
              addSpacing={false}
            >
              {props.details}
            </ContainerPrimitive>
          </ContainerPrimitive>
        </ContainerPrimitive>
      )}
    </RootPrimitive>
  );
}

HbSuperProductEmpty.__variants = [];

export default HbSuperProductEmpty;
