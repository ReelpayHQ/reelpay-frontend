import { Button, Flex, Upload } from "antd";
import { useFormikContext } from "formik";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import ErrorText from "../../../components/ErrorText";

const OnboardingForms = () => {
  const { values, setFieldValue, errors } = useFormikContext();

  const imgUrl = !(values?.file instanceof File)
    ? null
    : URL.createObjectURL(values.file);

  return (
    <div className="mt-5">
      <p className="font-medium text-sm text-brandAsh">
        Brand logo <span className="text-brandAsh-500">(1:1 png or jpeg)</span>
      </p>
      <Flex align="center" gap={10}>
        <div
          className={`w-16 h-16 rounded-full ${
            imgUrl ? "" : "bg-brandAsh-800"
          }`}
        >
          {imgUrl ? (
            <img
              src={imgUrl}
              className="w-full h-full rounded-full object-cover"
            />
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Upload
              showUploadList={false}
              name=""
              accept="/image/*"
              onChange={(e) => {
                const file = e?.file?.originFileObj;
                setFieldValue("file", file);
              }}
            >
              <Button
                type="link"
                className="!p-1 !text-brandAsh !h-0 !flex !gap-1 !items-center "
                icon={<PiUploadSimpleBold />}
              >
                {imgUrl ? "Replace" : "Upload"}
              </Button>
            </Upload>
          </div>
          <div>
            <Button
              type="link"
              className="!p-1 !text-brandRed-100 !h-0"
              onClick={(e) => {
                setFieldValue("file", null);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </Flex>
      <ErrorText error={errors?.file} />
    </div>
  );
};

export default OnboardingForms;
