import type { ReactElement, ReactNode } from "react";

// blocks
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { login } from "@/app/demo/[name]/components/login";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { button } from "@/app/demo/[name]/ui/button";
import { card } from "@/app/demo/[name]/ui/card";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { input } from "@/app/demo/[name]/ui/input";
import { menuBar } from "@/app/demo/[name]/ui/menu-bar";
import { radio } from "@/app/demo/[name]/ui/radio";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { slider } from "@/app/demo/[name]/ui/slider";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { textarea } from "@/app/demo/[name]/ui/textarea";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  dashboard,

  // components
  login,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,

  // ui
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  card,
  checkbox,
  dialog,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  radio,
  select,
  separator,
  slider,
  switch: switchComponent,
  table,
  tabs,
  textarea,
  "toggle-group": toggleGroup,
  tooltip,
};
