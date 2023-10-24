"use client";

import { Tabs } from 'antd';
import React,{useState} from 'react';

const TabsUI = ({items,OperationsSlot}:{items:any,OperationsSlot?:any}) => {
    const [activeTabKey, setActiveTabKey] = useState("0");

    const handleTabClick = (key: any) => {
      setActiveTabKey(key);
      // console.log(key);
    };
    return (
        <Tabs
        style={{ marginBlock: "3rem" }}
        activeKey={activeTabKey}
        onChange={handleTabClick}
        type="line"
        // type="editable-card"
        tabBarExtraContent={OperationsSlot}
        centered
        destroyInactiveTabPane
        // color="blue"
        items={items}
      >
       
      </Tabs>
    );
};

export default TabsUI;