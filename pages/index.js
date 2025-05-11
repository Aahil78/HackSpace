/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text, Button } from 'theme-ui'
import Link from 'next/link'

const Home = () => (
  <Container sx={{ py: 5 }}>
    <Box sx={{ textAlign: 'center' }}>
      <Heading as="h1" sx={{ mb: 3 }}>
        Welcome to HackSpace
      </Heading>
      <Text sx={{ mb: 4 }}>
        A community for building and sharing tech projects. Learn, create, and collaborate with like-minded enthusiasts.
      </Text>
      <Link href="/about">
        <Button sx={{ variant: 'buttons.primary' }}>Learn More</Button>
      </Link>
    </Box>
  </Container>
)

export default Home