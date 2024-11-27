import Typography from "@mui/material/Typography";
import { Colors } from "../styles";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Typography
      component={"h1"}
      fontWeight={"bold"}
      fontSize={36}
      color={Colors.black.main}
    >
      {title}
    </Typography>
  );
};
