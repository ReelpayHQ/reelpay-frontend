import { Button, Flex, Upload } from "antd";
import { useFormikContext } from "formik";
import { useCallback, useMemo, useState } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import ErrorText from "../../../components/ErrorText";
import Cropper from "react-easy-crop";

const OnboardingForms = () => {
  const { values, setFieldValue, errors } = useFormikContext();

  const [showCropTool, setShowCropTool] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const onCropDone = (imgCroppedArea) => {
    // create a canvas element to crop the image
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    //load the selected image

    let imageObj1 = new Image();
    imageObj1.src = imgUrl;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataUrl = canvasEle.toDataURL("image/jpeg");
      setImgAfterCrop(dataUrl);
      setShowCropTool(false);
    };
  };

  const imgUrl = useMemo(() => {
    return !(values?.file instanceof File)
      ? null
      : URL.createObjectURL(values.file);
  }, [values?.file]);

  return (
    <div>
      {imgUrl && showCropTool ? (
        <div className="bg-white absolute z-50 w-full left-0 right-0 top-0 h-screen">
          <div className="">
            <Cropper
              image={imgUrl}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button
              type="primary"
              onClick={() => onCropDone(croppedArea)}
              className="!w-60"
            >
              Crop&Apply
            </Button>
          </div>
        </div>
      ) : null}

      {/* {imgsrc?
<div className="border-8 border-red-950 h-screen">
  <div className="w-7/10 border-4 border-amber-950 m-auto mt-4">
  <div className="w-full border-4 border-b-blue-600">
     <Cropper
      image={imgsrc}
      crop={crop}
      zoom={zoom}
      aspect={1 / 1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      style={{
        containerStyle:{
          width:'100%',
          height:'50%',
          backgroundColor:'white',
          zIndex:50,
        },
        mediaStyle:{
          height:'60%',
          border:'5px solid green'
        }
      }}
    />
  </div>
<div>
  <Button type="primary">doneee</Button>
</div>
  </div>
</div>
:null} */}

      <div className="mt-5">
        <>
          <p className="font-medium text-sm text-brandAsh">
            Brand logo{" "}
            <span className="text-brandAsh-500">(1:1 png or jpeg)</span>
          </p>
          <Flex align="center" gap={10}>
            <div
              className={`w-16 h-16 rounded-full ${
                imgAfterCrop ? "" : "bg-brandAsh-800"
              }`}
            >
              {imgAfterCrop ? (
                <img
                  src={imgAfterCrop}
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
                    setShowCropTool(true);
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
                    setImgAfterCrop("");
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Flex>
          <ErrorText error={errors?.file} />
        </>
      </div>
    </div>
  );
};

export default OnboardingForms;

{
  /* {imgUrl? <div className="py-20 border-2 border-white flex flex-col">
       <div className="border-5 border-white">
         <Cropper
      image={imgUrl}
      crop={crop}
      zoom={zoom}
      aspect={1 / 1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      // style={{
      //   containerStyle:{
      //     width:'100%',
      //     height:'80%',
      //     backgroundColor:'#fff'
      //   }
      // }}
    />
       </div>
     <div>
       <Button
                // block={true}
                // type="primary"
                // className="!mt-8"
                // htmlType="submit"
                // disabled={isSubmitting}
                // loading={isSubmitting}
              >
                Continue
              </Button>
     </div>
      </div>:
      <>
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
    </>
    } */
}
