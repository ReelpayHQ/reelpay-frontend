import { Button, Dropdown, Flex, List } from "antd";
import React from "react";
import CustomLogo from "../CustomLogo";
import { NavLink } from "react-router";
import {
  PiCaretDownBold,
  PiCaretDownFill,
  PiChatCircleDotsBold,
  PiCheck,
  PiCheckBold,
  PiFilePlusBold,
  PiGearBold,
  PiHamburger,
  PiList,
  PiPlus,
  PiPlusBold,
  PiSignOutBold,
  PiWallet,
  PiWalletBold,
} from "react-icons/pi";
import TextIcon from "./TextIcon";
import glovoimg from "../../assets/images/img/glovo.png";
import paystack from "../../assets/images/img/paystack.png";
import BrandStatus from "../BrandStatus";

export const DropdownIcon = ({
  name,
  Icon,
  iconColor = "var(--color-brandBlack)",
  textColor = "text-brandBlack",
  margin = "",
  padding = "!px-4",
  size = 28,
}) => {
  return (
    <Flex
      align="center"
      gap={7}
      className={`${margin} ${padding} hover:bg-brandAsh-300`}
    >
      <Icon size={size} color={iconColor} />
      <p className={`text-sm ${textColor}`}>{name}</p>
    </Flex>
  );
};

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
        <div className="border-b border-brandAsh-900 pt-3 pb-2">
          <div className="flex flex-col gap-5 px-4">
            <BrandStatus img={glovoimg} name={"Glovo"} active={true} />
            <BrandStatus img={paystack} name={"Paystack"} active={false} />
          </div>
          <div className="mt-3">
            <DropdownIcon
              Icon={PiPlus}
              name="Add new brand"
              margin="mt-0 !py-2"
              iconColor="var(--color-brandAsh)"
              textColor="var(--color-brandAsh)"
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <DropdownIcon Icon={PiGearBold} name="Brand settings" margin="!py-2" />
      ),
    },
    {
      key: "3",
      label: (
        <DropdownIcon Icon={PiSignOutBold} name="Log out" margin="!py-2" />
      ),
    },
  ];

  return (
    <Flex
      align="center"
      justify="space-between"
      className="!px-5 !md:px-15 !py-3 border-b border-brandAsh-900"
    >
      <Flex align="center" gap={70}>
        <div>
          <CustomLogo />
        </div>
        <div className="items-center gap-4 hidden md:flex">
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
      <div className="hidden md:flex items-center gap-20">
        <TextIcon icon={PiWalletBold} text={"150,000"} />

        <TextIcon icon={PiChatCircleDotsBold} text={"Inbox"} />

        <Flex align="center" gap={3}>
          <div className="h-10 w-10 rounded-full">
            <img
              src={glovoimg}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
          <div className="dropdownWrapper">
            <Dropdown menu={{ items }} overlayClassName={"w-55 shadow-lg"}>
              <PiCaretDownFill
                color="var(--color-brandAsh-500)"
                className="cursor-pointer"
                size={20}
              />
            </Dropdown>
          </div>
        </Flex>
      </div>
      <div className="block md:hidden">
        <PiList size={30} color="var(--color-brandAsh)" />
      </div>
    </Flex>
  );
};

export default DashboardNavbar;
