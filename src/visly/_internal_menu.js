// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, {
  useRef,
  useContext,
  createContext,
  Fragment,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  mergeProps,
  useTreeState,
  useMenu,
  useHover,
  useMenuItem,
  useMenuSection,
  useFocusRing,
  useKeyboard,
} from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { combineRef, renderChildren, exists, noop } from "./_internal_utils";
import { Popover } from "./builtins/Popover";
import {
  proxy,
  CollectionRoot,
  buildCollectionItemProxyWithType,
  buildCollectionSectionProxy,
} from "./_internal_collection";
const MenuContext = createContext(null);
const ItemContext = createContext(null);
export function SubmenuImpl(props) {
  const ref = useRef(null);
  const { items, closeOnSelect } = props;
  const {
    style,
    className,
    onAction,
    resetProps,
    selectedKeys,
    onSelectionChange,
  } = useContext(MenuContext);
  const state = useTreeState({
    ...props,
    selectedKeys,
    onSelectionChange,
    children: items,
  });
  const { menuProps } = useMenu({ ...props, children: items }, state, ref);
  useEffect(() => {
    if (
      state.collection.size > 0 &&
      !exists(state.selectionManager.focusedKey)
    ) {
      let key = state.collection.getFirstKey();

      while (exists(key) && !exists(state.selectionManager.focusedKey)) {
        if (state.collection.getItem(key).type !== "section") {
          state.selectionManager.setFocusedKey(key);
        }

        key = state.collection.getKeyAfter(key);
      }
    }
  }, [state]);
  return (
    <Fragment>
      {exists(props.cssStyles) ? (
        <style
          style={{
            display: "none",
          }}
        >
          {props.cssStyles}
        </style>
      ) : null}
      <ul
        {...mergeProps(menuProps)}
        ref={ref}
        style={style}
        className={className}
      >
        {[...state.collection].map((item) =>
          item.type !== "section" ? (
            <MenuItemCollectionNode
              key={item.key}
              item={item}
              state={state}
              onAction={props.onAction || onAction}
              closeOnSelect={closeOnSelect}
              {...item.props}
            />
          ) : (
            <MenuSectionCollectionNode
              key={item.key}
              section={item}
              state={state}
              onAction={props.onAction || onAction}
              resetProps={resetProps}
              {...item.props}
            />
          )
        )}
      </ul>
    </Fragment>
  );
}
export function MenuImpl(props) {
  const ref = useRef(null);
  const {
    items,
    measureRef,
    renderInline,
    children,
    onShouldClose = noop,
    closeOnSelect = true,
    onAction = noop,
    selectedKeys,
    onSelectionChange,
  } = props;
  const {
    style,
    testId,
    innerRef,
    vislyProps,
    values,
    resetProps,
  } = usePrimitive({
    ref,
    props,
  });
  const state = useTreeState({ ...props, children: items });
  const { menuProps } = useMenu({ ...props, children: items }, state, ref);
  const _style = { ...style, margin: 0 };

  if (renderInline) {
    return (
      <MenuContext.Provider
        value={{
          style: _style,
          className: vislyProps.className,
          renderInline: true,
          onAction,
          onShouldClose,
          resetProps,
        }}
      >
        <ul
          {...mergeProps(menuProps, vislyProps)}
          data-testid={testId}
          ref={combineRef(ref, combineRef(measureRef, innerRef))}
          style={_style}
        >
          {renderChildren(children, values)}
        </ul>
      </MenuContext.Provider>
    );
  }

  return (
    <MenuContext.Provider
      value={{
        style: _style,
        className: vislyProps.className,
        onAction,
        onShouldClose,
        resetProps,
        selectedKeys,
        onSelectionChange,
      }}
    >
      <ul
        {...mergeProps(menuProps, vislyProps)}
        data-testid={testId}
        ref={combineRef(ref, innerRef)}
        style={_style}
      >
        {[...state.collection].map((item) =>
          item.type !== "section" ? (
            <MenuItemCollectionNode
              key={item.key}
              item={item}
              state={state}
              onAction={onAction}
              closeOnSelect={closeOnSelect}
              {...item.props}
            />
          ) : (
            <MenuSectionCollectionNode
              key={item.key}
              section={item}
              state={state}
              onAction={onAction}
              closeOnSelect={closeOnSelect}
              resetProps={resetProps}
              {...item.props}
            />
          )
        )}
      </ul>
    </MenuContext.Provider>
  );
}
export function MenuSectionImpl(props) {
  const { measureRef } = props;
  const ref = useRef(null);
  const { style, testId, innerRef, vislyProps, values } = usePrimitive({
    ref,
    props,
  });
  return (
    <div
      style={style}
      data-testid={testId}
      ref={combineRef(measureRef, innerRef)}
      {...vislyProps}
    >
      {renderChildren(props.vislyChildren, values)}
    </div>
  );
}
export function MenuSectionCollectionNode({
  section,
  state,
  onAction,
  closeOnSelect,
  resetProps,
}) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });
  return (
    <li
      {...itemProps}
      style={{
        flexDirection: "column",
      }}
    >
      {section.rendered && (
        <span
          {...headingProps}
          style={{
            width: "100%",
          }}
        >
          {section.rendered}
        </span>
      )}
      <ul
        {...mergeProps(groupProps, resetProps)}
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[...section.childNodes].map((node) => (
          <MenuItemCollectionNode
            key={node.key}
            item={node}
            state={state}
            onAction={onAction}
            closeOnSelect={closeOnSelect}
            {...node.props}
          />
        ))}
      </ul>
    </li>
  );
}

