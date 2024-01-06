"use client";

import { Input } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";

export default function Awsomebar() {
  return (
    <div className="w-96 flex place-items-center">
      <div className="bg-gray-200 p-[7.8px] rounded-md rounded-e-none">
        <CiSearch size={25} color="gray" />
      </div>
      <Input
        crossOrigin={undefined}
        type="text"
        placeholder="Search ..."
        className="!bg-gray-200 border-none !rounded-s-none"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
}
