import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export function Island() {
   const surfaceBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
   const bg = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
   const textColor = useColorModeValue("gray.900", "white");

   return (
      <Box
         position="fixed"
         top="4"
         left="0"
         right="0"
         zIndex="1000"
         px="4"
      >
         <Box
            w="full"
            maxW="5xl"
            mx="auto"
            borderRadius="full"
            borderWidth="1px"
            borderColor={surfaceBorder}
            bg={bg}
            backdropFilter="blur(30px)"
            boxShadow="sm"
         >
            <Flex align="center" justify="space-between" px="5" py="3" gap="4">
               <Text
                  fontStretch="extra-expanded"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="extrabold"
                  color={textColor}
               >
                  Cell Powered
               </Text>

               <Box flex="1" />

               <Button size="sm" variant="outline">
                  Download
               </Button>
            </Flex>
         </Box>
      </Box>
   );
}
