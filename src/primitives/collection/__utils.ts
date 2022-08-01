import { createContext, RefObject } from "react";
import { View } from "react-native";

import { CollectionState } from "./collection-state";

export type Item = {
  ref: RefObject<View>;
};

export const CollectionItemContext = createContext<
  CollectionState["registerItem"] | undefined
>(undefined);