function SubmenuItemImpl(props) {
  const { measureRef, renderInline, crossOffset = 0 } = props;
  const ref = useRef(null);
  const { isFocused, isOpen } = useContext(ItemContext) || {};
  const { style, testId, values, vislyProps } = usePrimitive({
    ignoreFocusHandling: true,
    isFocusVisible: isFocused,
    ref,
    props,
  });
  const triggerRef = React.useRef();

  if (renderInline) {
    return (
      <div
        data-testid={testId}
        ref={combineRef(ref, measureRef)}
        style={style}
        {...vislyProps}
      >
        {renderChildren(props.vislyChildren, values)}
      </div>
    );
  }

  return (
    <div
      data-testid={testId}
      ref={combineRef(ref, triggerRef)}
      style={style}
      {...vislyProps}
    >
      {renderChildren(props.vislyChildren, values)}

      <Popover
        isOpen={isOpen}
        placement="right top"
        triggerRef={triggerRef}
        autoFocusFirst={true}
        containFocus
        crossOffset={crossOffset}
      >
        <SubMenuCollectionRoot {...props} />
      </Popover>
    </div>
  );
}

function MenuItemImpl(props) {
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
      key={props.key}
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      {...vislyProps}
      style={style}
    >
      {renderChildren(props.children, values)}
    </div>
  );
}

function MenuItemCollectionNode({
  item,
  state,
  onAction,
  closeOnSelect = false,
}) {
  const itemRef = React.useRef();
  const isSelected = state.selectionManager.isSelected(item.key);
  const { onShouldClose } = useContext(MenuContext);
  const { close: closeSelf } = useContext(ItemContext) || {
    close: onShouldClose,
  };
  const { isFocusVisible, focusProps } = useFocusRing();
  const [isOpen, setIsOpen] = useState(false);
  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      closeOnSelect,
      isDisabled: item.isDisabled,
      isSelected,
      onAction,
      onClose: onShouldClose,
    },
    state,
    itemRef
  );
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
        setIsOpen(true);
      } else if (e.key === "ArrowLeft" || e.key === "Escape") {
        setIsOpen(false);
        closeSelf();
      }
    },
  });
  const { hoverProps } = useHover({
    onHoverChange: (isHovering) => {
      if (isHovering) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    },
  });
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <li
      {...mergeProps(menuItemProps, focusProps, keyboardProps, hoverProps)}
      ref={itemRef}
    >
      <ItemContext.Provider
        value={{
          isSelected,
          isFocused: isFocusVisible,
          key: item.key,
          itemRef,
          isOpen,
          close,
        }}
      >
        {item.rendered}
      </ItemContext.Provider>
    </li>
  );
}

export const MenuItemRoot = proxy(
  buildCollectionItemProxyWithType(MenuItemImpl),
  MenuItemImpl
);
export const SubMenuRoot = proxy(
  buildCollectionItemProxyWithType(SubmenuItemImpl),
  SubmenuItemImpl
);
export const MenuSectionRoot = proxy(
  buildCollectionSectionProxy(MenuSectionImpl),
  MenuSectionImpl
);
export const MenuCheckableRoot = proxy(
  buildCollectionItemProxyWithType(MenuItemImpl),
  MenuItemImpl
);
export function SubMenuCollectionRoot(props) {
  return (
    <CollectionRoot
      {...props}
      ParentCtor={SubmenuImpl}
      ItemCtor={MenuItemImpl}
    />
  );
}
export function MenuRoot(props) {
  return (
    <CollectionRoot {...props} ParentCtor={MenuImpl} ItemCtor={MenuItemImpl} />
  );
}