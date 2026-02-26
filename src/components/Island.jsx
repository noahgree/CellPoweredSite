import { Box, Flex, Text, Button, Container, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { AppleIcon } from "./Icons";
import iconDark from "../assets/iconDark.png"

export function Island() {
   const surfaceBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
   const bg = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
   const textColor = useColorModeValue("gray.900", "white");

   return (
      <Container
         position="fixed"
         top="4"
         left="0"
         right="0"
         zIndex="1000"
         maxW="5xl"
         mx="auto"
      >
         <Box
            borderRadius="full"
            borderWidth="1px"
            borderColor={surfaceBorder}
            bg={bg}
            backdropFilter="blur(40px)"
         >
            <Flex
               align="center"
               justify="space-between"
               px="5"
               py="3"
               gap="4"
               overflow="hidden"
            >
               <Text
                  display={{ base: "none", sm: "block" }}
                  fontStretch="extra-expanded"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="extrabold"
                  color={textColor}
               >
                  Cell Powered
               </Text>
               <Image
                  display={{ base: "block", sm: "none" }}
                  src={iconDark}
                  boxSize="32px"
               />

               <Box flex="1" />

               <Button
                  as="a"
                  size="sm"
                  variant="subtle"
                  bg="whiteAlpha.100"
                  _hover={{ bg: "whiteAlpha.300/80" }}
                  rounded="full"
                  href="https://github.com/noahgree/cellpowered-updates/releases/latest/download/Cell.Powered.dmg"
               >
                  <AppleIcon />
                  Download
               </Button>
            </Flex>
         </Box>
      </Container>
   );
}
