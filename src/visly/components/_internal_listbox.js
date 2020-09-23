// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef, useContext } from "react";
import {
  useListBox,
  useListState,
  useOption,
  useFocusRing,
  mergeProps,
} from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { combineRef, renderChildren } from "./_internal_utils";
import {
  CollectionItemProxy,
  proxy,
  CollectionRoot,
  ItemContext,
} from "./_internal_collection";
import { injectSpacing } from "./_internal_component_utils";

function Option({ item, state }) {
  const ref = React.useRef();
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <li {...mergeProps(optionProps, focusProps)} ref={ref}>
      <ItemContext.Provider
        value={{
          isSelected,
          isFocused: isFocusVisible,
          key: item.key,
        }}
      >
        {item.rendered}
      </ItemContext.Provider>
    </li>
  );
}

function ListboxItemPrimitiveImpl(props) {
  const ref = useRef();
  const { isSelected, isFocused } = useContext(ItemContext);
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ignoreFocusHandling: true,
    isFocusVisible: isFocused,
    ref,
    props,
    variants: isSelected
      ? [
          {
            propName: "selected",
          },
        ]
      : [],
  });
  return (
    <div
      key={props.value}
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...vislyProps}
      style={style}
    >
      {renderChildren(props.children, values)}
    </div>
  );
}

export function ListboxPrimitiveImpl(props) {
  const ref = useRef(null);
  const {
    items,
    selected,
    onSelect,
    renderInline,
    selectionMode = "single",
  } = props;
  const { style, testId, vislyProps, values } = usePrimitive({
    ref,
    props,
  });
  const state = useListState({
    children: items,
    selectionMode,
    selectedKeys: selected,
    onSelectionChange: onSelect,
    disallowEmptySelection: true,
  });
  const { listBoxProps } = useListBox(
    {
      children: items,
      disallowEmptySelection: false,
      selectedKeys: selected,
      onSelectionChange: onSelect,
    },
    state,
    ref
  );

  if (renderInline) {
    return (
      <ul {...vislyProps} ref={combineRef(ref, props.measureRef)} style={style}>
        <ItemContext.Provider
          value={{
            isSelected: false,
            isFocused: false,
            key: null,
          }}
        >
          {renderChildren(props.children, values)}
        </ItemContext.Provider>
      </ul>
    );
  }

  const children = [...state.collection].map((item) => (
    <Option key={item.key} item={item} state={state} />
  ));

  const _children = injectSpacing(props.addSpacing, children);

  return (
    <ul
      {...mergeProps(listBoxProps, vislyProps)}
      ref={combineRef(ref, props.measureRef)}
      style={style}
      data-testid={testId}
    >
      {_children}
    </ul>
  );
}
export const ListboxItemPrimitive = proxy(
  CollectionItemProxy,
  ListboxItemPrimitiveImpl
);
export function ListboxPrimitive(props) {
  return (
    <CollectionRoot
      {...props}
      ParentCtor={ListboxPrimitiveImpl}
      ItemCtor={ListboxItemPrimitiveImpl}
    />
  );
}
