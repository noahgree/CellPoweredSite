import { Box, Button, Container, Stack, Text, Image } from "@chakra-ui/react";
import { AppleIcon } from "./Icons"
import { IconShoppingCart } from "@tabler/icons-react"
import { motion } from "framer-motion";
import { useColorModeValue } from "@/components/ui/color-mode";
import { HeroCarousel } from "@/components/HeroCarousel";
import iconDark from "../assets/iconDark.png"

const MotionDiv = motion.div;
const MotionBox = motion(Box);

export function Hero() {
   const enterFromY = 14;
   const enterDuration = 0.55;

   const contentVariants = {
      hidden: { opacity: 0, y: enterFromY },
      show: {
         opacity: 1,
         y: 0,
         transition: { duration: enterDuration, ease: [0.16, 1, 0.3, 1] },
      },
   };

   const stagger = {
      hidden: {},
      show: {
         transition: { staggerChildren: 0.08, delayChildren: 0.08 },
      },
   };

   const blobA = useColorModeValue("green.500", "green.400");
   const blobB = useColorModeValue("cyan.500", "cyan.400");
   const surfaceBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
   const mutedText = useColorModeValue("gray.600", "gray.300");

   return (
      <Box>
         <Box
            aria-hidden
            position="fixed"
            top="0"
            left="0"
            transform="translate(-50%, -50%)"
            pointerEvents="none"
            opacity={useColorModeValue(0.9, 0.65)}
         >
            <MotionBox
               animate={{ x: [0, 10, 0], y: [0, -18, 0] }}
               transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            >
               <Box
                  w={{ base: "22rem", md: "34rem" }}
                  h={{ base: "22rem", md: "34rem" }}
                  borderRadius="full"
                  filter="blur(60px)"
                  bg={blobA}
                  opacity={0.22}
               />
            </MotionBox>
         </Box>
         <Box
            aria-hidden
            position="fixed"
            bottom="0"
            right="0"
            transform="translate(50%, 50%)"
            pointerEvents="none"
            opacity={useColorModeValue(0.9, 0.65)}
         >
            <MotionBox
               animate={{ x: [0, -12, 0], y: [0, 16, 0] }}
               transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
               <Box
                  w={{ base: "24rem", md: "36rem" }}
                  h={{ base: "24rem", md: "36rem" }}
                  borderRadius="full"
                  filter="blur(70px)"
                  bg={blobB}
                  opacity={0.18}
               />
            </MotionBox>
         </Box>

         <Container
            py={{ base: "28", md: "28" }}
            position="relative"
         >
            <Stack
               gap={{ base: "12", lg: "16" }}
               align="center"
               justify="space-evenly"
               h={{ base: "60vh", sm: "75vh" }}
            >
               <MotionDiv variants={stagger} initial="hidden" animate="show">
                  <Stack gap="8" align="center">
                     <MotionDiv variants={contentVariants}>
                        <MotionBox
                           initial={{ opacity: 0, y: 18, scale: 0.98 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                           whileHover={{ y: -6 }}
                        >
                           <Image
                              src={iconDark}
                              boxSize={{base: "100px", sm: "150px"}}
                              rotate="5"
                           />
                        </MotionBox>
                     </MotionDiv>

                     <MotionDiv variants={contentVariants}>
                        <Text
                           fontSize={{ base: "4xl", xs: "5xl", sm: "6xl", md: "7xl" }}
                           fontWeight="extrabold"
                           fontStretch="extra-expanded"
                           lineHeight="1.3"
                           textAlign="center"
                        >
                           Cell Powered
                        </Text>
                     </MotionDiv>

                     <MotionDiv variants={contentVariants}>
                        <Box
                           display="inline-flex"
                           alignItems="center"
                           gap="2"
                           px="3"
                           py="1"
                           borderRadius="full"
                           borderWidth="1px"
                           borderColor={surfaceBorder}
                           bg={useColorModeValue("blackAlpha.50", "whiteAlpha.100")}
                           color={useColorModeValue("gray.700", "gray.200")}
                           fontSize="sm"
                           fontWeight="medium"
                        >
                           <Box
                              width="1.5"
                              height="1.5"
                              borderRadius="full"
                              bg={useColorModeValue("green.500", "green.300")}
                           />
                           designed for the macOS menubar
                        </Box>
                     </MotionDiv>

                     <MotionDiv variants={contentVariants}>
                        <Text
                           maxW="lg"
                           fontSize={{ base: "lg", md: "xl" }}
                           color={mutedText}
                           textAlign="center"
                        >
                           Monitor battery state, temperature, and real-time
                           power stats without leaving your workflow.
                        </Text>
                     </MotionDiv>

                     <MotionDiv variants={contentVariants}>
                        <Stack
                           direction={{ base: "column", sm: "row" }}
                           gap="3"
                           align="center"
                        >
                           <MotionDiv
                              whileHover={{ y: -2, scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ type: "spring", stiffness: 260, damping: 20 }}
                              style={{ display: "inline-block" }}
                           >
                              <Button
                                 as="a"
                                 size="xl"
                                 colorPalette="bg.inverted"
                                 rounded="full"
                                 href="https://github.com/noahgree/cellpowered-updates/releases/latest/download/Cell.Powered.dmg"
                              >
                                 <AppleIcon />
                                 Download for macOS
                              </Button>
                           </MotionDiv>

                           <MotionDiv
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ type: "spring", stiffness: 260, damping: 22 }}
                              style={{ display: "inline-block" }}
                           >
                              <Button
                                 as="a"
                                 size="xl"
                                 variant="outline"
                                 rounded="full"
                                 href="https://cellpowered.lemonsqueezy.com/checkout"
                              >
                                 <IconShoppingCart />
                                 Buy Now
                              </Button>
                           </MotionDiv>
                        </Stack>
                     </MotionDiv>
                  </Stack>
               </MotionDiv>

               <Box
                  minW="0"
                  w="full"
               >
                  <HeroCarousel />
               </Box>
            </Stack>
         </Container>
      </Box>
   );
}
