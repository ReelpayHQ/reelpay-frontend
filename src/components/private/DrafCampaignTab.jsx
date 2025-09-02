// import React from "react";

// const DrafCampaignTab = () => {
//   return (
//     <div>DrafCampaignTab</div>
//   )
// }

// export default DrafCampaignTab

import { Avatar, Badge, Dropdown, Flex, Table } from "antd";
import React from "react";
import energysupplement from "../../assets/images/img/energysupplement.png";
import powerup from "../../assets/images/img/powerup.png";
import vitalityboost from "../../assets/images/img/vitalityboost.png";
import avatar1 from "../../assets/images/img/avatarman1.png";
import avatar2 from "../../assets/images/img/avatarman2.png";
import avatar3 from "../../assets/images/img/avatarwoman1.png";
import {
  PiCopySimpleLight,
  PiDotsThreeBold,
  PiLinkSimple,
  PiLinkSimpleBold,
  PiPencilSimple,
  PiTrashBold,
} from "react-icons/pi";
import { DropdownIcon } from "../navbar/DashboardNavbar";

const DrafCampaignTab = () => {
  const items = [
    {
      key: "1",
      label: (
         <DropdownIcon
                 Icon={PiPencilSimple}
                 size={16}
                 name="Continue editing"
                 margin="!mt-0"
                 padding="!px-2 !py-1"
                 iconColor="black"
                 textColor="var(--color-brandBlack)"
               />
      ),
    },
    {
      key: "2",
      label: (
        <DropdownIcon
          Icon={PiTrashBold}
          size={16}
          name="Delete"
          margin="!mt-0"
          padding="!px-2 !border-t !border-brandAsh-900 !pt-1"
          iconColor="var(--color-brandRed)"
          textColor="text-brandRed"
        />
      ),
    },
  ];

  const columns = [
    {
      title: "Brief Name",
      dataIndex: "name",
      key: "name",
      render: (text, data) => {
        console.log(data);
        return (
          <Flex align="center" gap={10}>
            <div className=" w-16 h-10 rounded-[5px]">
              <img
                src={data.brandImg}
                className="w-full h-full rounded-size5 object-conver"
              />
            </div>
            <div>
              <h1 className="font-medium text-size16 text-black">
                {data.briefName}
              </h1>
              {/* <Flex align="center" gap={7}>
                <p className="text-size13 text-brandAsh">{data.date}</p>
                <Avatar shape="circle" size={6} className="!bg-brandAsh-900" />
                <span className="font-medium text-size13 text-brandGreen-100">
                  {data.status}
                </span>
              </Flex> */}
            </div>
          </Flex>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, data) => {
        return (
          <p className="text-brandAsh">Draft</p>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, data) => {
        return (
          <p className="text-brandBlack">Aug 23, 2025</p>
        );
      },
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: () => {
        return (
          <Dropdown menu={{ items }} overlayClassName={"w-40 shadow-lg"}>
            <PiDotsThreeBold size={24} color="var(--color-brandAsh-500)" />
          </Dropdown>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      brandImg: energysupplement,
      briefName: "Energy health supplement",
      date: "Created Aug 23, 2025",
      status: "Active",
      application: 8,
      newapplication: 3,
      approvedVideo: 1,
      totalVideo: 4,
      action: ["Ship product", "Count product"],
      hired: [
        avatar1,
        avatar3,
        avatar2,
        avatar1,
        avatar1,
        avatar3,
        avatar2,
        avatar1,
      ],
    },
    {
      key: "2",
      name: "Jim Green",
      brandImg: vitalityboost,
      briefName: "Vitality Boost formula",
      date: "Created Aug 23, 2025",
      status: "Active",
      application: 5,
      newapplication: 0,
      approvedVideo: 0,
      totalVideo: 2,
      action: "No action required",
    },
    {
      key: "3",
      name: "Jim Green",
      brandImg: powerup,
      briefName: "Power Up Nutraceuticals",
      date: "Created Aug 23, 2025",
      status: "Active",
      application: 11,
      newapplication: 6,
      approvedVideo: 3,
      totalVideo: 4,
      action: ["Approve video"],
      hired: [avatar1, avatar3],
    },
  ];

  return (
    <div className="tableWrapper mt-7">
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default DrafCampaignTab;
