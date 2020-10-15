// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbLoadingScreen.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import {
  RootPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "../_internal_primitives";
import HbProgressBarComposite, { HbProgressBarContext } from "../HbProgressBar";
import HbFirstSlideFooterComposite, {
  HbFirstSlideFooterContext,
} from "../HbFirstSlideFooter";

const styles = [
  {
    type: "default",
    layers: {
      TF559DqWXE: {
        none: {
          role: "img",
          src: require("../assets/17a82962-2adc-4a57-a7ef-b52a36220673.svg"),
          useMask: true,
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      GHuiAcBnVY: {
        none: {
          golden: true,
        },
      },
      VkW5vGa1r6: {},
    },
  },
];

const variantPropTypes = [];

export const HbLoadingScreenContext = createContext(null);

function HbLoadingScreen(_props) {
  const defaults = useContext(HbLoadingScreenContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="WfC8wEAYmR"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "WfC8wEAYmR",
        scope: "2Zvr78cate",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_2Zvr78cate_6MBJoo4gou"}
            key={"6MBJoo4gou"}
            addSpacing={false}
          >
            {[
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_2Zvr78cate_Lw4AuqLvRj"}
                key={"Lw4AuqLvRj"}
                addSpacing={false}
              >
                {
                  <ContainerPrimitive
                    className={
                      "__visly_reset __visly_scope_2Zvr78cate_9NuKFcPxSx"
                    }
                    key={"9NuKFcPxSx"}
                    addSpacing={false}
                  >
                    {
                      <IconPrimitive
                        className={
                          "__visly_reset __visly_scope_2Zvr78cate_TF559DqWXE"
                        }
                        key={"TF559DqWXE"}
                        useMask={getStyle("TF559DqWXE", "useMask")}
                        src={getStyle("TF559DqWXE", "src")}
                      />
                    }
                  </ContainerPrimitive>
                }
              </ContainerPrimitive>,
              props.HbProgressBar === undefined ? (
                <HbProgressBarComposite
                  key={"GHuiAcBnVY"}
                  {...getCompositeDefaultProps("GHuiAcBnVY")}
                  className="__visly_reset __visly_scope_2Zvr78cate_GHuiAcBnVY"
                />
              ) : (
                <HbProgressBarContext.Provider
                  key="GHuiAcBnVY-provider"
                  value={{
                    key: "GHuiAcBnVY",
                    className:
                      "__visly_reset __visly_scope_2Zvr78cate_GHuiAcBnVY",
                    ...getCompositeDefaultProps("GHuiAcBnVY"),
                  }}
                >
                  {props.HbProgressBar}
                </HbProgressBarContext.Provider>
              ),
            ]}
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_2Zvr78cate_5QBpZXrySw"}
            key={"5QBpZXrySw"}
            addSpacing={false}
          >
            {
              <ContainerPrimitive
                key={"LMeEA2JES7"}
                className={"__visly_reset __visly_scope_2Zvr78cate_LMeEA2JES7"}
                addSpacing={false}
              >
                {props.children}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_2Zvr78cate_PWRTy8cZVP"}
            key={"PWRTy8cZVP"}
            addSpacing={false}
          >
            {props.HbFirstSlideFooter === undefined ? (
              <HbFirstSlideFooterComposite
                key={"VkW5vGa1r6"}
                {...getCompositeDefaultProps("VkW5vGa1r6")}
                className="__visly_reset __visly_scope_2Zvr78cate_VkW5vGa1r6"
              />
            ) : (
              <HbFirstSlideFooterContext.Provider
                key="VkW5vGa1r6-provider"
                value={{
                  key: "VkW5vGa1r6",
                  className:
                    "__visly_reset __visly_scope_2Zvr78cate_VkW5vGa1r6",
                  ...getCompositeDefaultProps("VkW5vGa1r6"),
                }}
              >
                {props.HbFirstSlideFooter}
              </HbFirstSlideFooterContext.Provider>
            )}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbLoadingScreen.HbProgressBar = HbProgressBarComposite;
HbLoadingScreen.HbFirstSlideFooter = HbFirstSlideFooterComposite;
HbLoadingScreen.__variants = [];

export default HbLoadingScreen;
