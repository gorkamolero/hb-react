// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbProduct.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "../_internal_primitives";
import HbCheckboxComposite, { HbCheckboxContext } from "../HbCheckbox";

const styles = [
  {
    type: "default",
    layers: {
      LLAN2HR72H: {
        none: {
          text: "Chicken, Turkey + Brown Rice",
        },
      },
      RZSy2TdbWe: {
        none: {
          text: "14lbs",
        },
      },
      LJa2rjC9ev: {
        none: {
          text: "Label",
        },
      },
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
      "8PrsR7o63t": {
        none: {
          text: "$19,99",
        },
      },
      GZwM8i3ySP: {
        none: {
          text: "$19,99",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      Sk8oJHqaqN: {},
    },
  },
];

const variantPropTypes = [];

export const HbProductContext = createContext(null);

function HbProduct(_props) {
  const defaults = useContext(HbProductContext);
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
        styles: styles,
        layerId: "TEMvSpZsq9",
        scope: "F2wQruQTHP",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_F2wQruQTHP_DA8Xa72aFn"}
            key={"DA8Xa72aFn"}
            addSpacing={true}
            element={getStyle("DA8Xa72aFn", "htmlElement")}
          >
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_F2wQruQTHP_WRyAaE5y9d"}
              key={"WRyAaE5y9d"}
              addSpacing={true}
              element={getStyle("WRyAaE5y9d", "htmlElement")}
            >
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_Um5F7YdKHX"}
                key={"Um5F7YdKHX"}
                addSpacing={false}
                element={getStyle("Um5F7YdKHX", "htmlElement")}
              >
                {
                  <TextPrimitive
                    className={
                      "__visly_reset __visly_scope_F2wQruQTHP_21QeGg8jho"
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
                className={"__visly_reset __visly_scope_F2wQruQTHP_HM7QLqsybb"}
                key={"HM7QLqsybb"}
                text={
                  exists(props.type)
                    ? props.type
                    : getStyle("HM7QLqsybb", "text")
                }
                element={getStyle("HM7QLqsybb", "htmlElement")}
              />
            </ContainerPrimitive>
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_F2wQruQTHP_G19QPyqmt5"}
              key={"G19QPyqmt5"}
              addSpacing={true}
              element={getStyle("G19QPyqmt5", "htmlElement")}
            >
              <TextPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_8PrsR7o63t"}
                key={"8PrsR7o63t"}
                text={
                  exists(props.priceOriginal)
                    ? props.priceOriginal
                    : getStyle("8PrsR7o63t", "text")
                }
                element={getStyle("8PrsR7o63t", "htmlElement")}
              />
              <TextPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_GZwM8i3ySP"}
                key={"GZwM8i3ySP"}
                text={
                  exists(props.priceFinal)
                    ? props.priceFinal
                    : getStyle("GZwM8i3ySP", "text")
                }
                element={getStyle("GZwM8i3ySP", "htmlElement")}
              />
            </ContainerPrimitive>
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_F2wQruQTHP_UdYVCcCaqY"}
            key={"UdYVCcCaqY"}
            addSpacing={false}
            element={getStyle("UdYVCcCaqY", "htmlElement")}
          >
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_F2wQruQTHP_RP3xHanS5S"}
              key={"RP3xHanS5S"}
              addSpacing={false}
              element={getStyle("RP3xHanS5S", "htmlElement")}
            >
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_Rf5PVhWzGL"}
                key={"Rf5PVhWzGL"}
                addSpacing={false}
                element={getStyle("Rf5PVhWzGL", "htmlElement")}
              >
                {
                  <ImagePrimitive
                    className={
                      "__visly_reset __visly_scope_F2wQruQTHP_BuTfFDTZNv"
                    }
                    key={"BuTfFDTZNv"}
                    src={
                      exists(props.imageSrc)
                        ? props.imageSrc
                        : getStyle("BuTfFDTZNv", "src")
                    }
                    alt={getStyle("BuTfFDTZNv", "alternateText")}
                  />
                }
              </ContainerPrimitive>
              <SpacerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_YLnrFRMb73"}
                key={"YLnrFRMb73"}
              />
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_4ZpyWfeCAG"}
                key={"4ZpyWfeCAG"}
                addSpacing={false}
                element={getStyle("4ZpyWfeCAG", "htmlElement")}
              >
                <TextPrimitive
                  className={
                    "__visly_reset __visly_scope_F2wQruQTHP_LLAN2HR72H"
                  }
                  key={"LLAN2HR72H"}
                  text={
                    exists(props.title)
                      ? props.title
                      : getStyle("LLAN2HR72H", "text")
                  }
                  element={getStyle("LLAN2HR72H", "htmlElement")}
                />
                <TextPrimitive
                  className={
                    "__visly_reset __visly_scope_F2wQruQTHP_RZSy2TdbWe"
                  }
                  key={"RZSy2TdbWe"}
                  text={
                    exists(props.extra)
                      ? props.extra
                      : getStyle("RZSy2TdbWe", "text")
                  }
                  element={getStyle("RZSy2TdbWe", "htmlElement")}
                />
              </ContainerPrimitive>
            </ContainerPrimitive>
            <SpacerPrimitive
              className={"__visly_reset __visly_scope_F2wQruQTHP_JLos9DaYE8"}
              key={"JLos9DaYE8"}
            />
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_F2wQruQTHP_N3yQYTcaWV"}
              key={"N3yQYTcaWV"}
              addSpacing={false}
              element={getStyle("N3yQYTcaWV", "htmlElement")}
            >
              <ContainerPrimitive
                key={"UDKtwaHFzP"}
                className={"__visly_reset __visly_scope_F2wQruQTHP_UDKtwaHFzP"}
                addSpacing={false}
              >
                {props.DescriptionHtml}
              </ContainerPrimitive>
              <SpacerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_7MAZ8igM5Q"}
                key={"7MAZ8igM5Q"}
              />
              <ContainerPrimitive
                key={"KVQd13HGDM"}
                className={"__visly_reset __visly_scope_F2wQruQTHP_KVQd13HGDM"}
                addSpacing={false}
              >
                {props.details}
              </ContainerPrimitive>
            </ContainerPrimitive>
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_F2wQruQTHP_6xWxhWEy3g"}
            key={"6xWxhWEy3g"}
            addSpacing={false}
            element={getStyle("6xWxhWEy3g", "htmlElement")}
          >
            {[
              props.HbCheckbox === undefined ? (
                <HbCheckboxComposite
                  key={"Sk8oJHqaqN"}
                  {...getCompositeDefaultProps("Sk8oJHqaqN")}
                  className="__visly_reset __visly_scope_F2wQruQTHP_Sk8oJHqaqN"
                />
              ) : (
                <HbCheckboxContext.Provider
                  key="Sk8oJHqaqN-provider"
                  value={{
                    key: "Sk8oJHqaqN",
                    className:
                      "__visly_reset __visly_scope_F2wQruQTHP_Sk8oJHqaqN",
                    ...getCompositeDefaultProps("Sk8oJHqaqN"),
                  }}
                >
                  {props.HbCheckbox}
                </HbCheckboxContext.Provider>
              ),
              <SpacerPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_Jd3rR87ZmP"}
                key={"Jd3rR87ZmP"}
              />,
              <TextPrimitive
                className={"__visly_reset __visly_scope_F2wQruQTHP_LJa2rjC9ev"}
                key={"LJa2rjC9ev"}
                text={
                  exists(props.addLabel)
                    ? props.addLabel
                    : getStyle("LJa2rjC9ev", "text")
                }
                element={getStyle("LJa2rjC9ev", "htmlElement")}
              />,
            ]}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbProduct.HbCheckbox = HbCheckboxComposite;
HbProduct.__variants = [];

export default HbProduct;
