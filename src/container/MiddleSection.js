import React from "react";
import { AppSpacer, SectionHeader } from "../components";
import googleDrive from "../assets/gdrive-small.png";
import dropBox from "../assets/dropbox-small.png";
import moreIcon from "../assets/more.png";
import folderOutline from "../assets/folder-outline.png";
import categoryIcon from "../assets/category.png";
import menuIcon from "../assets/menu.png";
import folderFilled from "../assets/folder-filled.png";
import settingIcon from "../assets/setting-small.png";
import docFormatIcon from "../assets/doc.png";
import fileOutline from "../assets/file.png";
import xlsFormatIcon from "../assets/xls.png";
import pptFormatIcon from "../assets/ppt.png";
import pdfFormatIcon from "../assets/pdf.png";
import mp4FormatIcon from "../assets/mp4.png";
import mp3FormatIcon from "../assets/mp3.png";
import pngFormatIcon from "../assets/png-format.png";

const profileAvatar =
  "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg";

const MiddleSection = () => {
  return (
    <React.Fragment>
      <SectionHeader isMiddle>
        <h1 className="text-[17px] text-black font-[600]">Cloud Storage</h1>
        <dov className="flex-1" />
        <div className="h-full border-l-[2px] border-gray_color pl-3 flex items-center">
          <div className="profile-avatar-container text-[17px] flex items-center justify-center cursor-pointer">
            TU
          </div>
        </div>
      </SectionHeader>
      <div className="dashboard-main-area bg-main_area px-5">
        <AppSpacer height={20} />
        <h2 className="section-title">My Cloud Storage</h2>
        <AppSpacer height={10} />
        <StorageCardScrollRow />
        <AppSpacer height={20} />
        <FolderSectionHeader />
        <AppSpacer height={10} />
        <FolderSectionScrollRow />
        <AppSpacer height={20} />
        <FileSectionRowHeader />
        <AppSpacer height={10} />
        <TableHeaderSection />
        <TableBodyRowSection />
        <TableBodyRowSection />
        <TableBodyRowSection />
        <TableBodyRowSection />
        <TableBodyRowSection />
      </div>
    </React.Fragment>
  );
};

export default MiddleSection;

const StorageServiceCard = ({
  title = "Google Drive",
  imgSrc,
  storage = 10,
  storageUsed = 15,
  filesCount = 100,
  progressClass = "progress_bar_yellow ",
}) => {
  return (
    <div className="bg-white shadow-storage_card rounded-[5px] p-3 flex-1">
      <div className="flex justify-between items-center">
        <div className="h-[30px] w-[30px]">
          <img
            src={imgSrc}
            alt="storage-service-logo"
            className="h-full 2-full object-contain"
          />
        </div>
        <img
          src={moreIcon}
          alt="more-icon"
          className="object-contain cursor-pointer"
        />
      </div>
      <AppSpacer height={15} />
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-[600] text-black">{title}</h3>
        <span className="text-[12px]  text-black opacity-[0.5]">
          {filesCount} files
        </span>
      </div>
      <AppSpacer height={20} />
      <p className="progress_usage_stats mb-1">
        {storageUsed} GB or {storage} Used
      </p>
      <div className={`w-full rounded-full h-2 mb-4  ${progressClass}`}>
        <div className=" h-2 rounded-full " style={{ width: "45%" }}></div>
      </div>
    </div>
  );
};

const ClickToScroll = () => {
  return (
    <div className="min-w-[30px] rounded-[5px] bg-black flex flex-col justify-center items-center cursor-pointer ">
      <span className="bearish_arrow white " />
    </div>
  );
};

const FolderCard = ({ title = "Folder 1" }) => {
  return (
    <div className="bg-white shadow-storage_card rounded-[5px] flex-1 flex items-center px-3">
      <div className="flex items-center gap-3 overflow-x-scroll">
        <img
          src={folderFilled}
          alt="folder-filled"
          className="w-[30px] h-[30px]"
        />
        <p className="folder-card-name">{title}</p>
      </div>
    </div>
  );
};

