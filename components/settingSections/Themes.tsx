import { Typography } from "@material-tailwind/react";

export default function Themes() {
  return (
    <section id="themes">
      <Typography placeholder={undefined} variant="h5" color="black">
        Select Theme
      </Typography>
      <Typography placeholder={undefined} variant="small" color="gray">
        Customize your workspace,make it more enjoyable and comfortable to work!
      </Typography>
    </section>
  );
}
