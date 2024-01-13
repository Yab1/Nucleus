import { Typography } from "@material-tailwind/react";

export default function Personal() {
  return (
    <section id="personal">
      <Typography placeholder={undefined} variant="h5" color="black">
        Notifications
      </Typography>
      <Typography placeholder={undefined} variant="small" color="gray">
        Stay informed and customize your notification preferences to suit your
        workflow.
      </Typography>
    </section>
  );
}
