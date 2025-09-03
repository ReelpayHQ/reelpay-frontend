import { Button, Flex, Tabs } from "antd";
import ActiveCampaignTab from "../../components/private/ActiveCampaignTab";
import CompletedCampaignTab from "../../components/private/CompletedCampaignTab";
import DrafCampaignTab from "../../components/private/DrafCampaignTab";

const Campaign = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Active",
      children: <ActiveCampaignTab />,
    },
    {
      key: "2",
      label: "Draft",
      children: <DrafCampaignTab />,
    },
    {
      key: "3",
      label: "Completed",
      children: <CompletedCampaignTab />,
    },
  ];

  return (
    <div>
      <Flex align="center" justify="space-between" className="!py-10">
        <h1 className="text-size32 font-semibold text-black">Campaigns</h1>
        <Button className="!w-29" type="primary">
          Create brief
        </Button>
      </Flex>
      <div className="campaignTabWrapper">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Campaign;
