import styles from './Section.module.scss'

export const Section = (props: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <section className={styles.Section}>
      <header>
        <b>{props.title}</b>
      </header>
      {props.children}
    </section>
  )
}
