import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import type { SvgIconComponent } from "@mui/icons-material";

import InfoIcon from "@mui/icons-material/Info";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";

export interface ITabItem {
  value: number;
  label: string;
  icon: SvgIconComponent;
  content: LazyExoticComponent<ComponentType>;
}

export const tabsConfig: ITabItem[] = [
  {
    value: 0,
    label: "General",
    icon: InfoIcon,
    content: lazy(() => import("../sections/General")),
  },
  {
    value: 1,
    label: "Balance",
    icon: AccountBalanceIcon,
    content: lazy(() => import("../sections/Balance")),
  },
  {
    value: 2,
    label: "Payment",
    icon: PaymentsIcon,
    content: lazy(() => import("../sections/Payment")),
  },
  {
    value: 3,
    label: "Personal",
    icon: PersonIcon,
    content: lazy(() => import("../sections/Personal")),
  },
];