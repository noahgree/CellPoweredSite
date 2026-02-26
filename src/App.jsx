import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/Hero";
import { Island } from "@/components/Island"

function App() {
   return (
      <Box bg="bg" maxW="5xl" m="auto" minH="100svh">
         <Island />
         <Hero />
         <Box h="20px"/>
      </Box>
   );
}

export default App;
