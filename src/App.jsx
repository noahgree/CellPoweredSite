import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/Hero";
import { Island } from "@/components/Island"

function App() {
   return (
      <Box bg="bg" color="fg" maxW="5xl" m="auto">
         <Island />
         <Hero />
         <Box h="20px"/>
      </Box>
   );
}

export default App;
