import { Circle, G, Path } from "react-native-svg";

export const fallbackIcon = {
  viewBox: "0 0 24 24",
  children: (
    <G stroke="#000" strokeWidth="1.5">
      <Path
        fill="none"
        strokeLinecap="round"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <Path
        fill="#000"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <Circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </G>
  ),
};
