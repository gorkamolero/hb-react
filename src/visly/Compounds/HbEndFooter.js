// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbEndFooter.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import {
  RootPrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "../_internal_primitives";
import HbButtonWithIconComposite, {
  HbButtonWithIconContext,
} from "../HbButtonWithIcon";

const styles = [
  {
    type: "default",
    layers: {
      XXvgsKKhsZ: {
        none: {
          text: "Total (2)",
        },
      },
      "96PHAUg8AY": {
        none: {
          text: "$19.99",
        },
      },
      F89H3sVLrt: {
        none: {
          text: "Add Another Dog",
        },
      },
      Mx2KtTR2cX: {
        none: {
          role: "img",
          src: require("../assets/10300d2a-cf6b-431f-9817-bf5c0c1739a7.svg"),
          useMask: true,
        },
      },
      GMQGJ3oWuC: {
        none: {
          text: "$59.99",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      QNXBFmS13r: {
        none: {
          text: "Continue to Checkout",
        },
      },
    },
  },
];

const variantPropTypes = [];

export const HbEndFooterContext = createContext(null);

function HbEndFooter(_props) {
  const defaults = useContext(HbEndFooterContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="k3jaASDPhw"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "k3jaASDPhw",
        scope: "XdYhdmDsxs",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <ContainerPrimitive
          className={"__visly_reset __visly_scope_XdYhdmDsxs_K8Rvc3Sc8R"}
          key={"K8Rvc3Sc8R"}
          addSpacing={false}
        >
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_XdYhdmDsxs_8NeAjDqg32"}
            key={"8NeAjDqg32"}
            addSpacing={true}
          >
            <TextPrimitive
              className={"__visly_reset __visly_scope_XdYhdmDsxs_XXvgsKKhsZ"}
              key={"XXvgsKKhsZ"}
              text={
                exists(props.total)
                  ? props.total
                  : getStyle("XXvgsKKhsZ", "text")
              }
            />
            <TextPrimitive
              className={"__visly_reset __visly_scope_XdYhdmDsxs_96PHAUg8AY"}
              key={"96PHAUg8AY"}
              text={
                exists(props.priceOriginal)
                  ? props.priceOriginal
                  : getStyle("96PHAUg8AY", "text")
              }
            />
            <TextPrimitive
              className={"__visly_reset __visly_scope_XdYhdmDsxs_GMQGJ3oWuC"}
              key={"GMQGJ3oWuC"}
              text={
                exists(props.priceFinal)
                  ? props.priceFinal
                  : getStyle("GMQGJ3oWuC", "text")
              }
            />
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_XdYhdmDsxs_3Uo7BCssEJ"}
            key={"3Uo7BCssEJ"}
            addSpacing={true}
          >
            {[
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_XdYhdmDsxs_FvzVudkqtn"}
                key={"FvzVudkqtn"}
                addSpacing={true}
              >
                <TextPrimitive
                  className={
                    "__visly_reset __visly_scope_XdYhdmDsxs_F89H3sVLrt"
                  }
                  key={"F89H3sVLrt"}
                  text={getStyle("F89H3sVLrt", "text")}
                />
                <IconPrimitive
                  className={
                    "__visly_reset __visly_scope_XdYhdmDsxs_Mx2KtTR2cX"
                  }
                  key={"Mx2KtTR2cX"}
                  useMask={getStyle("Mx2KtTR2cX", "useMask")}
                  src={getStyle("Mx2KtTR2cX", "src")}
                />
              </ContainerPrimitive>,
              props.HbButtonWithIcon === undefined ? (
                <HbButtonWithIconComposite
                  key={"QNXBFmS13r"}
                  {...getCompositeDefaultProps("QNXBFmS13r")}
                  className="__visly_reset __visly_scope_XdYhdmDsxs_QNXBFmS13r"
                />
              ) : (
                <HbButtonWithIconContext.Provider
                  key="QNXBFmS13r-provider"
                  value={{
                    key: "QNXBFmS13r",
                    className:
                      "__visly_reset __visly_scope_XdYhdmDsxs_QNXBFmS13r",
                    ...getCompositeDefaultProps("QNXBFmS13r"),
                  }}
                >
                  {props.HbButtonWithIcon}
                </HbButtonWithIconContext.Provider>
              ),
            ]}
          </ContainerPrimitive>
        </ContainerPrimitive>
      )}
    </RootPrimitive>
  );
}

HbEndFooter.HbButtonWithIcon = HbButtonWithIconComposite;
HbEndFooter.__variants = [];

export default HbEndFooter;
