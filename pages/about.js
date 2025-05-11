/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text } from 'theme-ui'

const About = () => (
  <Container sx={{ py: 5 }}>
    <Box sx={{ textAlign: 'center' }}>
      <Heading as="h1" sx={{ mb: 3 }}>
        About HackSpace
      </Heading>
      <Text sx={{ mb: 4 }}>
        HackSpace is a platform designed to bring together innovators, creators, and learners in the tech community. Our goal is to provide resources, mentorship, and opportunities to build impactful projects.
      </Text>
    </Box>
  </Container>
)

export default About
