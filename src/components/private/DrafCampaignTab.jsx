import { Dropdown } from "antd";
import energysupplement from "../../assets/images/img/energysupplement.png";
import powerup from "../../assets/images/img/powerup.png";
import vitalityboost from "../../assets/images/img/vitalityboost.png";
import avatar1 from "../../assets/images/img/avatarman1.png";
import avatar2 from "../../assets/images/img/avatarman2.png";
import avatar3 from "../../assets/images/img/avatarwoman1.png";
import { PiDotsThreeBold, PiPencilSimple, PiTrashBold } from "react-icons/pi";
import { DropdownIcon } from "../navbar/DashboardNavbar";
import { useMemo } from "react";
import CustomTable from "../table/CustomTable";
import { CustomBrandName } from "../CustomBrandName";

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

  const draftCampaignData = useMemo(
    () => ({
      columns: [],
      rows: [
        ...dataItem.map((data) => {
          return {
            ...data,
            name: (
              <>
                <CustomBrandName data={data} />
              </>
            ),
            status: <p className="text-brandAsh">Draft</p>,
            date: (
              <>
                <p className="text-brandBlack">Aug 23, 2025</p>
              </>
            ),

            dropdown: (
              <Dropdown menu={{ items }} overlayClassName={"w-40 shadow-lg"}>
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
            title: "Status",
            dataIndex: "status",
          },
          {
            title: "Date",
            dataIndex: "date",
          },
          {
            title: "",
            dataIndex: "dropdown",
          },
        ]}
        data={draftCampaignData.rows}
      />
    </div>
  );
};

export default DrafCampaignTab;
