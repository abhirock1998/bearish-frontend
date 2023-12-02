import React from "react";
import { AppSpacer, SectionHeader } from "../components";
import expandIcon from "../assets/expand.png";
import folderFilled from "../assets/folder-filled.png";
import linkIcon from "../assets/link.png";
import eyeIcon from "../assets/eye.png";
import { SectionViewMoreTile } from "./LeftSection";

const RightSection = () => {
  return (
    <React.Fragment>
      <SectionHeader isBlock>
        <div className="flex justify-between">
          <div className="">
            <h1 className="cloud-analytics">Cloud Analytics</h1>
            <p className="cloud-analytics-link-text ">
              5 Active Analytic Links
            </p>
          </div>
          <img
            src={expandIcon}
            alt="expand-icon"
            className="w-[20px] h-[20px] cursor-pointer"
          />
        </div>
      </SectionHeader>
      <div className="dashboard-main-area border-l-[1px] border-l-gray_color p-4">
        <AppSpacer />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <SectionViewMoreTile ignoreState />
      </div>
    </React.Fragment>
  );
};

export default RightSection;

const LinkCard = () => {
  return (
    <div className="link-card p-4 mb-1">
      <div className="flex gap-2 items-center">
        <img src={linkIcon} alt="link-icon" className="w-[20px] h-[20px]" />
        <p className="link-card-title">Link Name One</p>
        <div className="bearish_arrow green ml-auto" />
      </div>
      <AppSpacer />
      <div className="flex gap-2 ml-2">
        <img
          src={folderFilled}
          alt="folder-icon"
          className="w-[20px] h-[20px]"
        />
        <p className="link-card-subtitle ">Folder or File linked…</p>
      </div>
      <AppSpacer height={5} />
      <div className="flex gap-2 ml-2">
        <img src={eyeIcon} alt="folder-icon" className="w-[20px] h-[20px]" />
        <p className="link-card-subtitle ">10 Total Views</p>
      </div>
    </div>
  );
};
