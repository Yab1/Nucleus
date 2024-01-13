"use client";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { ThemeArray } from "@/typing/ThemeArray";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/slices";

export default function Themes() {
  const dispatch = useDispatch();

  const themes: ThemeArray = [
    {
      title: "Light Theme",
      value: false,
    },
    {
      title: "Dark Theme",
      value: true,
    },
    {
      title: "System Preference",
      value: window.matchMedia("(prefers-color-scheme: dark)").matches,
    },
  ];

  return (
    <section id="themes">
      <Typography
        placeholder={undefined}
        variant="h5"
        color="black"
        className="mb-2"
      >
        Select Theme
      </Typography>
      <Typography placeholder={undefined} variant="small" color="gray">
        Customize your workspace,make it more enjoyable and comfortable to work!
      </Typography>

      <div className="grid grid-cols-3 gap-5 my-8">
        {themes.map(({ title, value }) => (
          <Button
            placeholder={undefined}
            className="p-0 bg-transparent rounded-2xl border border-light-primary shadow-sm"
            onClick={() => dispatch(toggleDarkMode(value))}
          >
            <Card placeholder={undefined}>
              <CardBody placeholder={undefined} className="p-0 text-black">
                <div className="bg-border-light-primary w-full h-40 rounded-xl rounded-es-none rounded-ee-none grid place-content-center">
                  <Image
                    src={
                      value
                        ? "/dark-theme-illustration.png"
                        : "/light-theme-illustration.png"
                    }
                    alt="illustration of a dasboard"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex items-center gap-3 py-3 px-5 normal-case font-normal text-base">
                  <div className="w-3 aspect-square ring-2 ring-blue-900 rounded-full"></div>
                  {title}
                </div>
              </CardBody>
            </Card>
          </Button>
        ))}
      </div>

      <div className="border border-light-primary"></div>
    </section>
  );
}