const TableHeaderSection = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="table-header-text thirty p-2 ">
        <span>Name</span>
      </div>
      <div className="table-header-text flex-1 p-2">
        <span>Owner</span>
      </div>
      <div className="table-header-text flex-1 p-2">
        <span>Last Opened</span>
      </div>
      <div className="table-header-text flex-1 p-2 ">
        <img
          src={settingIcon}
          alt="setting-icon"
          className="w-[20px] h-[20px] ml-auto cursor-pointer"
        />
      </div>
    </div>
  );
};

const TableBodyRowSection = () => {
  return (
    <div className="flex gap-3 items-center bg-white mb-[0.5px]">
      <div className="table-header-text thirty p-2">
        <div className="table-body-text flex items-center">
          <img
            src={docFormatIcon}
            alt="doc-format-icon"
            className="w-[20px] h-[20px] mr-2"
          />
          Name of the file
        </div>
      </div>
      <div className="table-header-text flex-1 p-2">
        <div className="table-body-text flex items-center ">
          <img
            src={profileAvatar}
            alt="profile-avatar"
            className="w-[25px] h-[25px] rounded-[100%] object-contain mr-2"
          />
          First Last Name
        </div>
      </div>
      <div className="table-header-text flex-1 p-2">
        <div className="table-body-text flex flex-col justify-center">
          6 days ago
        </div>
      </div>
      <div className="table-header-text flex-1 p-2">
        <div className="table-body-text flex flex-col justify-center">
          <img
            src={moreIcon}
            alt="more-icon"
            className="w-[20px] h-[20px] object-contain ml-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

const StorageCardScrollRow = () => {
  return (
    <div className="flex ">
      <div className="flex gap-5 flex-1 mr-6">
        <StorageServiceCard imgSrc={googleDrive} />
        <StorageServiceCard
          imgSrc={dropBox}
          title="Dropbox"
          progressClass="progress_bar_blue"
        />
        <StorageServiceCard
          imgSrc={dropBox}
          title="Box"
          progressClass="progress_bar_green"
        />
      </div>
      <ClickToScroll />
    </div>
  );
};

const FolderSectionHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={folderOutline}
          alt="folder-outline"
          className="w-[25px] h-[25px]"
        />
        <h3 className="text-[20px] font-[600] text-black">Folders</h3>
      </div>
      <SectionSortingOptionAction />
    </div>
  );
};

const FolderSectionScrollRow = () => {
  return (
    <div className="flex max-h-[40px] h-full">
      <div className="flex gap-5 flex-1 mr-6">
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </div>
      <ClickToScroll />
    </div>
  );
};

const FileFormatIcon = ({ imgSrc, title }) => {
  return (
    <img
      src={imgSrc}
      alt={title}
      className="w-[20px] h-[20px] object-contain"
    />
  );
};

const SectionSortingOptionAction = ({ title = "Show Folders" }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="border-b-[2px] border-b-dark_brown">
        <img
          src={categoryIcon}
          alt="category-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <img src={menuIcon} alt="menu-icon" className="w-[20px] h-[20px]" />
      <span className="blue_text">{title}</span>
    </div>
  );
};

const FileSectionRowHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={fileOutline}
          alt="file-outline"
          className="w-[25px] h-[25px]"
        />
        <h3 className="text-[20px] font-[600] text-black">Files</h3>
      </div>
      <div className="flex gap-2  w-[50%]">
        <FileFormatIcon imgSrc={xlsFormatIcon} title="xls-format-icon" />
        <FileFormatIcon imgSrc={docFormatIcon} title="doc-format-icon" />
        <FileFormatIcon imgSrc={pptFormatIcon} title="ppt-format-icon" />
        <FileFormatIcon imgSrc={pdfFormatIcon} title="pdf-format-icon" />
        <FileFormatIcon imgSrc={mp4FormatIcon} title="mp4-format-icon" />
        <FileFormatIcon imgSrc={mp3FormatIcon} title="mp3-format-icon" />
        <FileFormatIcon imgSrc={pngFormatIcon} title="png-format-icon" />
      </div>
      <SectionSortingOptionAction title="Show all items" />
    </div>
  );
};
