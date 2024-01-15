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

  const getThemeIllustrationSrc = (value: boolean) => {
    return value
      ? "/dark-theme-illustration.png"
      : "/light-theme-illustration.png";
  };

  return (
    <section id="themes">
      <Typography
        placeholder={undefined}
        variant="h5"
        className="text-light-primary text-lg mb-2  dark:text-white"
      >
        Select Theme
      </Typography>
      <Typography
        placeholder={undefined}
        variant="small"
        className="text-light-tertiary"
      >
        Customize your workspace,make it more enjoyable and comfortable to work!
      </Typography>

      <div className="grid grid-cols-3 gap-5 my-8">
        {themes.map(({ title, value }) => (
          <button
            className="p-0 rounded-lg border border-light-primary dark:border-dark-primary shadow-sm hover:shadow-md overflow-hidden"
            onClick={() => dispatch(toggleDarkMode(value))}
          >
            <div className="bg-light-gray dark:bg-charcoal-gray h-40 grid place-content-center">
              <Image
                src={getThemeIllustrationSrc(value)}
                alt="illustration of a dashboard"
                width={170}
                height={200}
              />
            </div>

            <Typography
              placeholder={undefined}
              variant="small"
              className="text-light-primary dark:text-white normal-case font-normal flex px-5 py-3 bg-white dark:bg-dark-primary items-center gap-3"
            >
              <span className="w-3 h-3 ring-2 ring-blue-900 rounded-full"></span>
              {title}
            </Typography>
          </button>
        ))}
      </div>

      <div className="border-t border-light-primary dark:border-dark-primary"></div>
    </section>
  );
}
