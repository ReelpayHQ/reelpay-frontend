import { Button, Dropdown, Flex, List } from "antd";
import React from "react";
import CustomLogo from "../CustomLogo";
import { NavLink } from "react-router";
import {
  PiCaretDownBold,
  PiCaretDownFill,
  PiChatCircleDotsBold,
  PiPlus,
  PiWallet,
  PiWalletBold,
} from "react-icons/pi";
import TextIcon from "./TextIcon";
import glovoimg from "../../assets/images/img/glovo.png";

const DashboardNavbar = () => {
  const data = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Campaign",
      link: "/campaign",
    },
    {
      name: "Discover creators",
      link: "/discovercreators",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      // icon: <SmileOutlined />,
      // disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      // disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <Flex
      align="center"
      justify="space-between"
      className="!px-15 !py-3 border-b border-brandAsh-900"
    >
      <Flex align="center" gap={70}>
        <div>
          <CustomLogo />
        </div>
        <div className="flex items-center gap-4">
          {data.map((nav) => (
            <NavLink
              to={nav.link}
              //                   className={({ isActive, isPending }) =>
              //      isActive ? "bg-red-500" : ""
              //   }

              // style={}
            >
              {/* <p> */}
              {({ isActive }) => (
                <span
                  className={`text-sm font-medium transition-all duration-5 hover:text-xs ${
                    isActive
                      ? "py-2 px-4 text-brandBlack bg-brandAsh-300 rounded-lg"
                      : "text-brandAsh"
                  }`}
                >
                  {nav.name}
                </span>
              )}
              {/* {nav.name}</p> */}
            </NavLink>
          ))}
          <Button
            type="link"
            className="!p-1 !text-brandPink !h-0"
            icon={<PiPlus />}
          >
            Create Brief
          </Button>
        </div>
      </Flex>
      <Flex align="center" gap={20}>
        <TextIcon icon={PiWalletBold} text={"150,000"} />

        <TextIcon icon={PiChatCircleDotsBold} text={"Inbox"} />

        <Flex align="center" gap={3}>
          <div className="h-10 w-10 rounded-full">
            <img
              src={glovoimg}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
          <div>
            <Dropdown menu={{ items }}>
              <PiCaretDownFill color="var(--color-brandAsh-500)" size={20} />
            </Dropdown>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardNavbar;
