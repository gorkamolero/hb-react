// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef, useContext, useEffect } from "react";
import {
  useListBox,
  useListState,
  useOption,
  useFocusRing,
  mergeProps,
  useSingleSelectListState,
} from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { combineRef, exists, renderChildren } from "./_internal_utils";
import {
  CollectionItemProxy,
  proxy,
  CollectionRoot,
  ItemContext,
} from "./_internal_collection";
import { injectSpacing } from "./_internal_component_utils";
import { useFormLabel } from "./_internal_formlabel";

function Option({ item, state }) {
  const ref = React.useRef();
  const isDisabled = state.disabledKeys.has(item.key);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
      shouldSelectOnPressUp: true,
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
  const { isSelected, isFocused } = useContext(ItemContext) || {};
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

export function ListboxPrimitiveWrapper(props) {
  if (props.selectionMode === "multiple") {
    return (
      <ListboxMultipleSelect
        {...props}
        onSelect={(values) =>
          exists(props.onSelect) && props.onSelect(Array.from(values))
        }
      />
    );
  }

  return (
    <ListboxSingleSelect
      {...props}
      selectionMode={props.selectionMode}
      onSelect={(value) => exists(props.onSelect) && props.onSelect(value)}
    />
  );
}

function parseSingleSelection(selection) {
  if (selection === "all") {
    return undefined;
  } else {
    return selection.values().next().value;
  }
}

function parseMultipleSelection(selection) {
  if (selection === "all") {
    return undefined;
  } else {
    return Array.from(selection);
  }
}

function ListboxSingleSelect(props) {
  const ref = useRef(null);
  const { items, selected, renderInline, onSelect } = props;
  const { style, testId, vislyProps, values } = usePrimitive({
    ref,
    props,
  });
  const state = useSingleSelectListState({
    children: items,
    selectedKey: selected,
    onSelectionChange: onSelect,
    disallowEmptySelection: false,
  });
  const { label, registerLabelProps } = useFormLabel();
  const { listBoxProps, labelProps } = useListBox(
    {
      ...props,
      disallowEmptySelection: false,
      selectedKeys: [selected],
      onSelectionChange: (values) => onSelect(parseSingleSelection(values)),
      label,
    },
    state,
    ref
  );
  useEffect(() => {
    registerLabelProps(labelProps);
  }, []);
  return (
    <ListboxPrimitiveImpl
      {...props}
      listBoxProps={listBoxProps}
      vislyProps={vislyProps}
      renderInline={renderInline}
      values={values}
      testId={testId}
      style={style}
      vislyRef={ref}
      state={state}
    />
  );
}

function ListboxMultipleSelect(props) {
  const ref = useRef(null);
  const { items, selected, renderInline, onSelect } = props;
  const { style, testId, vislyProps, values } = usePrimitive({
    ref,
    props,
  });
  const state = useListState({
    children: items,
    selectionMode: "multiple",
    selectedKeys: selected,
    onSelectionChange: (keys) => onSelect(parseMultipleSelection(keys)),
    disallowEmptySelection: false,
  });
  const { label, registerLabelProps } = useFormLabel();
  const { listBoxProps, labelProps } = useListBox(
    {
      ...props,
      disallowEmptySelection: false,
      selectedKeys: selected,
      onSelectionChange: (values) => onSelect(parseMultipleSelection(values)),
      label,
    },
    state,
    ref
  );
  useEffect(() => {
    registerLabelProps(labelProps);
  }, []);
  return (
    <ListboxPrimitiveImpl
      {...props}
      listBoxProps={listBoxProps}
      vislyProps={vislyProps}
      renderInline={renderInline}
      values={values}
      testId={testId}
      style={style}
      vislyRef={ref}
      state={state}
    />
  );
}

export function ListboxPrimitiveImpl(props) {
  const {
    listBoxProps,
    vislyProps,
    renderInline,
    style,
    testId,
    values,
    vislyRef,
    state,
  } = props;

  if (renderInline) {
    return (
      <ul
        {...vislyProps}
        ref={combineRef(vislyRef, props.measureRef)}
        style={style}
      >
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

  const listProps = mergeProps(listBoxProps, vislyProps);
  return (
    <ul
      {...listProps}
      ref={combineRef(vislyRef, props.measureRef)}
      style={style}
      data-testid={testId}
      onKeyDownCapture={(e) => {
        if (e.key !== "Escape") {
          listProps.onKeyDownCapture(e);
        }
      }}
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
      ParentCtor={ListboxPrimitiveWrapper}
      ItemCtor={ListboxItemPrimitiveImpl}
    />
  );
}
