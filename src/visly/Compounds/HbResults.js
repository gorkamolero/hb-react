// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbResults.css";
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
import HbButtonComposite, { HbButtonContext } from "../HbButton";

const styles = [
  {
    type: "default",
    layers: {
      "72EEoP6Shu": {
        none: {
          text:
            "Small batch cooked at lower temperatures and made with real chicken and turkey, added probiotics and natural ingredients",
        },
      },
      HM7QLqsybb: {
        none: {
          text: "Averylongname’s Plan",
        },
      },
      G19QPyqmt5: {
        none: {
          htmlElement: "aside",
        },
      },
      TSKydwWpV5: {
        none: {
          text: "2 week trial (20% off)",
        },
      },
      Xdq8EgbVmd: {
        none: {
          text: "After the trial (10% off)",
        },
      },
      "8sMkGDxBq1": {
        none: {
          text:
            "Your 4 week plan will be billed at the discounted price of $45.36 every 4 weeks. That’s only $1.62/day. No commitment. Modify, swap or cancel anytime.",
        },
      },
      PyjEEck4UC: {
        none: {
          role: "img",
          icon: require("../assets/30e3cbc9-e9aa-470f-b855-a46ead2e3c56.svg"),
          useMask: true,
        },
      },
      MCawwQFVkV: {
        none: {
          text: "Save 20% today if you choose to subscribe.",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "trialOff",
    layers: {
      PyjEEck4UC: {
        none: {
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
      NnntHPR8KU: {
        none: {
          text: "Continue to checkout",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "trialOff",
    layers: {
      NnntHPR8KU: {},
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "trialOff",
  },
];

export const HbResultsContext = createContext(null);

function HbResults(_props) {
  const defaults = useContext(HbResultsContext);
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
        scope: "GBUFXK8ScG",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"CardHeader_DA8Xa72aFn"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_DA8Xa72aFn"
            }
            key={"DA8Xa72aFn"}
            addSpacing={true}
            element={getStyle("DA8Xa72aFn", "htmlElement")}
          >
            <ContainerPrimitive
              id={"LeftSide_WRyAaE5y9d"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_WRyAaE5y9d"
              }
              key={"WRyAaE5y9d"}
              addSpacing={true}
              element={getStyle("WRyAaE5y9d", "htmlElement")}
            >
              {
                <TextPrimitive
                  id={"CardTitle_HM7QLqsybb"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_HM7QLqsybb"
                  }
                  key={"HM7QLqsybb"}
                  text={
                    exists(props.verylongname)
                      ? props.verylongname
                      : getStyle("HM7QLqsybb", "text")
                  }
                  element={getStyle("HM7QLqsybb", "htmlElement")}
                />
              }
            </ContainerPrimitive>
            <ContainerPrimitive
              id={"RightSide_G19QPyqmt5"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_G19QPyqmt5"
              }
              key={"G19QPyqmt5"}
              addSpacing={true}
              element={getStyle("G19QPyqmt5", "htmlElement")}
            >
              {
                <ContainerPrimitive
                  key={"WrwbbVn12W"}
                  id={"Slot_WrwbbVn12W"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_WrwbbVn12W"
                  }
                  addSpacing={false}
                >
                  {props.ImageSlot}
                </ContainerPrimitive>
              }
            </ContainerPrimitive>
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"CardContent_UdYVCcCaqY"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_UdYVCcCaqY"
            }
            key={"UdYVCcCaqY"}
            addSpacing={false}
            element={getStyle("UdYVCcCaqY", "htmlElement")}
          >
            <ContainerPrimitive
              key={"7XCbQ9FX7m"}
              id={"Slot_7XCbQ9FX7m"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_7XCbQ9FX7m"
              }
              addSpacing={false}
            >
              {props.children}
            </ContainerPrimitive>
            <SpacerPrimitive
              id={"Spacer_TyccgJikTY"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_TyccgJikTY"
              }
              key={"TyccgJikTY"}
            />
            <ContainerPrimitive
              id={"Content_N3yQYTcaWV"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_N3yQYTcaWV"
              }
              key={"N3yQYTcaWV"}
              addSpacing={true}
              element={getStyle("N3yQYTcaWV", "htmlElement")}
            >
              <TextPrimitive
                id={"Title1_TSKydwWpV5"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_TSKydwWpV5"
                }
                key={"TSKydwWpV5"}
                text={getStyle("TSKydwWpV5", "text")}
                element={getStyle("TSKydwWpV5", "htmlElement")}
              />
              <TextPrimitive
                id={"Description_72EEoP6Shu"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_72EEoP6Shu"
                }
                key={"72EEoP6Shu"}
                text={
                  exists(props.trial)
                    ? props.trial
                    : getStyle("72EEoP6Shu", "text")
                }
                element={getStyle("72EEoP6Shu", "htmlElement")}
              />
              <SpacerPrimitive
                id={"Spacer_GTNJNAq2jj"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_GTNJNAq2jj"
                }
                key={"GTNJNAq2jj"}
              />
              <TextPrimitive
                id={"Title2_Xdq8EgbVmd"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_Xdq8EgbVmd"
                }
                key={"Xdq8EgbVmd"}
                text={getStyle("Xdq8EgbVmd", "text")}
                element={getStyle("Xdq8EgbVmd", "htmlElement")}
              />
              <TextPrimitive
                id={"Description_8sMkGDxBq1"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_8sMkGDxBq1"
                }
                key={"8sMkGDxBq1"}
                text={
                  exists(props.afterTrial)
                    ? props.afterTrial
                    : getStyle("8sMkGDxBq1", "text")
                }
                element={getStyle("8sMkGDxBq1", "htmlElement")}
              />
            </ContainerPrimitive>
            <ContainerPrimitive
              id={"TrialOff_S7T37kknMS"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_S7T37kknMS"
              }
              key={"S7T37kknMS"}
              addSpacing={false}
              element={getStyle("S7T37kknMS", "htmlElement")}
            >
              <ContainerPrimitive
                id={"Arrow_93EMydgdsv"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_93EMydgdsv"
                }
                key={"93EMydgdsv"}
                addSpacing={false}
                element={getStyle("93EMydgdsv", "htmlElement")}
              >
                {
                  <IconPrimitive
                    id={"Icon_PyjEEck4UC"}
                    className={
                      "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_PyjEEck4UC"
                    }
                    key={"PyjEEck4UC"}
                    useMask={getStyle("PyjEEck4UC", "useMask")}
                    src={getStyle("PyjEEck4UC", "icon")}
                  />
                }
              </ContainerPrimitive>
              <SpacerPrimitive
                id={"Spacer_MLHN6nHhMa"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_MLHN6nHhMa"
                }
                key={"MLHN6nHhMa"}
              />
              <TextPrimitive
                id={"Text_MCawwQFVkV"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_MCawwQFVkV"
                }
                key={"MCawwQFVkV"}
                text={getStyle("MCawwQFVkV", "text")}
                element={getStyle("MCawwQFVkV", "htmlElement")}
              />
            </ContainerPrimitive>
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"CardFooter_6xWxhWEy3g"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_6xWxhWEy3g"
            }
            key={"6xWxhWEy3g"}
            addSpacing={false}
            element={getStyle("6xWxhWEy3g", "htmlElement")}
          >
            {props.HbButton === undefined ? (
              <HbButtonComposite
                key={"NnntHPR8KU"}
                {...getCompositeDefaultProps("NnntHPR8KU")}
                id="HbButton_NnntHPR8KU"
                className="__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_NnntHPR8KU"
              />
            ) : (
              <HbButtonContext.Provider
                key="NnntHPR8KU-provider"
                value={{
                  key: "NnntHPR8KU",
                  id: "HbButton_NnntHPR8KU",
                  className:
                    "__visly_reset_WDRq65T88Q __visly_scope_GBUFXK8ScG_NnntHPR8KU",
                  ...getCompositeDefaultProps("NnntHPR8KU"),
                }}
              >
                {props.HbButton}
              </HbButtonContext.Provider>
            )}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbResults.HbButton = HbButtonComposite;
HbResults.__variants = [
  {
    name: "trialOff",
    type: "variant",
  },
];

export default HbResults;
