import styles from './Subtle.module.scss'

export const Subtle: React.FC = (props) => {
  return <span className={styles.Subtle}>
    {props.children}
  </span>
}
