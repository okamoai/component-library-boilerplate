import type { ComplexStyleRule } from "@vanilla-extract/css"

/**
 *  Based ress.css v5.0.2
 *  @see https://github.com/filipelinhares/ress/blob/5.0.2/ress.css
 */

const font: ComplexStyleRule = {
  fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  fontFeatureSettings: "palt",
}

const form: ComplexStyleRule = {
  backgroundColor: 'transparent',
  borderStyle: 'none',
  ':focus': {
    outlineWidth: 0,
  },
  selectors: {
    '&[disabled]': {
      cursor: 'default',
    },
  }
}

const pseudo: ComplexStyleRule = {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  textDecoration: 'inherit',
  verticalAlign: 'inherit',
}

const accessibility: ComplexStyleRule = {
  selectors: {
    '&[aria-busy="true"]': {
      cursor: 'progress',
    },
    '&[aria-controls]': {
      cursor: 'pointer',
    },
    '&[aria-disabled="true"]': {
      cursor: 'default',
    },
    '&[role="button"]': {
      cursor: 'pointer',
    }
  }
}

const universal: ComplexStyleRule = {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  ...font,
  ...accessibility,
  '::before': {
    ...pseudo,
  },
  '::after': {
    ...pseudo,
  },
}

const html: ComplexStyleRule = {
  ...universal,
  textSizeAdjust: '100%',
  wordBreak: 'normal',
  tabSize: 4,
  backgroundRepeat: 'no-repeat',
}

const details: ComplexStyleRule = {
  ...universal,
  display: 'block',
}

const summary: ComplexStyleRule = {
  ...universal,
  display: 'list-item',
}

const a: ComplexStyleRule = {
  ...universal,
  display: 'list-item',
  ':active': {
    outlineWidth: 0,
  },
  ':hover': {
    outlineWidth: 0,
  },
  ':focus': {
    outlineWidth: 0,
  }
}

const b: ComplexStyleRule = {
  ...universal,
  fontWeight: 'bolder',
}

const strong: ComplexStyleRule = {
  ...universal,
  fontWeight: 'bolder',
}

const table: ComplexStyleRule = {
  ...universal,
  borderColor: 'inherit',
  textIndent: 0,
}

const iframe: ComplexStyleRule = {
  ...universal,
  borderStyle: 'none',
}

const img: ComplexStyleRule = {
  ...universal,
  borderStyle: 'none',
}

const progress: ComplexStyleRule = {
  ...universal,
  verticalAlign: 'baseline',
}

const legend: ComplexStyleRule = {
  ...universal,
  display: 'table',
  maxWidth: '100%',
  whiteSpace: 'normal',
}

const select: ComplexStyleRule = {
  ...universal,
  ...form,
  cursor: 'pointer',
  textTransform: 'none',
  appearance: 'none',
}

const optgroup: ComplexStyleRule = {
  ...universal,
  fontWeight: 'bold',
}

const textarea: ComplexStyleRule = {
  ...universal,
  ...form,
  resize: 'vertical',
}

const button: ComplexStyleRule = {
  ...universal,
  ...form,
  appearance: 'button',
  textTransform: 'none',
  cursor: 'pointer',
  selectors: {
    '&::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0,
    },
    '&:-moz-focusring': {
      outline: '1px dotted ButtonText',
    },
  }
}

const input: ComplexStyleRule = {
  ...universal,
  ...form,
  borderRadius: 0,
  selectors: {
    '&[type="button"]': {
      cursor: 'pointer',
      appearance: 'button',
    },
    '&[type="button"]::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0,
      outline: '1px dotted ButtonText',
    },
    '&[type="reset"]': {
      cursor: 'pointer',
      appearance: 'button',
    },
    '&[type="reset"]::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0,
      outline: '1px dotted ButtonText',
    },
    '&[type="submit"]': {
      cursor: 'pointer',
      appearance: 'button',
    },
    '&[type="submit"]::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0,
      outline: '1px dotted ButtonText',
    },
    '&[type="search"]': {
      appearance: 'textfield',
      outlineOffset: '-2px',
    },
    '&[type="search"]::-webkit-search-decoration': {
      appearance: 'none',
    },
    '&[type="number"]::-webkit-inner-spin-button': {
      height: 'auto',
    },
    '&[type="number"]::-webkit-outer-spin-button': {
      height: 'auto',
    },
    '&[type="file"]::-webkit-file-upload-button': {
      appearance: 'button',
      color: 'inherit',
      font: 'inherit',
    },
  }
}

export const ress = {
  body: universal,
  address: universal,
  article: universal,
  aside: universal,
  footer: universal,
  header: universal,
  h1: universal,
  h2: universal,
  h3: universal,
  h4: universal,
  h5: universal,
  h6: universal,
  main: universal,
  nav: universal,
  section: universal,
  blockquote: universal,
  dd: universal,
  div: universal,
  dl: universal,
  dt: universal,
  figcaption: universal,
  figure: universal,
  hr: universal,
  li: universal,
  menu: universal,
  ol: universal,
  p: universal,
  pre: universal,
  ul: universal,
  a,
  abbr: universal,
  b,
  bdi: universal,
  bdo: universal,
  br: universal,
  cite: universal,
  code: universal,
  data: universal,
  dfn: universal,
  em: universal,
  i: universal,
  kbd: universal,
  mark: universal,
  q: universal,
  rp: universal,
  rt: universal,
  ruby: universal,
  s: universal,
  samp: universal,
  small: universal,
  span: universal,
  strong: universal,
  sub: universal,
  sup: universal,
  time: universal,
  u: universal,
  var: universal,
  wbr: universal,
  area: universal,
  audio: universal,
  img,
  map: universal,
  track: universal,
  video: universal,
  embed: universal,
  iframe,
  object: universal,
  picture: universal,
  portal: universal,
  source: universal,
  svg: universal,
  canvas: universal,
  del: universal,
  ins: universal,
  caption: universal,
  col: universal,
  colgroup: universal,
  table: universal,
  tbody: universal,
  td: universal,
  tfoot: universal,
  th: universal,
  thead: universal,
  tr: universal,
  button,
  datalist: universal,
  fieldset: universal,
  form,
  input,
  label: universal,
  legend,
  meter: universal,
  optgroup,
  option: universal,
  output: universal,
  progress,
  select,
  textarea,
  details,
  dialog: universal,
  summary,
}
