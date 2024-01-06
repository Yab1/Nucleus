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
        <Badge content="5" color="blue" withBorder>
          <MenuHandler>
            <IconButton
              placeholder={undefined}
              variant="text"
              className="rounded-full !p-0"
            >
              <FaBell size={20} />
            </IconButton>
          </MenuHandler>
        </Badge>
        <MenuList placeholder={undefined} className="w-96">
          <Tabs value={activeTab}>
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
