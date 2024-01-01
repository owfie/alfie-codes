import NextLink, { LinkProps } from 'next/link'


interface ILink extends LinkProps {
}

export const Link: React.FC<ILink> = (props) => {
  return <NextLink {...props}>
  </NextLink>
}
