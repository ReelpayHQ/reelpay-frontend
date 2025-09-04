import {
  PiCircleHalfFill,
  PiDeviceMobileCamera,
  PiDevicesFill,
  PiFilmStripFill,
  PiSplitHorizontalBold,
  PiSquareBold,
  PiTagFill,
  PiUsersFill,
  PiVideoCameraFill,
} from "react-icons/pi";
import instagram from "../assets/images/svg/instagram.svg";
import tiktok from "../assets/images/svg/tiktok.svg";

const serviceOptions = [
  {
    label: "Video",
    value: "video",

    title: "UGC Video",
    icon: PiVideoCameraFill,
    description:
      "Includes trimming, cropping and caption, delivered to you for immediate use in your campaigns.",
  },
  {
    label: "Social",
    value: "social",
    title: "UGC + Social posting",
    icon: PiUsersFill,
    description:
      "Videos are done by the creators and posted directly to their feed.",
  },
];

const productOptions = [
  {
    label: "Physical",
    value: "physical",

    title: "Physical product",
    icon: PiTagFill,
    description:
      "An item that must be shipped to the creator for use in the content.",
  },
  {
    label: "Digital",
    value: "digital",
    title: "Digital product",
    icon: PiDevicesFill,
    description:
      "An item (like an app, file, or link) that can be shared online.",
  },
];

const editingOptions = [
  {
    label: "Basic",
    value: "basic",
    title: "Basic editing",
    icon: PiSplitHorizontalBold,
    description:
      "Includes trimming, cropping and caption. Good for immediate use in your campaigns.",
  },
  {
    label: "Footage",
    value: "footage",
    title: "Raw Footage",
    icon: PiFilmStripFill,
    description:
      "Select this option if you want raw, unedited video directly from the creator.",
  },
];

const platformOptions = [
  {
    value: "tiktok",
    label: "TikTok",
    img: tiktok,
    description: "TikTok",
  },
  {
    value: "instagram",
    label: "Instagram",
    img: instagram,
    description: "Instagram",
  },
];

const durationOptions = [
  {
    value: "15-30",
    label: "15-30",
    description: "15 - 30 sec",
    icon: PiCircleHalfFill,
  },
  {
    value: "30-60",
    label: "30-60",
    description: "30 - 60 sec",
    icon: PiCircleHalfFill,
  },
];

const aspectRatioOptions = [
  {
    value: "9:16",
    label: "9:16",
    description: "Reel (9:16)",
    icon: PiDeviceMobileCamera,
  },
  {
    value: "4:5",
    label: "4:5",
    description: "Vertical (4:5)",
    icon: PiSquareBold,
  },
];

export {
  serviceOptions,
  editingOptions,
  platformOptions,
  durationOptions,
  aspectRatioOptions,
  productOptions
};
