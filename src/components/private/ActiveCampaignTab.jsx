import { Avatar, Badge, Dropdown, Flex } from "antd";
import { useMemo } from "react";
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
  PiPencilSimple,
  PiTrashBold,
} from "react-icons/pi";
import { DropdownIcon } from "../navbar/DashboardNavbar";
import CustomTable from "../table/CustomTable";
import { CustomBrandName } from "../CustomBrandName";
import ActionBadge from "../ActionBadge";

const ActiveCampaignTab = () => {
  const items = [
    {
      key: "1",
      label: (
        <DropdownIcon
          Icon={PiPencilSimple}
          size={16}
          name="Edit"
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
          Icon={PiLinkSimple}
          size={16}
          name="Copy link"
          margin="!mt-0"
          padding="!px-2"
          iconColor="black"
          textColor="var(--color-brandBlack)"
        />
      ),
    },
    {
      key: "3",
      label: (
        <DropdownIcon
          Icon={PiCopySimpleLight}
          size={16}
          name="Duplicate"
          margin="!mt-0"
          padding="!px-2"
          iconColor="black"
          textColor="var(--color-brandBlack)"
        />
      ),
    },
    {
      key: "4",
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

  const dataItem = [
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

  const campaignData = useMemo(
    () => ({
      columns: [],
      rows: [
        ...dataItem.map((data) => {
          const noAction = data.action === "No action required";
          return {
            ...data,
            name: (
              <>
                <CustomBrandName data={data} showMore={true} />
              </>
            ),
            application: (
              <Flex align="center" gap={4}>
                <p className="text-sm text-brandBlack">{data.application}</p>
                <Badge
                  count={`${data.newapplication} new`}
                  style={{
                    backgroundColor: "rgba(255, 247, 234, 1)",
                    color: "rgba(194, 65, 12, 1)",
                    fontSize: "14px",
                  }}
                />
              </Flex>
            ),
            hired: (
              <>
                {data?.hired?.length ? (
                  <Avatar.Group
                    size="large"
                    max={{
                      count: 3,
                      style: {
                        color: "var(--color-brandAsh)",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        border: "none",
                        fontSize: "14px",
                      },
                      popover: { trigger: "click" },
                    }}
                  >
                    {data?.hired?.map((hire) => {
                      return (
                        <Avatar
                          style={{ background: "transparent" }}
                          src={hire}
                        />
                      );
                    })}
                  </Avatar.Group>
                ) : (
                  <p className="text-2xl text-brandAsh">-</p>
                )}
              </>
            ),
            approved: (
              <p className="font-medium text-sm text-brandBlack">
                <span className="">{data.approvedVideo}</span>
                <span className="text-brandAsh-500">/{data.totalVideo}</span>
              </p>
            ),
            action: (
              <>
                {Array.isArray(data.action) ? (
                  <Flex align="center" gap={5}>
                    {data?.action?.slice(0, 1).map((action) => {
                      return (
                        <ActionBadge action={action} noAction={noAction} />
                      );
                    })}
                    {data.action.length > 1 ? (
                      <p className="text-brandAsh">+{data.action.length - 1}</p>
                    ) : null}
                  </Flex>
                ) : (
                  <ActionBadge action={data.action} noAction={noAction} />
                )}
              </>
            ),

            dropdown: (
              <Dropdown menu={{ items }} overlayClassName={"w-30 shadow-lg"}>
                <PiDotsThreeBold size={24} color="var(--color-brandAsh-500)" />
              </Dropdown>
            ),
          };
        }),
      ],
    }),
    []
  );

  return (
    <div className="mt-8">
      <CustomTable
        tableHeadData={[
          {
            title: "Brief Name",
            dataIndex: "name",
          },
          {
            title: "Applications",
            dataIndex: "application",
          },
          {
            title: "Hired",
            dataIndex: "hired",
          },
          {
            title: "Approved videos",
            dataIndex: "approved",
          },
          {
            title: "Actions required",
            dataIndex: "action",
          },
          {
            title: "",
            dataIndex: "dropdown",
          },
        ]}
        data={campaignData.rows}
      />
    </div>
  );
};

export default ActiveCampaignTab;
