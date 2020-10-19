// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbFeatureItem.css";
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
} from "../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      WMJS8iYUM2: {
        none: {
          text: "No two dogs are the same.",
        },
      },
      QpvH3usWxS: {
        none: {
          text:
            "Superfood ingredients paired with real meat proteins like fresh chicken, lamb, turkey, duck, salmon and fortified with probiotics, vitamins and minerals.",
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

export const HbFeatureItemContext = createContext(null);

function HbFeatureItem(_props) {
  const defaults = useContext(HbFeatureItemContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="Ha2hSNMdJw"
      addSpacing={true}
      internal={{
        styles: styles,
        layerId: "Ha2hSNMdJw",
        scope: "2nqE2sA12b",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <TextPrimitive
            className={"__visly_reset __visly_scope_2nqE2sA12b_WMJS8iYUM2"}
            key={"WMJS8iYUM2"}
            text={
              exists(props.title) ? props.title : getStyle("WMJS8iYUM2", "text")
            }
          />
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_2nqE2sA12b_Gwzj8Sp6Nq"}
            key={"Gwzj8Sp6Nq"}
            addSpacing={false}
          >
            {null}
          </ContainerPrimitive>
          <SpacerPrimitive
            className={"__visly_reset __visly_scope_2nqE2sA12b_2871CeG9P2"}
            key={"2871CeG9P2"}
          />
          <TextPrimitive
            className={"__visly_reset __visly_scope_2nqE2sA12b_QpvH3usWxS"}
            key={"QpvH3usWxS"}
            text={
              exists(props.text) ? props.text : getStyle("QpvH3usWxS", "text")
            }
          />
        </>
      )}
    </RootPrimitive>
  );
}

HbFeatureItem.__variants = [];

export default HbFeatureItem;
