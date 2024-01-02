import styles from './Subtle.module.scss'

interface ISubtle {
  children: React.ReactNode
}

export const Subtle: React.FC<ISubtle> = (props) => {
  const { children } = props
  return <span className={styles.Subtle}>
    {children}
  </span>
}
