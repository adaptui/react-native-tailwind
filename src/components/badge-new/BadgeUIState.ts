export const useBadgeUIState = (props: BadgeUIStateProps): BadgeUIState => {
  const { size = "md", themeColor = "base", variant = "solid" } = props;

  return { size, themeColor, variant };
};

export type BadgeUIState = {
  /**
   * How large should the badge be?
   *
   * @default md
   */
  size: keyof AdaptUI.GetThemeValue<"badge", "size">;
  /**
   * How the badge should be themed?
   *
   * @default base
   */
  themeColor: keyof AdaptUI.GetThemeValue<"badge", "themeColor">;
  /**
   * How the badge should look?
   *
   * @default solid
   */
  variant: keyof AdaptUI.GetThemeValue<"badge", "themeColor", "base">;
};

export type BadgeUIStateProps = Partial<
  Pick<BadgeUIState, "size" | "themeColor" | "variant">
> & {};
