/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Flex, Box, Button, NavLink } from 'theme-ui'

export default function Navbar() {
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        px: [3, 4],
        py: 3,
        bg: 'sunken',
        borderBottom: '1px solid',
        borderColor: 'muted'
      }}
    >
      <Link href="/" passHref>
        <NavLink sx={{ fontWeight: 'bold', fontSize: 3, color: 'primary' }}>
          HackSpace
        </NavLink>
      </Link>
      <Flex as="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        <Box as="li" sx={{ mx: 2 }}>
          <Link href="/posts" passHref>
            <NavLink>Posts</NavLink>
          </Link>
        </Box>
        <Box as="li" sx={{ mx: 2 }}>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </Box>
        <Box as="li" sx={{ mx: 2 }}>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </Box>
      </Flex>
      <Box>
        <Link href="/signup" passHref>
          <Button variant="primary" sx={{ mr: 2 }}>Sign Up</Button>
        </Link>
        <Link href="/login" passHref>
          <Button variant="outline">Log In</Button>
        </Link>
      </Box>
    </Flex>
  )
}