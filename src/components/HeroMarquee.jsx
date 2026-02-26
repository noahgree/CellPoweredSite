import { Box, Marquee } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const backgroundSoloImages = import.meta.glob(
   "../assets/background-solo/*.{png,jpg,jpeg,webp,svg}", { eager: true, import: "default", }
);

export function HeroMarquee() {
   const surfaceBg = useColorModeValue("white", "gray.950");
   const surfaceBorder = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

   const items = Object.entries(backgroundSoloImages)
      .map(([path, src]) => {
         const name = path.split("/").pop() ?? path;
         return { name, src };
      });

   const imageNode = (item) => (
      <Box
         as="img"
         src={item.src}
         alt=""
         aria-hidden="true"
         draggable={false}
         loading="lazy"
         borderRadius="lg"
         borderWidth="1px"
         borderColor={surfaceBorder}
         height={{ base: "380px", md: "380px" }}
         width="auto"
         maxW="none"
         objectFit="cover"
      />
   );

   return (
      <Box
         position="relative"
         width="full"
         overflow="hidden"
         borderRadius="xl"
         borderWidth="1px"
         borderColor={surfaceBorder}
         bg={surfaceBg}
      >
         <Marquee.Root reverse autoFill speed={30}>
            <Marquee.Viewport>
               <Marquee.Content py={{ base: "3", md: "4" }}>
                  {items.map((item) => (
                     <Marquee.Item key={item.name} px={{ base: "0.5rem", md: "0.75rem" }}>
                        {imageNode(item)}
                     </Marquee.Item>
                  ))}
               </Marquee.Content>
            </Marquee.Viewport>
         </Marquee.Root>
      </Box>
   );
}
