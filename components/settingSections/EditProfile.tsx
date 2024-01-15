"use client";

import { Typography } from "@material-tailwind/react";

export default function EditProfile() {
  return (
    <section id="#profile">
      <Typography
        placeholder={undefined}
        variant="h5"
        className="text-light-primary text-lg mb-2  dark:text-white"
      >
        Manage Profile
      </Typography>
      <Typography
        placeholder={undefined}
        variant="small"
        className="text-light-tertiary"
      >
        Control your personal information and preferences for a personalized
        experience.
      </Typography>
    </section>
  );
}
