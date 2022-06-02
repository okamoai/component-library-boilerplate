import { FC } from 'react'
import { styles, vars } from './PrimaryButton.css'

type PrimaryButtonProps = {
  fontSize: string
  onClick?: () => void
  text: string
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick, fontSize }) => (
  <>
    <button className={styles.button} type="button" onClick={onClick}>
      <span className={styles.text} style={{ [vars.fontSize]: fontSize }}>{text}</span>
    </button>
  </>
)
