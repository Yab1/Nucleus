"use client";

import Link from "next/link";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  IconButton,
  Badge,
} from "@material-tailwind/react";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "Event",
      value: "event",
      content: "Show Events",
    },
    {
      label: "Inbox",
      value: "inbox",
      content: "Show Inbox",
    },
    {
      label: "Requests",
      value: "requests",
      content: "Show Requests",
    },
  ];

  return (
    <div className="ml-auto">
      <Menu
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <IconButton
            placeholder={undefined}
            variant="text"
            className="rounded-full"
          >
            <Badge
              content="5"
              color="blue"
              // className="!right-[20%] !top-[20%] !py-0 !px-0"
              withBorder
            >
              <FaBell size={20} />
            </Badge>
          </IconButton>
        </MenuHandler>
        <MenuList placeholder={undefined} className="w-96">
          <Tabs value={activeTab} className="border-none">
            <TabsHeader
              placeholder={undefined}
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  placeholder={undefined}
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-gray-900" : ""}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder={undefined}>
              {data.map(({ value, content }) => (
                <TabPanel key={value} value={value}>
                  {content}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </MenuList>
      </Menu>
    </div>
  );
}
