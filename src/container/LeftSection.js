import React from "react";
import { AppSpacer, SectionHeader } from "../components";
import largeLogo from "../assets/bearish_large_logo.png";
import smallLogo from "../assets/bearish_small_logo.png";
import { PiPlug } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import gDrive from "../assets/gdrive-small.png";
import dropbox from "../assets/dropbox-small.png";
import settingIcon from "../assets/setting-small.png";
import { useDispatch, useSelector } from "react-redux";
import { selectDrawer, toggleDrawer } from "../features/bearishSlice";

const LeftSection = () => {
  const isOpen = useSelector(selectDrawer);
  const dispatch = useDispatch();

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <React.Fragment>
      <SectionHeader>
        <img className="h-[30px] w-[30px]" src={largeLogo} alt="Bearish Logo" />
        {isOpen && (
          <React.Fragment>
            <div className="h-[40px] w-[40px] border-[1px] border-gray_color rounded-[5px]" />
            <h1 className="text-[15px] text-black">Company Name</h1>
          </React.Fragment>
        )}

        <DrawerArrow isOpen={isOpen} onCLick={handleToggleDrawer} />
      </SectionHeader>

      <div className="dashboard-main-area border-r-[1px] border-r-gray_color">
        <AppSpacer />
        <CreateButton />
        <SectionDividerTile title="Cloud Storage" />
        <div className="px-4">
          <LeftSectionOptionTile title="Bearish OS" />
          <LeftSectionOptionTile imgSrc={gDrive} title="Google Drive" />
          <LeftSectionOptionTile imgSrc={dropbox} title="Dropbox" />
          <AppSpacer />
          <SectionViewMoreTile />
          <AppSpacer />
        </div>
        <SectionDividerTile title="Shared" />
      </div>
    </React.Fragment>
  );
};

export default LeftSection;

const SectionDividerTile = ({ title = "Cloud Storage" }) => {
  const isOpen = useSelector(selectDrawer);
  if (!isOpen) {
    return (
      <div className="flex gap-2 items-center py-3">
        <div className="h-[1px] bg-app_border flex-1" />
      </div>
    );
  }
  return (
    <div className="flex gap-2 items-center pl-4 py-3">
      <h2 className={`text-[1em] font-[600]`}>{title}</h2>
      <div className="h-[1px] bg-app_border flex-1" />
    </div>
  );
};

const LeftSectionOptionTile = ({
  title = "Cloud Storage",
  imgSrc = smallLogo,
}) => {
  const isOpen = useSelector(selectDrawer);
  return (
    <div className="flex gap-2 py-3 items-center">
      <div
        className={`${
          !isOpen
            ? "h-[25px] w-[25x] mx-auto"
            : "h-[20px] w-[20x] max-w-[20px] max-h-[20px]"
        } `}
      >
        <img
          className="w-full h-full object-contain"
          src={imgSrc}
          alt="bearish-logo"
        />
      </div>
      {isOpen && (
        <React.Fragment>
          <p className="text-[13px] text-black font-[300]">{title}</p>
          <div className="h-[20px] w-[20x] ml-auto">
            <img src={settingIcon} alt="setting-icon" />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export const SectionViewMoreTile = () => {
  const isOpen = useSelector(selectDrawer);
  if (!isOpen) {
    return (
      <div className="flex gap-2 items-center justify-center">
        <span className="block bearish_arrow green down" />
      </div>
    );
  }
  return (
    <div className="flex gap-2 items-center">
      <span className="block bearish_arrow green down ml-1" />
      <span className="text-[13px]">View More</span>
    </div>
  );
};

const DrawerArrow = ({ isOpen, onCLick }) => {
  return (
    <div
      className={`bearish_arrow green ml-auto ${isOpen ? "left" : "right"}`}
      onClick={onCLick}
    ></div>
  );
};

const CreateButton = () => {
  const isOpen = useSelector(selectDrawer);
  if (!isOpen) {
    return (
      <div className="px-2 py-2">
        <button className="flex gap-2 items-center bg-app_brown text-[15px] py-2 px-4 text-white rounded-[5px] shadow-create_button">
          <GoPencil />
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <button className="flex gap-2 items-center bg-app_brown text-[15px] py-2 px-4 text-white rounded-[5px] shadow-create_button">
        <GoPencil />
        <span className="create-button-text">Create New</span>
      </button>
      <PiPlug size={20} />
    </div>
  );
};
