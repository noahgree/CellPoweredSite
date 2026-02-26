import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/Hero";
import { Island } from "@/components/Island"

function App() {
   return (
      <Box bg="bg" color="fg" direction="column">
         <Island />
         <Hero />
      </Box>
   );
}

export default App;
