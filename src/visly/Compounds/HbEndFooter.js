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
} from "../_internal_primitives";
import HbButtonWithIconComposite, {
  HbButtonWithIconContext,
} from "../HbButtonWithIcon";
import HbLinkButtonComposite, { HbLinkButtonContext } from "../HbLinkButton";
import HbButtonComposite, { HbButtonContext } from "../HbButton";

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
      GMQGJ3oWuC: {
        none: {
          text: "$59.99",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "NoHbAddAnotherDog",
    layers: {},
  },
  {
    type: "boolean",
    propName: "stack",
    layers: {},
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
      VJaaiFG35i: {
        none: {
          text: "Add another dog",
        },
      },
      FY2RCHsKNM: {
        none: {
          text: "Continue to Checkout",
        },
      },
      HTkUPAjJCp: {
        none: {
          text: "Start OVer",
          variant: "contained",
        },
      },
      MRiDQF3hkD: {
        none: {
          text: "Restart",
          variant: "contained",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "NoHbAddAnotherDog",
    layers: {
      QNXBFmS13r: {},
      VJaaiFG35i: {},
      FY2RCHsKNM: {},
      HTkUPAjJCp: {},
      MRiDQF3hkD: {},
    },
  },
  {
    type: "boolean",
    propName: "stack",
    layers: {
      QNXBFmS13r: {},
      VJaaiFG35i: {
        none: {
          text: "+Dog",
        },
      },
      FY2RCHsKNM: {
        none: {
          text: "Checkout",
        },
      },
      HTkUPAjJCp: {},
      MRiDQF3hkD: {
        none: {
          text: "Restart",
        },
      },
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "NoHbAddAnotherDog",
  },
  {
    type: "boolean",
    propName: "stack",
  },
];

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
      addSpacing={true}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "k3jaASDPhw",
        scope: "XdYhdmDsxs",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Container_K8Rvc3Sc8R"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_K8Rvc3Sc8R"
            }
            key={"K8Rvc3Sc8R"}
            addSpacing={true}
            element={getStyle("K8Rvc3Sc8R", "htmlElement")}
          >
            <ContainerPrimitive
              id={"Row_8NeAjDqg32"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_8NeAjDqg32"
              }
              key={"8NeAjDqg32"}
              addSpacing={true}
              element={getStyle("8NeAjDqg32", "htmlElement")}
            >
              <TextPrimitive
                id={"Total_XXvgsKKhsZ"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_XXvgsKKhsZ"
                }
                key={"XXvgsKKhsZ"}
                text={
                  exists(props.total)
                    ? props.total
                    : getStyle("XXvgsKKhsZ", "text")
                }
                element={getStyle("XXvgsKKhsZ", "htmlElement")}
              />
              <TextPrimitive
                id={"Text_96PHAUg8AY"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_96PHAUg8AY"
                }
                key={"96PHAUg8AY"}
                text={
                  exists(props.priceOriginal)
                    ? props.priceOriginal
                    : getStyle("96PHAUg8AY", "text")
                }
                element={getStyle("96PHAUg8AY", "htmlElement")}
              />
              <TextPrimitive
                id={"Text_GMQGJ3oWuC"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_GMQGJ3oWuC"
                }
                key={"GMQGJ3oWuC"}
                text={
                  exists(props.priceFinal)
                    ? props.priceFinal
                    : getStyle("GMQGJ3oWuC", "text")
                }
                element={getStyle("GMQGJ3oWuC", "htmlElement")}
              />
            </ContainerPrimitive>
            <ContainerPrimitive
              id={"Row_3Uo7BCssEJ"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_3Uo7BCssEJ"
              }
              key={"3Uo7BCssEJ"}
              addSpacing={true}
              element={getStyle("3Uo7BCssEJ", "htmlElement")}
            >
              <ContainerPrimitive
                id={"Row_FvzVudkqtn"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_FvzVudkqtn"
                }
                key={"FvzVudkqtn"}
                addSpacing={true}
                element={getStyle("FvzVudkqtn", "htmlElement")}
              >
                {[
                  props.HbLinkButton === undefined ? (
                    <HbLinkButtonComposite
                      key={"VJaaiFG35i"}
                      {...getCompositeDefaultProps("VJaaiFG35i")}
                      id="HbLinkButton_VJaaiFG35i"
                      className="__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_VJaaiFG35i"
                    />
                  ) : (
                    <HbLinkButtonContext.Provider
                      key="VJaaiFG35i-provider"
                      value={{
                        key: "VJaaiFG35i",
                        id: "HbLinkButton_VJaaiFG35i",
                        className:
                          "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_VJaaiFG35i",
                        ...getCompositeDefaultProps("VJaaiFG35i"),
                      }}
                    >
                      {props.HbLinkButton}
                    </HbLinkButtonContext.Provider>
                  ),
                  <ContainerPrimitive
                    key={"K4wEpWEnXY"}
                    id={"Slot_K4wEpWEnXY"}
                    className={
                      "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_K4wEpWEnXY"
                    }
                    addSpacing={false}
                  >
                    {props.HelpSlot}
                  </ContainerPrimitive>,
                ]}
              </ContainerPrimitive>
              <ContainerPrimitive
                id={"Row_XgdpVejVV4"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_XgdpVejVV4"
                }
                key={"XgdpVejVV4"}
                addSpacing={true}
                element={getStyle("XgdpVejVV4", "htmlElement")}
              >
                {[
                  props.RestartSlot === undefined ? (
                    <HbButtonComposite
                      key={"HTkUPAjJCp"}
                      {...getCompositeDefaultProps("HTkUPAjJCp")}
                      id="RestartSlot_HTkUPAjJCp"
                      className="__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_HTkUPAjJCp"
                    />
                  ) : (
                    <HbButtonContext.Provider
                      key="HTkUPAjJCp-provider"
                      value={{
                        key: "HTkUPAjJCp",
                        id: "RestartSlot_HTkUPAjJCp",
                        className:
                          "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_HTkUPAjJCp",
                        ...getCompositeDefaultProps("HTkUPAjJCp"),
                      }}
                    >
                      {props.RestartSlot}
                    </HbButtonContext.Provider>
                  ),
                  props.HbButtonWithIcon === undefined ? (
                    <HbButtonWithIconComposite
                      key={"QNXBFmS13r"}
                      {...getCompositeDefaultProps("QNXBFmS13r")}
                      id="HbButtonWithIcon_QNXBFmS13r"
                      className="__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_QNXBFmS13r"
                    />
                  ) : (
                    <HbButtonWithIconContext.Provider
                      key="QNXBFmS13r-provider"
                      value={{
                        key: "QNXBFmS13r",
                        id: "HbButtonWithIcon_QNXBFmS13r",
                        className:
                          "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_QNXBFmS13r",
                        ...getCompositeDefaultProps("QNXBFmS13r"),
                      }}
                    >
                      {props.HbButtonWithIcon}
                    </HbButtonWithIconContext.Provider>
                  ),
                ]}
              </ContainerPrimitive>
            </ContainerPrimitive>
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"Row_BLig2wrCBm"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_BLig2wrCBm"
            }
            key={"BLig2wrCBm"}
            addSpacing={true}
            element={getStyle("BLig2wrCBm", "htmlElement")}
          >
            {[
              props.RestartSlotMobile === undefined ? (
                <HbButtonComposite
                  key={"MRiDQF3hkD"}
                  {...getCompositeDefaultProps("MRiDQF3hkD")}
                  id="RestartSlotMobile_MRiDQF3hkD"
                  className="__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_MRiDQF3hkD"
                />
              ) : (
                <HbButtonContext.Provider
                  key="MRiDQF3hkD-provider"
                  value={{
                    key: "MRiDQF3hkD",
                    id: "RestartSlotMobile_MRiDQF3hkD",
                    className:
                      "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_MRiDQF3hkD",
                    ...getCompositeDefaultProps("MRiDQF3hkD"),
                  }}
                >
                  {props.RestartSlotMobile}
                </HbButtonContext.Provider>
              ),
              props.HbButtonWithIconMobile === undefined ? (
                <HbButtonWithIconComposite
                  key={"FY2RCHsKNM"}
                  {...getCompositeDefaultProps("FY2RCHsKNM")}
                  id="HbButtonWithIconMobile_FY2RCHsKNM"
                  className="__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_FY2RCHsKNM"
                />
              ) : (
                <HbButtonWithIconContext.Provider
                  key="FY2RCHsKNM-provider"
                  value={{
                    key: "FY2RCHsKNM",
                    id: "HbButtonWithIconMobile_FY2RCHsKNM",
                    className:
                      "__visly_reset_WDRq65T88Q __visly_scope_XdYhdmDsxs_FY2RCHsKNM",
                    ...getCompositeDefaultProps("FY2RCHsKNM"),
                  }}
                >
                  {props.HbButtonWithIconMobile}
                </HbButtonWithIconContext.Provider>
              ),
            ]}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbEndFooter.HbButtonWithIcon = HbButtonWithIconComposite;
HbEndFooter.HbLinkButton = HbLinkButtonComposite;
HbEndFooter.HbButtonWithIconMobile = HbButtonWithIconComposite;
HbEndFooter.RestartSlot = HbButtonComposite;
HbEndFooter.RestartSlotMobile = HbButtonComposite;
HbEndFooter.__variants = [
  {
    name: "NoHbAddAnotherDog",
    type: "variant",
  },
  {
    name: "stack",
    type: "variant",
  },
];

export default HbEndFooter;
