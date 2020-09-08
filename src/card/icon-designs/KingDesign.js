import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { uxPalette } from "../../common/uxPalette";
import { suits, SUIT } from "../../cardDeck/constants";

const iconColor = suit => ({
  fill:
    suit === SUIT.spades || suit === SUIT.clubs
      ? uxPalette.suit.black
      : uxPalette.suit.red
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const KingDesign = ({ suit }) => (
  <Container>
    <svg style={{ width: "100%" }} viewBox="0 0 59.153496 103.1875">
      <g transform="translate(-39.026041,-101.20829)">
        <path
          style={iconColor(suit)}
          d="M 56.427734 0 C 64.192614 10.82192 73.358384 20.010848 75.714844 37.142578 C 63.282224 55.689628 76.198105 78.893178 58.572266 91.429688 C 73.325495 118.46438 81.734999 144.44153 85.076172 169.57422 L 112.10938 115.01953 L 138.56055 168.4043 C 142.23668 140.7395 151.44932 113.99723 164.28711 87.859375 C 164.28633 87.858972 164.28594 87.857825 164.28516 87.857422 L 172.14258 37.857422 L 172.14258 27.142578 C 174.55725 15.665248 183.19151 7.7422499 192.14258 0 L 56.427734 0 z M 150.11328 40.658203 C 150.23037 43.47461 150.45392 45.969636 150.72461 48.257812 C 152.9469 47.349352 156.44689 46.499093 160.21289 46.630859 C 161.61249 46.67983 163.04787 46.864976 164.46484 47.232422 C 167.5059 51.894167 164.03067 53.56406 163.30273 54.285156 C 159.47312 54.545727 155.49714 54.071152 151.44727 53.230469 C 153.90273 67.086607 157.86534 69.169542 149.2207 70.837891 C 149.27498 70.871906 146.87232 69.033364 143.43359 75.617188 C 142.82305 68.934869 152.46361 69.467401 153.14648 68.199219 C 153.37571 67.773474 150.76713 57.129624 150 48.572266 C 149.72136 45.464053 149.67848 42.623079 150.11328 40.658203 z M 134.91016 44.732422 C 138.37205 49.634431 137.15844 51.190659 134.375 53.839844 C 128.21429 53.47493 122.05329 52.520132 115.89258 49.554688 C 119.32038 47.257982 122.66008 44.93954 134.91016 44.732422 z M 148.57031 72.673828 C 148.71786 72.666515 148.86977 72.668435 149.02734 72.679688 C 151.80073 72.877727 156.07332 75.859504 160.08984 78.369141 C 157.99902 79.24463 157.05299 81.12448 146.33984 74.441406 C 146.75738 73.24543 147.53749 72.725022 148.57031 72.673828 z M 138.82031 72.761719 C 140.02777 72.813287 140.93972 73.335273 141.42773 74.53125 C 128.90588 81.214324 127.80124 79.334474 125.35742 78.458984 C 130.05206 75.949347 135.04354 72.965627 138.28516 72.767578 C 138.46934 72.756325 138.64782 72.754352 138.82031 72.761719 z M 170.12695 90.851562 C 135.52544 152.76564 130.54705 221.15985 170.12891 298.29102 C 191.42524 296.99506 210.73172 293.90599 223.57227 285 L 223.57227 197.14258 L 223.57227 192.85742 L 223.57227 129.28516 C 204.66153 108.80023 187.3728 99.680597 170.12695 90.851562 z M 53.443359 91.710938 C 32.147011 93.006643 12.840537 96.094011 0 105 L 0 192.85742 L 0 197.14258 L 0 260.71484 C 18.911337 281.20037 36.199254 290.31916 53.445312 299.14844 C 88.046105 237.23475 93.024948 168.84149 53.443359 91.710938 z M 111.60352 154.76758 L 88.083984 196.5 L 111.60352 238.23438 L 135.125 196.5 L 111.60352 154.76758 z M 85.144531 220.60352 C 81.559002 248.62221 72.27675 275.69157 59.285156 302.14258 L 51.427734 352.14258 L 51.427734 362.85742 C 49.013074 374.33475 40.378794 382.25775 31.427734 390 L 167.14258 390 C 159.37771 379.17808 150.21388 369.98915 147.85742 352.85742 C 160.29003 334.31037 147.37414 311.10877 165 298.57227 C 150.45518 271.91949 142.07232 246.29342 138.63672 221.49219 L 112.10938 275.02734 L 85.144531 220.60352 z M 95.957031 312.78125 C 97.58201 312.74742 98.395673 313.32205 99.464844 313.70508 C 92.636281 317.35546 85.177324 322.00862 83.392578 317.63477 C 90.436123 313.87554 93.867772 312.82475 95.957031 312.78125 z M 67.732422 312.87109 C 69.519899 312.9146 72.456279 313.96343 78.482422 317.72266 C 76.955474 322.09651 70.574638 317.4453 64.732422 313.79492 C 65.647159 313.4119 66.342162 312.83726 67.732422 312.87109 z M 81.388672 316.54688 C 81.999221 323.22916 72.356698 322.69666 71.673828 323.96484 C 71.44494 324.38996 74.046558 335.00376 74.818359 343.55469 L 75.074219 344.85547 C 75.029936 344.87653 74.969607 344.89687 74.923828 344.91797 C 75.097724 347.49721 75.080837 349.82544 74.708984 351.50586 C 74.613358 349.20565 74.43897 347.15121 74.236328 345.20703 C 71.170214 346.43738 65.784681 347.53736 60.609375 346.19531 C 57.568322 341.53357 61.041594 339.86367 61.769531 339.14258 C 65.585471 338.88294 69.549074 339.35247 73.583984 340.1875 C 71.160044 325.20488 66.703936 323.0453 75.601562 321.32812 C 75.547291 321.29414 77.949944 323.13067 81.388672 316.54688 z M 90.699219 339.58789 C 96.859932 339.9528 103.02093 340.90759 109.18164 343.87305 C 105.75384 346.16975 102.41414 348.48819 90.164062 348.69531 C 86.702172 343.7933 87.915774 342.23707 90.699219 339.58789 z "
          transform="matrix(0.26458333,0,0,0.26458333,39.026041,101.20829)"
        />
      </g>
    </svg>
  </Container>
);

KingDesign.propTypes = {
  suit: PropTypes.oneOf(suits)
};

export default KingDesign;