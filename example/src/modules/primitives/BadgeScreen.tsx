import React from "react";
import { Text } from "react-native";
import {
  Collection,
  CollectionItem,
  useCollectionState,
} from "@adaptui/react-native-tailwind";

export const BadgeScreen = () => {
  const collection = useCollectionState();
  console.log("%ccollection", "color: #e5de73", collection);

  return (
    <Collection state={collection}>
      <Text>Items count: {collection.items.length}</Text>
      <CollectionItem as={Text}>🍎 Apple</CollectionItem>
      <CollectionItem as={Text}>🍇 Grape</CollectionItem>
      <CollectionItem as={Text}>🍊 Orange</CollectionItem>
      <CollectionItem as={Text}>🍊 Orange</CollectionItem>
      <CollectionItem as={Text}>🍊 Orange</CollectionItem>
      <CollectionItem as={Text}>🍊 Orange</CollectionItem>
    </Collection>
  );
};
