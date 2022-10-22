import React, { useCallback } from "react";

// stylesheet
import styles from "./tab.module.css";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  btnWidth?: string;
  selectedTab: number;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  btnWidth,
  selectedTab,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li style={{ flex: "1" }}>
      {btnWidth ? (
        <button
          className={selectedTab === index ? styles.active : ""}
          style={{ width: btnWidth }}
          onClick={onClick}
        >
          {title}
        </button>
      ) : (
        <button
          className={selectedTab === index ? styles.active : ""}
          onClick={onClick}
        >
          {title}
        </button>
      )}
    </li>
  );
};

export default TabTitle;
