"use client";

import { Typography } from "@material-tailwind/react";

export default function Socials() {
  return (
    <section id="socials">
      <Typography
        placeholder={undefined}
        variant="h5"
        className="text-light-primary text-lg mb-2  dark:text-white"
      >
        My Socials
      </Typography>
      <Typography
        placeholder={undefined}
        variant="small"
        className="text-light-tertiary"
      >
        Improve communication and productivity by utilizing social media share
      </Typography>
    </section>
  );
}
