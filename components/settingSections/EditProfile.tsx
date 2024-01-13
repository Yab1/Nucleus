"use client";

import { Typography } from "@material-tailwind/react";

export default function EditProfile() {
  return (
    <section id="#edit-profile">
      <Typography placeholder={undefined} variant="h5" color="black">
        Manage Profile
      </Typography>
      <Typography placeholder={undefined} variant="small" color="gray">
        Control your personal information and preferences for a personalized
        experience.
      </Typography>
    </section>
  );
}
