// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbHelper.Item.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { ListboxItemPrimitive } from "./_internal_listbox";

const styles = [
  {
    type: "default",
    layers: {
      "4WQusUCHUn": {
        none: {
          text: "List item",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "selected",
  },
];

export const ItemContext = createContext(null);

function Item(_props) {
  const defaults = useContext(ItemContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <ListboxItemPrimitive
      {...props}
      key="listbox-item-root"
      addSpacing={false}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "listbox-item-root",
        scope: "7bKpy8A4f9",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          id={"text_4WQusUCHUn"}
          className={
            "__visly_reset_WDRq65T88Q __visly_scope_7bKpy8A4f9_4WQusUCHUn"
          }
          key={"4WQusUCHUn"}
          text={
            exists(props.label) ? props.label : getStyle("4WQusUCHUn", "text")
          }
          element={getStyle("4WQusUCHUn", "htmlElement")}
        />
      )}
    </ListboxItemPrimitive>
  );
}

Item.__variants = [
  {
    name: "selected",
    type: "variant",
  },
];

export default Item;
