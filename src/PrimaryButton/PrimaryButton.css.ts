import { style, createVar } from "@vanilla-extract/css"
import { getVarName } from '@vanilla-extract/private'
import { colors, typography } from "../styles"

const fontSize = createVar()

export const vars = {
  fontSize: getVarName(fontSize),
}

export const styles = {
  text: style({
    vars: {
      [fontSize]: '1em',
    },
    fontSize,
    fontWeight: typography.weight.bold,
    color: colors.light.black,
  }),
  button: style({
    backgroundColor: colors.light.primary,
    padding: '10px 25px',
  }),
}
