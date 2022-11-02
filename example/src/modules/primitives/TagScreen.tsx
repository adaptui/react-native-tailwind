import React, { useState } from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Icon,
  Slot,
  Tag,
  TagSizes,
  TagTheme,
  TagVariant,
  useTheme,
} from "@adaptui/react-native-tailwind";

export const TagScreen = () => {
  const tailwind = useTheme();
  const sizes: TagSizes[] = ["sm", "md", "lg", "xl"];
  const themeColors: TagTheme[] = ["base", "primary"];
  const variants: TagVariant[] = ["solid", "subtle", "outline"];
  const [value, setValue] = useState<string[]>([]);

  return (
    <Box
      style={tailwind.style("flex-1 justify-center items-center bg-white-900")}
    >
      <CheckboxGroup value={value} onChange={setValue}>
        <Checkbox label="Closable" value="closable" />
        <Checkbox label="Show Prefix" value="showprefix" />
      </CheckboxGroup>
      {sizes.map((size, index) => {
        return (
          <Box style={tailwind.style("flex-col my-1")} key={size + index}>
            {variants.map((variant, variantIndex) => {
              return (
                <Box
                  style={tailwind.style("flex-row my-1")}
                  key={variant + variantIndex}
                >
                  {themeColors.map((theme, themeIndex) => {
                    return (
                      <Tag
                        style={tailwind.style("mx-1")}
                        size={size}
                        key={theme + themeIndex}
                        variant={variant}
                        themeColor={theme}
                        closable={value.includes("closable")}
                        prefix={
                          value.includes("showprefix") ? (
                            <Icon icon={<Slot />} />
                          ) : null
                        }
                      >
                        Continue
                      </Tag>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};
