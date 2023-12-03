import { IconParamsT } from "./iconParamsT";

export type listItemType = {
  icon: Omit<IconParamsT, "alt">;
  text: string;
};
