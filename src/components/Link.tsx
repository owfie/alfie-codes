import NextLink, { LinkProps } from 'next/link'

interface ILink extends LinkProps {
  children: React.ReactNode
}

export const Link: React.FC<ILink> = (props) => {
  return <NextLink {...props}>
  </NextLink>
}
