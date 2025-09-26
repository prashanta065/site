import { Box, Button, Container, Heading, Text, Flex } from 'theme-ui';
import Head from 'next/head';
import Image from 'next/image';
// Custom animated background style
const bgStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  background: 'linear-gradient(135deg, #232946 0%, #181B2A 100%)',
  filter: 'none',
  pointerEvents: 'none',
};

const keyframes = `@keyframes bgMove {
  0% { background-position: 0% 50%, 100% 50%, 0 0; }
  50% { background-position: 100% 50%, 0% 50%, 100% 100%; }
  100% { background-position: 0% 50%, 100% 50%, 0 0; }
}`;

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{keyframes}</style>
      <Box as="div" sx={bgStyle} />
      <Head>
        <title>HackClub Butwal</title>
        <meta name="description" content="HackClub Butwal: Local Club in the corner of Butwal." />
      </Head>
      <Box
        sx={{
          width: 160,
          maxWidth: '70vw',
          mb: 4,
          boxShadow: '0 2px 12px rgba(30,80,160,0.10)',
          position: 'relative',
          zIndex: 2,
          overflow: 'visible',
          mx: 'auto',
          background: 'transparent',
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/protfolio/HCB-006/hcb.png"
          alt="HackClub Butwal Logo"
          width={120}
          height={120}
          style={{ width: '100%', height: 'auto', filter: 'none' }}
          priority
        />
      </Box>
      <Heading
        as="h1"
        sx={{
          fontSize: [5, 6],
          mb: 3,
          letterSpacing: '-0.03em',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0 2px 8px #232946',
          textAlign: 'center',
          lineHeight: '1.2',
          position: 'relative',
          zIndex: 2,
        }}
      >
        HackClub Butwal
      </Heading>
      <Text
        sx={{
          fontSize: [3, 4],
          mb: 3,
          color: '#ff5f6d',
          fontWeight: 'bold',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          textShadow: '0 2px 4px #232946',
          zIndex: 2,
        }}
      >
        Coming Soon
      </Text>
      <Text
        sx={{
          fontSize: [2, 3],
          mb: 4,
          opacity: 0.98,
          maxWidth: 520,
          mx: 'auto',
          color: 'white',
          textAlign: 'center',
          lineHeight: '1.5',
          position: 'relative',
          zIndex: 2,
          textShadow: '0 2px 4px #232946',
        }}
      >
        We’re building something amazing for young coders and Techies in Butwal.<br />
        Our website is launching soon. Stay tuned!
      </Text>
      <Flex sx={{ justifyContent: 'center', mb: 4, gap: 3, position: 'relative', zIndex: 2 }}>
        <a
          href="https://github.com/HackClub-Butwal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            sx={{
              bg: 'red',
              color: 'white',
              fontWeight: 'bold',
              px: 4,
              py: 3,
              borderRadius: 'circle',
              fontSize: [2, 3],
              boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
              transition: 'all 0.2s',
              letterSpacing: '0.01em',
              '&:hover': { bg: 'accent', transform: 'scale(1.05)' },
            }}
          >
            Visit our GitHub
          </Button>
        </a>
      </Flex>
      <Text sx={{ fontSize: 1, opacity: 0.8, position: 'relative', zIndex: 2, color: 'white', textShadow: '0 2px 4px #232946' }}>
        © 2025 HackClub Butwal
      </Text>
    </Box>
  );
}
