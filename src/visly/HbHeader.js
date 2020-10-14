// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./HbHeader.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";
import HbCircleIconComposite, { HbCircleIconContext } from "./HbCircleIcon";
import HbProgressComposite, { HbProgressContext } from "./HbProgress";
import HbLogoComposite, { HbLogoContext } from "./HbLogo";

const styles = [
  {
    type: "default",
    layers: {
      WVr4DnUAPt: {
        none: {
          text: "20% Off",
        },
      },
    },
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "small",
        layers: {},
      },
      {
        propValue: "large",
        layers: {},
      },
      {
        propValue: "medium",
        layers: {},
      },
      {
        propValue: "super",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "ShowImage",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      Coy4GvRJN5: {
        none: {
          icon: require("./assets/6c09c43b-abd0-4776-8845-1535cdff712b.svg"),
          HbYellowIcon: true,
        },
      },
      B28tWsTkne: {},
      DesmwGXXNp: {},
      "9VxZfYB53B": {},
    },
  },
  {
    type: "enum",
    propName: "size",
    values: [
      {
        propValue: "small",
        layers: {
          Coy4GvRJN5: {
            none: {
              size: "small",
            },
          },
          B28tWsTkne: {},
          DesmwGXXNp: {
            none: {
              size: "small",
            },
          },
          "9VxZfYB53B": {},
        },
      },
      {
        propValue: "large",
        layers: {
          Coy4GvRJN5: {},
          B28tWsTkne: {},
          DesmwGXXNp: {},
          "9VxZfYB53B": {},
        },
      },
      {
        propValue: "medium",
        layers: {
          Coy4GvRJN5: {},
          B28tWsTkne: {},
          DesmwGXXNp: {
            none: {
              size: "small",
            },
          },
          "9VxZfYB53B": {},
        },
      },
      {
        propValue: "super",
        layers: {
          Coy4GvRJN5: {},
          B28tWsTkne: {},
          DesmwGXXNp: {},
          "9VxZfYB53B": {},
        },
      },
    ],
  },
  {
    type: "boolean",
    propName: "ShowImage",
    layers: {
      Coy4GvRJN5: {},
      B28tWsTkne: {},
      DesmwGXXNp: {},
      "9VxZfYB53B": {},
    },
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "size",
    propValues: ["small", "large", "medium", "super"],
  },
  {
    type: "boolean",
    propName: "ShowImage",
  },
];

export const HbHeaderContext = createContext(null);

