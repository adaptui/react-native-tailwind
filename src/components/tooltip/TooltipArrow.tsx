import React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "../../theme";
import { IconProps } from "../../utils";
import { Icon } from "../icon";

import { TooltipPlacement } from "./Tooltip";

const UpArrow: React.FC<IconProps> = ({ fill = "#171717" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 12 5" fill="none">
      <Path
        d="M0.853444 5C-4.38012 5 16.3808 5 11.1463 5C9.2166 5 7.4069 1.7719e-06 5.99986 1.52589e-06C4.59281 8.03032e-07 2.76252 5 0.853444 5Z"
        fill={fill}
      />
    </Svg>
  );
};

const LeftArrow: React.FC<IconProps> = ({ fill = "#171717" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 5 12" fill="none">
      <Path
        d="M5 0.853444C5 -4.38012 5 16.3808 5 11.1463C5 9.2166 1.53071e-07 7.4069 2.14575e-07 5.99985C-2.00758e-07 4.59281 5 2.76252 5 0.853444Z"
        fill={fill}
      />
    </Svg>
  );
};

const RightArrow: React.FC<IconProps> = ({ fill = "#171717" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 5 12" fill="none">
      <Path
        d="M3.73052e-08 0.853444C-1.91461e-07 -4.38012 7.16027e-07 16.3808 4.87219e-07 11.1463C4.0287e-07 9.2166 5 7.4069 5 5.99985C5 4.59281 1.20754e-07 2.76252 3.73052e-08 0.853444Z"
        fill={fill}
      />
    </Svg>
  );
};

const DownArrow: React.FC<IconProps> = ({ fill = "#171717" }) => {
  return (
    <Svg width="12" height="5" viewBox="0 0 12 5" fill="none">
      <Path
        d="M11.1466 0C16.3801 0 -4.3808 0 0.853735 0C2.7834 0 4.5931 5 6.00014 5C7.40719 5 9.23748 0 11.1466 0Z"
        fill={fill}
      />
    </Svg>
  );
};

interface ArrowStyle {
  style: Pick<ViewStyle, "left" | "top">;
}
interface TooltipArrowProps {
  actualPlacement?: TooltipPlacement;
  arrowProps?: ArrowStyle;
}

const defaultArrowHeight = 12;

const getArrowStyles = (props: {
  placement: TooltipPlacement;
  height: number;
  width: number;
}) => {
  let additionalStyles: any = {
    transform: [],
  };

  const diagonalLength = getDiagonalLength(
    defaultArrowHeight,
    defaultArrowHeight,
  );
  if (props.placement === "top" && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.transform.push({ translateY: 4.5 });

    additionalStyles.bottom = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2,
    );
  }

  if (props.placement === "bottom" && props.width) {
    additionalStyles.transform.push({ translateX: -props.width / 2 });
    additionalStyles.transform.push({ translateY: 2.3 });
    additionalStyles.top = Math.ceil((diagonalLength - defaultArrowHeight) / 2);
  }

  if (props.placement === "left" && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ translateX: 0.7 });
    additionalStyles.right = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2,
    );
  }

  if (props.placement === "right" && props.height) {
    additionalStyles.transform.push({ translateY: -props.height / 2 });
    additionalStyles.transform.push({ translateX: 2.3 });
    additionalStyles.left = Math.ceil(
      (diagonalLength - defaultArrowHeight) / 2,
    );
  }

  return additionalStyles;
};

const getDiagonalLength = (height: number, width: number) => {
  return Math.pow(height * height + width * width, 0.5);
};

const TooltipArrow: React.FC<TooltipArrowProps> = ({
  actualPlacement = "bottom",
  arrowProps,
}) => {
  const tailwind = useTheme();
  const additonalArrowStyles = getArrowStyles({
    placement: actualPlacement,
    height: 12,
    width: 12,
  });
  const arrowStyles: ViewStyle = {
    position: "absolute",
    height: 12,
    width: 12,
    ...additonalArrowStyles,
    ...arrowProps?.style,
  };
  if (actualPlacement?.split(" ")[0] === "top") {
    return (
      <Icon
        color={tailwind.getColor("text-gray-900")}
        style={arrowStyles}
        icon={<DownArrow />}
        size={12}
      />
    );
  } else if (actualPlacement?.split(" ")[0] === "left") {
    return (
      <Icon
        color={tailwind.getColor("text-gray-900")}
        style={arrowStyles}
        icon={<RightArrow />}
        size={12}
      />
    );
  } else if (actualPlacement?.split(" ")[0] === "right") {
    return (
      <Icon
        color={tailwind.getColor("text-gray-900")}
        style={arrowStyles}
        icon={<LeftArrow />}
        size={12}
      />
    );
  } else if (actualPlacement?.split(" ")[0] === "bottom") {
    return (
      <Icon
        color={tailwind.getColor("text-gray-900")}
        style={arrowStyles}
        icon={<UpArrow />}
        size={12}
      />
    );
  } else {
    return null;
  }
};

TooltipArrow.displayName = "PopperArrow";

export default TooltipArrow;
