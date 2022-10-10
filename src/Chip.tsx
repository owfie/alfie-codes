import styles from './Chip.module.scss'

export const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Chip}>
      { children }
    </div>
  )
}