function HbHeader(_props) {
  const defaults = useContext(HbHeaderContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="MPFekVRp85"
      addSpacing={false}
      internal={{
        styles: styles,
        layerId: "MPFekVRp85",
        scope: "9XVkrqrLZt",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_9XVkrqrLZt_7zMWCZsd7M"}
            key={"7zMWCZsd7M"}
            addSpacing={false}
          >
            {
              <ImagePrimitive
                className={"__visly_reset __visly_scope_9XVkrqrLZt_GPsUKuwC2X"}
                key={"GPsUKuwC2X"}
                src={
                  exists(props.bg) ? props.bg : getStyle("GPsUKuwC2X", "src")
                }
                alt={getStyle("GPsUKuwC2X", "alternateText")}
              />
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            className={"__visly_reset __visly_scope_9XVkrqrLZt_47pNJ4CTVs"}
            key={"47pNJ4CTVs"}
            addSpacing={true}
          >
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_5dTrnoEMCT"}
              key={"5dTrnoEMCT"}
              addSpacing={true}
            >
              {
                <ImagePrimitive
                  className={
                    "__visly_reset __visly_scope_9XVkrqrLZt_CdpiHELTSf"
                  }
                  key={"CdpiHELTSf"}
                  src={
                    exists(props.extraImage)
                      ? props.extraImage
                      : getStyle("CdpiHELTSf", "src")
                  }
                  alt={getStyle("CdpiHELTSf", "alternateText")}
                />
              }
            </ContainerPrimitive>
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_BvQJi9KfB1"}
              key={"BvQJi9KfB1"}
              addSpacing={true}
            >
              {[
                props.HbLogo === undefined ? (
                  <HbLogoComposite
                    key={"DesmwGXXNp"}
                    {...getCompositeDefaultProps("DesmwGXXNp")}
                    className="__visly_reset __visly_scope_9XVkrqrLZt_DesmwGXXNp"
                  />
                ) : (
                  <HbLogoContext.Provider
                    key="DesmwGXXNp-provider"
                    value={{
                      key: "DesmwGXXNp",
                      className:
                        "__visly_reset __visly_scope_9XVkrqrLZt_DesmwGXXNp",
                      ...getCompositeDefaultProps("DesmwGXXNp"),
                    }}
                  >
                    {props.HbLogo}
                  </HbLogoContext.Provider>
                ),
                props.HbProgress === undefined ? (
                  <HbProgressComposite
                    key={"B28tWsTkne"}
                    {...getCompositeDefaultProps("B28tWsTkne")}
                    className="__visly_reset __visly_scope_9XVkrqrLZt_B28tWsTkne"
                  />
                ) : (
                  <HbProgressContext.Provider
                    key="B28tWsTkne-provider"
                    value={{
                      key: "B28tWsTkne",
                      className:
                        "__visly_reset __visly_scope_9XVkrqrLZt_B28tWsTkne",
                      ...getCompositeDefaultProps("B28tWsTkne"),
                    }}
                  >
                    {props.HbProgress}
                  </HbProgressContext.Provider>
                ),
                <ContainerPrimitive
                  className={
                    "__visly_reset __visly_scope_9XVkrqrLZt_UG6YPtbpZv"
                  }
                  key={"UG6YPtbpZv"}
                  addSpacing={false}
                >
                  {[
                    props.HbCircleIcon === undefined ? (
                      <HbCircleIconComposite
                        key={"Coy4GvRJN5"}
                        {...getCompositeDefaultProps("Coy4GvRJN5")}
                        className="__visly_reset __visly_scope_9XVkrqrLZt_Coy4GvRJN5"
                      />
                    ) : (
                      <HbCircleIconContext.Provider
                        key="Coy4GvRJN5-provider"
                        value={{
                          key: "Coy4GvRJN5",
                          className:
                            "__visly_reset __visly_scope_9XVkrqrLZt_Coy4GvRJN5",
                          ...getCompositeDefaultProps("Coy4GvRJN5"),
                        }}
                      >
                        {props.HbCircleIcon}
                      </HbCircleIconContext.Provider>
                    ),
                    <SpacerPrimitive
                      className={
                        "__visly_reset __visly_scope_9XVkrqrLZt_4vbMB4cs8F"
                      }
                      key={"4vbMB4cs8F"}
                    />,
                    <TextPrimitive
                      className={
                        "__visly_reset __visly_scope_9XVkrqrLZt_WVr4DnUAPt"
                      }
                      key={"WVr4DnUAPt"}
                      text={
                        exists(props.textSlot)
                          ? props.textSlot
                          : getStyle("WVr4DnUAPt", "text")
                      }
                    />,
                  ]}
                </ContainerPrimitive>,
              ]}
            </ContainerPrimitive>
            <SpacerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_FzQE2ekJkE"}
              key={"FzQE2ekJkE"}
            />
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_DXVbq46P3D"}
              key={"DXVbq46P3D"}
              addSpacing={false}
            >
              {props.HbProgressMobile === undefined ? (
                <HbProgressComposite
                  key={"9VxZfYB53B"}
                  {...getCompositeDefaultProps("9VxZfYB53B")}
                  className="__visly_reset __visly_scope_9XVkrqrLZt_9VxZfYB53B"
                />
              ) : (
                <HbProgressContext.Provider
                  key="9VxZfYB53B-provider"
                  value={{
                    key: "9VxZfYB53B",
                    className:
                      "__visly_reset __visly_scope_9XVkrqrLZt_9VxZfYB53B",
                    ...getCompositeDefaultProps("9VxZfYB53B"),
                  }}
                >
                  {props.HbProgressMobile}
                </HbProgressContext.Provider>
              )}
            </ContainerPrimitive>
            <SpacerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_LHD69MvEi8"}
              key={"LHD69MvEi8"}
            />
            <ContainerPrimitive
              className={"__visly_reset __visly_scope_9XVkrqrLZt_Ajq15sbMPw"}
              key={"Ajq15sbMPw"}
              addSpacing={false}
            >
              <SpacerPrimitive
                className={"__visly_reset __visly_scope_9XVkrqrLZt_AmuT4WgaTf"}
                key={"AmuT4WgaTf"}
              />
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_9XVkrqrLZt_2RwNh3KRbg"}
                key={"2RwNh3KRbg"}
                addSpacing={false}
              >
                <ContainerPrimitive
                  key={"VTKN5tHTts"}
                  className={
                    "__visly_reset __visly_scope_9XVkrqrLZt_VTKN5tHTts"
                  }
                  addSpacing={false}
                >
                  {props.TitleSlot}
                </ContainerPrimitive>
                <ContainerPrimitive
                  key={"7hnTiRDRyn"}
                  className={
                    "__visly_reset __visly_scope_9XVkrqrLZt_7hnTiRDRyn"
                  }
                  addSpacing={false}
                >
                  {props.SubtitleSlot}
                </ContainerPrimitive>
                <SpacerPrimitive
                  className={
                    "__visly_reset __visly_scope_9XVkrqrLZt_JttkhPdb2e"
                  }
                  key={"JttkhPdb2e"}
                />
              </ContainerPrimitive>
              <ContainerPrimitive
                className={"__visly_reset __visly_scope_9XVkrqrLZt_kUjGG71oGb"}
                key={"kUjGG71oGb"}
                addSpacing={false}
              >
                {
                  <ImagePrimitive
                    className={
                      "__visly_reset __visly_scope_9XVkrqrLZt_AFED7U3hCF"
                    }
                    key={"AFED7U3hCF"}
                    src={
                      exists(props.extraImageT)
                        ? props.extraImageT
                        : getStyle("AFED7U3hCF", "src")
                    }
                    alt={getStyle("AFED7U3hCF", "alternateText")}
                  />
                }
              </ContainerPrimitive>
            </ContainerPrimitive>
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbHeader.HbCircleIcon = HbCircleIconComposite;
HbHeader.HbProgress = HbProgressComposite;
HbHeader.HbLogo = HbLogoComposite;
HbHeader.HbProgressMobile = HbProgressComposite;
HbHeader.__variants = [
  {
    name: "size",
    type: "group",
    variants: ["small", "large", "medium", "super"],
  },
  {
    name: "ShowImage",
    type: "variant",
  },
];

export default HbHeader;