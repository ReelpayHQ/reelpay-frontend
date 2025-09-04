import { useState } from "react";
import FormBlock from "../FormBlock";
import { Checkbox, Flex, Radio, Tag } from "antd";
import { CustomCheckbox } from "../fields/CustomCheckbox";
import { TitleHeading } from "../TitleHeading";
import CustomTag from "../CustomTag";
import {
  ageOptions,
  appearanceOptions,
  genderOptions,
  interestOptions,
  languageOptions,
  lifeStyleOptions,
} from "../../data/optiondropdowns";

const CreateBriefStepthree = () => {
  const [lifeStyles, setLifeStyle] = useState([]);
  const [appearance, setAppearance] = useState([]);
  const [interest, setInterest] = useState([]);
  const [location, setLocation] = useState([]);
  const [age, setAge] = useState([]);
  const [language, setLanguage] = useState([]);
  const [gender, setGender] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <FormBlock title={"Demography"}>
        <div className="flex flex-col gap-7">
          <div>
            <TitleHeading text={"Creator location"} />
            <Checkbox.Group
              value={location}
              onChange={(e) => setLocation([...e])}
            >
              <CustomCheckbox
                value={"Nigeria"}
                label={
                  <span className="flex items-center gap-9">
                    Nigeria
                    <span className="font-light">
                      Other countries coming soon
                    </span>
                  </span>
                }
              />
            </Checkbox.Group>
          </div>

          <div>
            <TitleHeading text={"Preferred gender"} />
            <Radio.Group
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {genderOptions.map((gender, key) => (
                <Radio
                  key={key}
                  value={gender.toLowerCase()}
                  className="!text-brandAsh"
                >
                  {gender}
                </Radio>
              ))}
            </Radio.Group>
          </div>

          <div>
            <TitleHeading text={"Preferred age"} />
            <Checkbox.Group value={age} onChange={(e) => setAge([...e])}>
              {ageOptions.map((age, key) => (
                <CustomCheckbox key={key} label={age} value={age} />
              ))}
            </Checkbox.Group>
          </div>

          <div>
            <TitleHeading text={"Language"} />
            <Checkbox.Group
              value={language}
              onChange={(e) => setLanguage([...e])}
            >
              {languageOptions.map((language, key) => (
                <CustomCheckbox key={key} label={language} value={language} />
              ))}
            </Checkbox.Group>
          </div>
        </div>
      </FormBlock>

      <FormBlock title={"Style & Lifestyle"}>
        <div className="flex flex-col gap-7">
          <div>
            <TitleHeading text={"Appearance"} />
            <Flex wrap="wrap" align="center" gap={"small"}>
              {appearanceOptions.map((appearanceText, key) => (
                <CustomTag
                  key={key}
                  text={appearanceText}
                  onClick={() => {
                    if (appearance.includes(appearanceText)) {
                      const filteredvalue = appearance.filter(
                        (item) => item !== appearanceText
                      );
                      setAppearance(filteredvalue);
                    } else {
                      setAppearance((prev) => [...prev, appearanceText]);
                    }
                  }}
                  value={appearance}
                />
              ))}
            </Flex>
          </div>

          <div>
            <TitleHeading text={"Life style"} />
            <Flex wrap="wrap" align="center" gap={"small"}>
              {lifeStyleOptions.map((lifestyle, key) => (
                <CustomTag
                  key={key}
                  text={lifestyle}
                  onClick={() => {
                    if (lifeStyles.includes(lifestyle)) {
                      const filteredvalue = lifeStyles.filter(
                        (item) => item !== lifestyle
                      );
                      setLifeStyle(filteredvalue);
                    } else {
                      setLifeStyle((prev) => [...prev, lifestyle]);
                    }
                  }}
                  value={lifeStyles}
                />
              ))}
            </Flex>
          </div>
        </div>
      </FormBlock>

      <FormBlock title={"Niche"}>
        <div className="flex flex-col gap-7">
          <div>
            <TitleHeading text={"Interests"} />
            <Flex wrap="wrap" align="center" gap={"small"}>
              {interestOptions.map((interestText, key) => (
                <CustomTag
                  key={key}
                  text={interestText}
                  onClick={() => {
                    if (interest.includes(interestText)) {
                      const filteredvalue = interest.filter(
                        (item) => item !== interestText
                      );
                      setInterest(filteredvalue);
                    } else {
                      setInterest((prev) => [...prev, interestText]);
                    }
                  }}
                  value={interest}
                />
              ))}
            </Flex>
          </div>
        </div>
      </FormBlock>
    </div>
  );
};

export default CreateBriefStepthree;
