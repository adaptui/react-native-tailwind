import { View } from "react-native";
import { useWrapElement } from "ariakit-utils";

import {
  As,
  createComponent,
  createElement,
  createHook,
  Options,
  Props,
} from "../../utils/system";

import { CollectionItemContext } from "./__utils";
import { CollectionState } from "./collection-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * Ariakit component. It receives the collection state through the `state` prop
 * and provides context for `CollectionItem` components.
 * @see https://ariakit.org/components/collection
 * @example
 * ```jsx
 * const collection = useCollectionState();
 * const props = useCollection({ state });
 * <Role {...props}>
 *   <CollectionItem>Item 1</CollectionItem>
 *   <CollectionItem>Item 2</CollectionItem>
 *   <CollectionItem>Item 3</CollectionItem>
 * </Role>
 * ```
 */
export const useCollection = createHook<CollectionOptions>(
  ({ state, ...props }) => {
    props = useWrapElement(
      props,
      element => (
        <CollectionItemContext.Provider value={state.registerItem}>
          {element}
        </CollectionItemContext.Provider>
      ),
      [state.registerItem],
    );

    return props;
  },
);

/**
 * A component that renders a simple wrapper for collection items. It receives
 * the collection state through the `state` prop and provides context for
 * `CollectionItem` components.
 * @see https://ariakit.org/components/collection
 * @example
 * ```jsx
 * const collection = useCollectionState();
 * <Collection state={collection}>
 *   <CollectionItem>Item 1</CollectionItem>
 *   <CollectionItem>Item 2</CollectionItem>
 *   <CollectionItem>Item 3</CollectionItem>
 * </Collection>
 * ```
 */
export const Collection = createComponent<CollectionOptions>(props => {
  const htmlProps = useCollection(props);
  return createElement(View, htmlProps);
});

export type CollectionOptions<T extends As = typeof View> = Options<T> & {
  /**
   * Object returned by the `useCollectionState` hook.
   */
  state: CollectionState;
};

export type CollectionProps<T extends As = typeof View> = Props<
  CollectionOptions<T>
>;
