// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./HbTestimonial.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import {
  RootPrimitive,
  SpacerPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
} from "../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      LLAN2HR72H: {
        none: {
          text: "So far so good!",
        },
      },
      GfQQK2QSw7: {
        none: {
          text: "Mary Wilkerson",
        },
      },
      Jp3AYaDT1R: {
        none: {
          icon: require("../assets/5cd79169-4d72-486a-bd71-20cfa0420bb2@1x.svg"),
          useMask: true,
        },
      },
      S3tYE3vzFu: {
        none: {
          text: "Verified",
        },
      },
      QDNh14WQhk: {
        none: {
          text: "Breed: Sharpei  -  Age: 2  -  Pickiness: Very Picky",
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

export const HbTestimonialContext = createContext(null);

function HbTestimonial(_props) {
  const defaults = useContext(HbTestimonialContext);
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
      addSpacing={false}
      internal={{
        projectId: "WDRq65T88Q",
        styles: styles,
        layerId: "TEMvSpZsq9",
        scope: "WBdVWKo3g2",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Overlay_V1dKWcVmPd"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_V1dKWcVmPd"
            }
            key={"V1dKWcVmPd"}
            addSpacing={false}
            element={getStyle("V1dKWcVmPd", "htmlElement")}
            style={{
              position: "absolute",
            }}
          >
            {
              <ContainerPrimitive
                id={"Row_HSyBqwCpTj"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_HSyBqwCpTj"
                }
                key={"HSyBqwCpTj"}
                addSpacing={false}
                element={getStyle("HSyBqwCpTj", "htmlElement")}
              >
                {null}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"Row_ThBPq1AmgT"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_ThBPq1AmgT"
            }
            key={"ThBPq1AmgT"}
            addSpacing={true}
            element={getStyle("ThBPq1AmgT", "htmlElement")}
          >
            <ContainerPrimitive
              id={"ImageContainer_BQWSpmyRhj"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_BQWSpmyRhj"
              }
              key={"BQWSpmyRhj"}
              addSpacing={false}
              element={getStyle("BQWSpmyRhj", "htmlElement")}
            >
              {
                <ImagePrimitive
                  id={"Image_G5WjNJdjcw"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_G5WjNJdjcw"
                  }
                  key={"G5WjNJdjcw"}
                  src={
                    exists(props.imageSrc)
                      ? props.imageSrc
                      : getStyle("G5WjNJdjcw", "src")
                  }
                  alt={getStyle("G5WjNJdjcw", "alternateText")}
                />
              }
            </ContainerPrimitive>
            <ContainerPrimitive
              id={"Column_SN3g8tmrW6"}
              className={
                "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_SN3g8tmrW6"
              }
              key={"SN3g8tmrW6"}
              addSpacing={false}
              element={getStyle("SN3g8tmrW6", "htmlElement")}
            >
              <ContainerPrimitive
                key={"JcvuhRskdz"}
                id={"Slot_JcvuhRskdz"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_JcvuhRskdz"
                }
                addSpacing={false}
              >
                {props.stars}
              </ContainerPrimitive>
              <SpacerPrimitive
                id={"Spacer_Wr9CQbX1o7"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_Wr9CQbX1o7"
                }
                key={"Wr9CQbX1o7"}
              />
              <ContainerPrimitive
                id={"ClientContainer_KoxVNRDdjs"}
                className={
                  "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_KoxVNRDdjs"
                }
                key={"KoxVNRDdjs"}
                addSpacing={false}
                element={getStyle("KoxVNRDdjs", "htmlElement")}
              >
                <TextPrimitive
                  id={"Client_GfQQK2QSw7"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_GfQQK2QSw7"
                  }
                  key={"GfQQK2QSw7"}
                  text={
                    exists(props.client)
                      ? props.client
                      : getStyle("GfQQK2QSw7", "text")
                  }
                  element={getStyle("GfQQK2QSw7", "htmlElement")}
                />
                <SpacerPrimitive
                  id={"Spacer_KdmQLnbq1R"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_KdmQLnbq1R"
                  }
                  key={"KdmQLnbq1R"}
                />
                <ContainerPrimitive
                  id={"Row_PoN3rEr5Aa"}
                  className={
                    "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_PoN3rEr5Aa"
                  }
                  key={"PoN3rEr5Aa"}
                  addSpacing={false}
                  element={getStyle("PoN3rEr5Aa", "htmlElement")}
                >
                  <ContainerPrimitive
                    id={"IconContainer_BPYvu5nk1j"}
                    className={
                      "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_BPYvu5nk1j"
                    }
                    key={"BPYvu5nk1j"}
                    addSpacing={false}
                    element={getStyle("BPYvu5nk1j", "htmlElement")}
                  >
                    {
                      <IconPrimitive
                        id={"Icon_Jp3AYaDT1R"}
                        className={
                          "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_Jp3AYaDT1R"
                        }
                        key={"Jp3AYaDT1R"}
                        useMask={getStyle("Jp3AYaDT1R", "useMask")}
                        src={getStyle("Jp3AYaDT1R", "icon")}
                      />
                    }
                  </ContainerPrimitive>
                  <SpacerPrimitive
                    id={"Spacer_PdZSAibW47"}
                    className={
                      "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_PdZSAibW47"
                    }
                    key={"PdZSAibW47"}
                  />
                  <TextPrimitive
                    id={"Text_S3tYE3vzFu"}
                    className={
                      "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_S3tYE3vzFu"
                    }
                    key={"S3tYE3vzFu"}
                    text={getStyle("S3tYE3vzFu", "text")}
                    element={getStyle("S3tYE3vzFu", "htmlElement")}
                  />
                </ContainerPrimitive>
              </ContainerPrimitive>
            </ContainerPrimitive>
          </ContainerPrimitive>
          <SpacerPrimitive
            id={"Spacer_F1fTPjzhrX"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_F1fTPjzhrX"
            }
            key={"F1fTPjzhrX"}
          />
          <TextPrimitive
            id={"Title_LLAN2HR72H"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_LLAN2HR72H"
            }
            key={"LLAN2HR72H"}
            text={
              exists(props.title) ? props.title : getStyle("LLAN2HR72H", "text")
            }
            element={getStyle("LLAN2HR72H", "htmlElement")}
          />
          <SpacerPrimitive
            id={"Spacer_KTFD4vqNwH"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_KTFD4vqNwH"
            }
            key={"KTFD4vqNwH"}
          />
          <TextPrimitive
            id={"Dog_QDNh14WQhk"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_QDNh14WQhk"
            }
            key={"QDNh14WQhk"}
            text={
              exists(props.dog) ? props.dog : getStyle("QDNh14WQhk", "text")
            }
            element={getStyle("QDNh14WQhk", "htmlElement")}
          />
          <SpacerPrimitive
            id={"Spacer_7Sh4tYJVoL"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_7Sh4tYJVoL"
            }
            key={"7Sh4tYJVoL"}
          />
          <ContainerPrimitive
            key={"SAc5YGxnaF"}
            id={"Slot_SAc5YGxnaF"}
            className={
              "__visly_reset_WDRq65T88Q __visly_scope_WBdVWKo3g2_SAc5YGxnaF"
            }
            addSpacing={false}
          >
            {props.Texto}
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

HbTestimonial.__variants = [];

export default HbTestimonial;
