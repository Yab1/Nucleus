"use client";

import { Typography } from "@material-tailwind/react";

export default function Themes() {
  return (
    <section className="mt-5 flex-1">
      <Typography placeholder={undefined} variant="h5" color="black">
        Select Themes
      </Typography>
      <Typography placeholder={undefined} variant="small">
        Customize your workspace, make it more enjoyable and confortable to
        work!
      </Typography>

      <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 w-full"></hr>
    </section>
  );
}
