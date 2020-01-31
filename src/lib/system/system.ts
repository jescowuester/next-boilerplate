import {
  system as styledSystem,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
  Config,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ResponsiveValue,
  FontSizeProps,
  BorderColorProps,
  BorderRadiusProps,
  BackgroundColorProps,
  OpacityProps,
  HeightProps,
  BoxShadowProps,
  OverflowProps,
  FlexDirectionProps,
  BackgroundPositionProps,
  BackgroundSizeProps,
  BackgroundImageProps,
  DisplayProps,
  MaxHeightProps,
  MinHeightProps,
  MaxWidthProps,
  MinWidthProps,
  WidthProps,
} from 'styled-system'
import {css} from 'styled-components'

const _customSystem: Config = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgImage: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  pos: {
    property: 'position',
  },
  flexDir: {
    property: 'flexDirection',
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textDecoration: {property: 'textDecoration'},
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
  outline: true,
  float: true,
  willChange: true,
}

const customSystem = styledSystem(_customSystem)

export const system = p => css`
  &&&& {
    ${compose(
      layout,
      color,
      space,
      background,
      border,
      grid,
      position,
      shadow,
      typography,
      flexbox,
      customSystem,
    )(p)}
  }
`

type CSS = React.CSSProperties
type borderRadius = BorderRadiusProps['borderRadius']
type borderColor = BorderColorProps['borderColor']

export interface ColorProps extends BackgroundColorProps, OpacityProps {
  color?: any // @todo find a proper fix for this
}

export interface ISystem
  extends BackgroundProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    ColorProps,
    OverflowProps,
    TypographyProps {
  fontSize?: ResponsiveValue<string | number> | FontSizeProps['fontSize']

  // Custom borderRadius alias
  rounded?: borderRadius
  roundedTop?: borderRadius
  roundedBottom?: borderRadius
  roundedLeft?: borderRadius
  roundedRight?: borderRadius
  roundedTopRight?: borderRadius
  roundedTopLeft?: borderRadius
  roundedBottomRight?: borderRadius
  roundedBottomLeft?: borderRadius

  // Custom borderColor alias
  borderBottomColor?: borderColor
  borderTopColor?: borderColor
  borderRightColor?: borderColor
  borderLeftColor?: borderColor

  // Custom width alias
  w?: WidthProps['width']
  minW?: MinWidthProps['minWidth']
  maxW?: MaxWidthProps['maxWidth']

  // Custom height alias
  h?: HeightProps['height']
  minH?: MinHeightProps['minHeight']
  maxH?: MaxHeightProps['maxHeight']

  // Custom display alias
  d?: DisplayProps['display']

  // Custom background alias
  backgroundAttachment?: ResponsiveValue<CSS['backgroundAttachment']>
  bgImg?: BackgroundImageProps['backgroundImage']
  bgImage?: BackgroundImageProps['backgroundImage']
  bgSize?: BackgroundSizeProps['backgroundSize']
  bgPos?: BackgroundPositionProps['backgroundPosition']
  pos?: PositionProps['position']
  flexDir?: FlexDirectionProps['flexDirection']

  // CSS properties
  textDecoration?: ResponsiveValue<CSS['textDecoration']>
  textDecor?: ResponsiveValue<CSS['textDecoration']>
  textTransform?: ResponsiveValue<CSS['textTransform']>
  appearance?: ResponsiveValue<CSS['appearance']>
  transform?: ResponsiveValue<CSS['transform']>
  transformOrigin?: ResponsiveValue<CSS['transformOrigin']>
  animation?: ResponsiveValue<CSS['animation']>
  userSelect?: ResponsiveValue<CSS['userSelect']>
  pointerEvents?: ResponsiveValue<CSS['pointerEvents']>
  boxSizing?: ResponsiveValue<CSS['boxSizing']>
  cursor?: ResponsiveValue<CSS['cursor']>
  resize?: ResponsiveValue<CSS['resize']>
  transition?: ResponsiveValue<CSS['transition']>
  objectFit?: ResponsiveValue<CSS['objectFit']>
  objectPosition?: ResponsiveValue<CSS['objectPosition']>

  // Ellipsis alias
  wordBreak?: ResponsiveValue<CSS['wordBreak']>
  overflowWrap?: ResponsiveValue<CSS['overflowWrap']>
  whiteSpace?: ResponsiveValue<CSS['whiteSpace']>

  // SVG color properties
  fill?: ColorProps['color']
  stroke?: ColorProps['color']

  bgAttachment?: ResponsiveValue<CSS['backgroundAttachment']>
  shadow?: BoxShadowProps['boxShadow']

  // List properties
  listStyleType?: ResponsiveValue<CSS['listStyleType']>
  listStylePosition?: ResponsiveValue<CSS['listStylePosition']>
  listStyleImage?: ResponsiveValue<CSS['listStyleImage']>
  listStyleImg?: ResponsiveValue<CSS['listStyleImage']>
  listStylePos?: ResponsiveValue<CSS['listStylePosition']>

  // Outline prop
  outline?: ResponsiveValue<CSS['outline']>
  float?: ResponsiveValue<CSS['float']>
  willChange?: ResponsiveValue<CSS['willChange']>

  // Border Width props
  borderTopWidth?: ResponsiveValue<CSS['borderTopWidth']>
  borderBottomWidth?: ResponsiveValue<CSS['borderBottomWidth']>
  borderLeftWidth?: ResponsiveValue<CSS['borderLeftWidth']>
  borderRightWidth?: ResponsiveValue<CSS['borderRightWidth']>

  //css
  css?: any

  // override any that cause interference
  // @todo type this properly
  height?: any
  size?: any
  width?: any
}
