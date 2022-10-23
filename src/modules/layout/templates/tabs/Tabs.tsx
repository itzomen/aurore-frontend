import React, { useState } from "react"
import TabHead from "./TabHead"

// styles import
import styles from "./tab.module.css"

type ChildrenProp = {
  children?: React.ReactElement[]
}

const Tabs: React.FC<ChildrenProp> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <ul className={styles.tab__head__list}>
        {children &&
          children.map((item, index) => (
            <TabHead
              key={index}
              title={item?.props?.title || ""}
              index={index}
              // btnWidth={item?.props?.btnWidth || 40}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
            />
          ))}
      </ul>
      {children && children[selectedTab]}
    </div>
  )
}

export default Tabs
