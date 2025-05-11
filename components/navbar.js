/** @jsxImportSource theme-ui */
import { Flex, Link } from 'theme-ui'
import NextLink from 'next/link'

const Navbar = () => (
  <Flex sx={{ justifyContent: 'space-between', alignItems: 'center', p: 3, bg: 'background' }}>
    <NextLink href="/">
      <Link sx={{ fontSize: 3, fontWeight: 'bold' }}>HackSpace</Link>
    </NextLink>
    <Flex sx={{ gap: 3 }}>
      <NextLink href="/about">
        <Link sx={{ fontSize: 2 }}>About</Link>
      </NextLink>
      {/* Add more links as needed */}
    </Flex>
  </Flex>
)

export default Navbar