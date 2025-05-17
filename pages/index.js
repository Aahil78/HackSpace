/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text, Button, Grid, Card, Image } from 'theme-ui'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bg: 'primary',
          color: 'background',
          py: [5, 6],
          textAlign: 'center'
        }}
      >
        <Container>
          <Heading as="h1" sx={{ fontSize: [5, 6], mb: 3 }}>
            Welcome to HackSpace 🚀
          </Heading>
          <Text sx={{ fontSize: [2, 3], mb: 4, maxWidth: 500, mx: 'auto', display: 'block' }}>
            Build, share, and discover amazing projects with the Hack Club community. Join us and turn your ideas into reality!
          </Text>
          <Box sx={{ mt: 3 }}>
            <Link href="/signup" passHref>
              <Button variant="primary" sx={{ mr: 2 }}>Get Started</Button>
            </Link>
            <Link href="/posts" passHref>
              <Button variant="secondary">See Posts</Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: [5, 6] }}>
        <Grid columns={[1, 3]} gap={4}>
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Image src="/icons/share.svg" alt="Share" sx={{ width: 64, mx: 'auto', mb: 3 }} />
            <Heading as="h3" sx={{ mb: 2 }}>Share Projects</Heading>
            <Text>Show off what you’re building and inspire others.</Text>
          </Card>
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Image src="/icons/collab.svg" alt="Collaborate" sx={{ width: 64, mx: 'auto', mb: 3 }} />
            <Heading as="h3" sx={{ mb: 2 }}>Collaborate</Heading>
            <Text>Team up with other makers on cool ideas and hackathons.</Text>
          </Card>
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Image src="/icons/learn.svg" alt="Learn" sx={{ width: 64, mx: 'auto', mb: 3 }} />
            <Heading as="h3" sx={{ mb: 2 }}>Learn & Grow</Heading>
            <Text>Access resources, guides, and a supportive community.</Text>
          </Card>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bg: 'sunken', py: 5, textAlign: 'center' }}>
        <Heading as="h2" sx={{ mb: 3 }}>
          Ready to join HackSpace?
        </Heading>
        <Text sx={{ mb: 4, display: 'block' }}>
          Sign up and start your journey with us today!
        </Text>
        <Link href="/signup" passHref>
          <Button variant="primary" sx={{ fontSize: 2 }}>Sign Up</Button>
        </Link>
      </Box>
    </Box>
  )
}