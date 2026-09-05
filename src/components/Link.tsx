import NextLink, { type LinkProps } from 'next/link'

interface ILink extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const Link: React.FC<ILink> = (props) => {
  return <NextLink {...props}></NextLink>
}
