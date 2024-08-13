import { createContext } from "react";

export const ViewFor3DContext = createContext({
  viewFor3D: false,
  toggle3DView: () => {},
});
