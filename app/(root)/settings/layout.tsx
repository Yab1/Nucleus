"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { settingRoutes } from "@/routes";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section className={`${inter.className} flex flex-col gap-6 h-full`}>
      {/* <div className="flex place-items-center gap-7"> */}

      <Tabs id="custom-animation" value="general">
        <div>
          <Typography placeholder={undefined} variant="h4">
            Settings
          </Typography>
          <Typography placeholder={undefined} variant="small">
            Manage your account settings
          </Typography>
        </div>
        <TabsHeader placeholder={undefined}>
          <Tab placeholder={undefined} value="general">
            General
          </Tab>
          <Tab placeholder={undefined} value="workspace">
            Workspace
          </Tab>
        </TabsHeader>

        <TabsBody
          placeholder={undefined}
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel value="general">Data</TabPanel>
        </TabsBody>
      </Tabs>
    </section>
  );
}
