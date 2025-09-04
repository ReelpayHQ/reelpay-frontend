import { useState } from "react";
import {
  PiFilePdfFill,
  PiFileText,
  PiPencilSimple,
  PiPlus,
  PiPlusBold,
  PiXBold,
} from "react-icons/pi";
import FormBlock from "../FormBlock";
import CustomInputField from "../fields/CustomInputField";
import { Button, Flex, Modal, Radio, Upload } from "antd";
import CustomFieldCount from "../CustomFieldCount";
import {
  briefDetailMaxWords,
  briefNameMaxWords,
  wordCount,
} from "../../utils/wordCount";
import { bytesToKb } from "../../utils/fileSizeValidation";
import DeleteIcon from "../DeleteIcon";
import { productOptions } from "../../data/radioOptions";
import ServiceItem from "./ServiceItem";
import CustomButtonRadio from "../fields/CustomButtonRadio";
import productimg from "../../assets/images/img/productimg.png";
import { ActionIcon } from "../ActionIcon";

const CreateBriefSteptwo = () => {
  const [briefName, setBriefName] = useState("");
  const [link, setLink] = useState("");
  const [briefDetail, setBriefDetails] = useState("");
  const [product, setProduct] = useState("");
  const [attachement, setAttachment] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const isCharacterLimit = wordCount(value, briefNameMaxWords);
    if (isCharacterLimit) {
      setBriefName(value);
    }
  };

  const handleBriefDetailChange = (e) => {
    const value = e.target.value;
    const isCharacterLimit = wordCount(value, briefDetailMaxWords);
    if (isCharacterLimit) {
      setBriefDetails(value);
    }
  };

  const briefNameCounts = briefName.trim() === "" ? 0 : briefName.trim().length;
  const briefDetailCounts =
    briefDetail.trim() === "" ? 0 : briefDetail.trim().length;

  console.log(attachement, "attachement");

  return (
    <>
      <Modal
        title={
          <div className="flex items-center justify-between border-b border-brandAsh-902 px-4 py-3">
            <p className="font-semibold text-xl text-brandDarkPurple">
              Basic Modal
            </p>
            <PiXBold
              size={24}
              color="var(--color-brandAsh-903)"
              onClick={handleOk}
              className="cursor-pointer"
            />
          </div>
        }
        closable={false}
        open={isModalOpen}
        footer={null}
        width={553}
      >
        <div className="px-5 pt-3 pb-5 ">
          <div>
            <CustomButtonRadio
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              label={"What kind of product do you have?"}
            >
              {productOptions?.map((option, index) => {
                return (
                  <Radio value={option.value}>
                    <ServiceItem
                      data={option}
                      value={product}
                      iconWrapperBg={
                        index === 0 ? "bg-brandPink-100" : "bg-brandPurple-100"
                      }
                      iconColor={
                        index === 0
                          ? "var(--color-brandPink)"
                          : "var(--color-brandPurple)"
                      }
                    />
                  </Radio>
                );
              })}
            </CustomButtonRadio>
          </div>

          <div className="mt-4">
            <p className="font-medium text-brandBlack mb-2">
              Product image{" "}
              <span className="text-brandAsh-500">(Add at least one)</span>
            </p>
            <Upload
              showUploadList={false}
              name=""
              accept="/image/*"
              style={{
                width: "100%",
                height: "104px",
                borderRadius: "8px",
                backgroundColor: "var(--color-brandAsh-904)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                type="link"
                className="!p-1 !text-brandAsh-901 !h-0 !flex !gap-1 !items-center "
                icon={<PiPlus color="var(--color-brandAsh-901)" />}
              >
                Add image
              </Button>
            </Upload>
          </div>

          <div className="flex flex-col gap-3 mt-3">
            <div>
              <CustomInputField
                label={"Product name"}
                placeholder="e.g water bottle"
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                    fontWeight: 500,
                  },
                }}
              />
            </div>

            <div>
              <CustomInputField
                label={"Product description"}
                placeholder="e.g Summer campaign"
                type={"textArea"}
                className="!h-22.5"
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                    fontWeight: 500,
                  },
                }}
              />
              <div>
                <CustomFieldCount description={`${0}/${1000}`} />
              </div>
            </div>

            <div>
              <CustomInputField
                label={"Product homepage"}
                placeholder="https://"
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                    fontWeight: 500,
                  },
                }}
              />
            </div>

            <div>
              <CustomInputField
                label={"Product access link"}
                placeholder="https://"
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                    fontWeight: 500,
                  },
                }}
              />
            </div>

            <div>
              <CustomInputField
                label={"Product access instructions"}
                placeholder="e.g Password"
                type={"textArea"}
                className="!h-22.5"
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                    fontWeight: 500,
                  },
                }}
              />
            </div>

            <div className="flex items-center justify-end gap-3 mt-3">
              <Button type="default" className="!h-8.5" onClick={handleOk}>
                Cancel
              </Button>
              <Button
                type="primary"
                className="!w-32 !h-8.5"
                onClick={() => {
                  setIsModalOpen(false);
                  setShowImg(true);
                }}
              >
                Create product
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col gap-4">
        <FormBlock title={"Name your brief"}>
          <div>
            <CustomInputField
              label={"Brief Name"}
              count={{
                max: briefNameMaxWords,
              }}
              placeholder={"e.g Summer campaign"}
              labelProps={{
                style: {
                  color: "var(--color-brandBlack)",
                },
              }}
              value={briefName}
              onChange={(e) => handleChange(e)}
            />
            <CustomFieldCount
              title={"Use a captivating title to attract creators"}
              description={`${briefNameCounts}/${briefNameMaxWords}`}
            />
          </div>
        </FormBlock>

        <FormBlock title={"Add product"}>
          {showImg ? (
            <div className="w-31 h-22.5 rounded-lg relative">
              <img
                src={productimg}
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="absolute top-2 right-1 flex items-center gap-1">
                <ActionIcon
                  icon={PiPencilSimple}
                  onClick={() => setIsModalOpen(true)}
                />
                <ActionIcon
                  icon={DeleteIcon}
                  onClick={() => setShowImg(false)}
                />
              </div>
            </div>
          ) : (
            <div
              className="w-31 h-22.5 rounded-lg bg-brandAsh-600 flex items-center justify-center cursor-pointer"
              onClick={showModal}
            >
              <div className="flex flex-col items-center justify-center">
                <PiPlusBold size={24} color="var(--color-brandAsh)" />
                <p className="text-xs text-brandAsh-901">Add product</p>
              </div>
            </div>
          )}
        </FormBlock>

        <FormBlock
          title={"Brief details"}
          renderText={
            <Flex>
              <div>
                <Button
                  type="link"
                  className="!p-0 !text-brandAsh !h-0"
                  onClick={() => {}}
                  icon={<PiFileText size={20} />}
                >
                  See example
                </Button>
              </div>
            </Flex>
          }
        >
          <div>
            <div>
              <CustomInputField
                label={
                  <div className="mb-3">
                    <h3 className="text-sm font-medium text-brandblack">
                      Describe your brief
                    </h3>
                    <p className="text-sm text-brandAsh">
                      This will give creators a clear understanding of what they
                      need to do.
                    </p>
                  </div>
                }
                type={"textArea"}
                placeholder={
                  "Ignite Daily is a natural, sustained-release energy supplement. Formulated with a blend of adaptogens, B-vitamins, and nootro..."
                }
                labelProps={{
                  style: {
                    color: "var(--color-brandBlack)",
                  },
                }}
                className="!h-38.5"
                value={briefDetail}
                onChange={(e) => handleBriefDetailChange(e)}
              />
              <div className="mt-2">
                <CustomFieldCount
                  description={`${briefDetailCounts}/${briefDetailMaxWords}`}
                >
                  <div>
                    {attachement?.name ? null : (
                      <Upload
                        showUploadList={false}
                        name=""
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e?.file?.originFileObj;
                          setAttachment(file);
                        }}
                      >
                        <Button
                          type="link"
                          className="!p-1 !text-brandPink !h-0 !flex !gap-1 !items-center "
                          icon={<PiPlusBold size={16} />}
                        >
                          Add attachment
                        </Button>
                      </Upload>
                    )}
                  </div>
                </CustomFieldCount>
              </div>
              {attachement?.name ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PiFilePdfFill size={32} color="var(--color-brandPdfRed)" />
                    <div>
                      <p className="font-medium text-brandBlack">
                        {attachement?.name}
                      </p>
                      <p className="text-brandAsh">
                        {bytesToKb(attachement?.size)}kb
                      </p>
                    </div>
                  </div>
                  <DeleteIcon onClick={() => setAttachment(null)} />
                </div>
              ) : null}
            </div>

            <div className="mt-3">
              <label className="font-medium text-brandBlack">
                Provide link to a sample content you like
              </label>
              <div className="flex items-center justify-between gap-7 mt-2 mb-3">
                <div className="flex-1">
                  <CustomInputField
                    placeholder="Enter URL"
                    labelProps={{
                      style: {
                        color: "var(--color-brandBlack)",
                      },
                    }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                {link ? <DeleteIcon onClick={() => setLink("")} /> : null}
              </div>
              <Button
                type="link"
                className="!p-1 !text-brandPink !h-0 !flex !gap-1 !items-center "
                icon={<PiPlusBold size={16} />}
              >
                Add another link
              </Button>
            </div>
          </div>
        </FormBlock>

        <FormBlock
          title={
            <>
              Questions <span className="text-brandAsh">(optional)</span>
            </>
          }
        >
          <div>
            <p className="text-brandAsh text-sm my-5">
              To simplify screening and shipping, have creators provide their
              preferences and sizes upon application. You'll see their answers
              when you approve them.
            </p>
            <Button
              type="link"
              className="!p-1 !text-brandPink !h-0 !flex !gap-1 !items-center "
              icon={<PiPlusBold size={16} />}
            >
              Add a question
            </Button>
          </div>
        </FormBlock>
      </div>
    </>
  );
};

export default CreateBriefSteptwo;
