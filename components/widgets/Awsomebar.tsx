"use client";

import { RootState } from "@/redux/store";
import { Button } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Awsomebar() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  return (
    <Button
      placeholder={undefined}
      variant="filled"
      size="sm"
      className="flex items-center gap-3 mx-3 border border-light-primary !bg-light-primary normal-case font-normal shadow-none rounded-md dark:!bg-dark-secondary dark:border-dark-primary text-light-secondary dark:text-dark-secondary"
    >
      <CiSearch size={20} color={darkMode ? "#d2d2d2" : "#4d4764"} />
      Search
    </Button>
  );
}
