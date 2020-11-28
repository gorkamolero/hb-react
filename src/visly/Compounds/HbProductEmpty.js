// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbProductEmpty.css";
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
      "21QeGg8jho": {
        none: {
          text: "1",
        },
      },
      HM7QLqsybb: {
        none: {
          text: "Type",
        },
      },
      WhwzT2jENf: {
        none: {
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

export const HbProductEmptyContext = createContext(null);

function HbProductEmpty(_props) {
  const defaults = useContext(HbProductEmptyContext);
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
        scope: "GVHshrcqto",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"CardHeader_DA8Xa72aFn"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_DA8Xa72aFn"
            }
            key={"DA8Xa72aFn"}
            addSpacing={true}
            element={getStyle("DA8Xa72aFn", "htmlElement")}
          >
            {
              <ContainerPrimitive
                id={"LeftSide_WRyAaE5y9d"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_WRyAaE5y9d"
                }
                key={"WRyAaE5y9d"}
                addSpacing={true}
                element={getStyle("WRyAaE5y9d", "htmlElement")}
              >
                <ContainerPrimitive
                  id={"Number_Um5F7YdKHX"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_Um5F7YdKHX"
                  }
                  key={"Um5F7YdKHX"}
                  addSpacing={false}
                  element={getStyle("Um5F7YdKHX", "htmlElement")}
                >
                  {
                    <TextPrimitive
                      id={"Order_21QeGg8jho"}
                      className={
                        "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_21QeGg8jho"
                      }
                      key={"21QeGg8jho"}
                      text={
                        exists(props.order)
                          ? props.order
                          : getStyle("21QeGg8jho", "text")
                      }
                      element={getStyle("21QeGg8jho", "htmlElement")}
                    />
                  }
                </ContainerPrimitive>
                <TextPrimitive
                  id={"CardTitle_HM7QLqsybb"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_HM7QLqsybb"
                  }
                  key={"HM7QLqsybb"}
                  text={
                    exists(props.type)
                      ? props.type
                      : getStyle("HM7QLqsybb", "text")
                  }
                  element={getStyle("HM7QLqsybb", "htmlElement")}
                />
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"CardContent_UdYVCcCaqY"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_UdYVCcCaqY"
            }
            key={"UdYVCcCaqY"}
            addSpacing={false}
            element={getStyle("UdYVCcCaqY", "htmlElement")}
          >
            <ContainerPrimitive
              id={"DogContainer_CTQf35YXup"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_CTQf35YXup"
              }
              key={"CTQf35YXup"}
              addSpacing={false}
              element={getStyle("CTQf35YXup", "htmlElement")}
            >
              {
                <IconPrimitive
                  id={"Icon_WhwzT2jENf"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_WhwzT2jENf"
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
                "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_JLos9DaYE8"
              }
              key={"JLos9DaYE8"}
            />
            <ContainerPrimitive
              id={"Content_N3yQYTcaWV"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_N3yQYTcaWV"
              }
              key={"N3yQYTcaWV"}
              addSpacing={false}
              element={getStyle("N3yQYTcaWV", "htmlElement")}
            >
              <TextPrimitive
                id={"CardTitle_8C3DGxh663"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_8C3DGxh663"
                }
                key={"8C3DGxh663"}
                text={
                  exists(props.oops)
                    ? props.oops
                    : getStyle("8C3DGxh663", "text")
                }
                element={getStyle("8C3DGxh663", "htmlElement")}
              />
              <SpacerPrimitive
                id={"Spacer_X6tktLxhFT"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_X6tktLxhFT"
                }
                key={"X6tktLxhFT"}
              />
              <ContainerPrimitive
                key={"VYyPJoH3f7"}
                id={"Slot_VYyPJoH3f7"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_VYyPJoH3f7"
                }
                addSpacing={false}
              >
                {props.Extratext}
              </ContainerPrimitive>
              <ContainerPrimitive
                key={"KVQd13HGDM"}
                id={"Slot_KVQd13HGDM"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GVHshrcqto_KVQd13HGDM"
                }
                addSpacing={false}
              >
                {props.details}
              </ContainerPrimitive>
            </ContainerPrimitive>
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbProductEmpty.__variants = [];

export default HbProductEmpty;
