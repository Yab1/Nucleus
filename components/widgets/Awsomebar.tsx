"use client";

import { Button } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";

export default function Awsomebar() {
  return (
    <Button
      placeholder={undefined}
      variant="filled"
      size="sm"
      color="gray"
      className="flex items-center gap-3 mx-3 border border-grayish-blue !bg-off-white normal-case font-normal text-black shadow-none rounded-md"
    >
      <CiSearch size={20} color="black" />
      Search
    </Button>
  );
}
