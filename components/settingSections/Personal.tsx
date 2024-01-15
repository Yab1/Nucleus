"use client";

import { Typography } from "@material-tailwind/react";

export default function Personal() {
  return (
    <section id="personal">
      <Typography
        placeholder={undefined}
        variant="h5"
        className="text-light-primary text-lg mb-2  dark:text-white"
      >
        Notifications
      </Typography>
      <Typography
        placeholder={undefined}
        variant="small"
        className="text-light-tertiary"
      >
        Stay informed and customize your notification preferences to suit your
        workflow.
      </Typography>
    </section>
  );
}
