import { Box, Carousel } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const backgroundSoloImages = import.meta.glob(
   "../assets/background-solo/*.{png,jpg,jpeg,webp,svg}", { eager: true, import: "default" }
);

export function HeroCarousel() {
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
         w="auto"
         h="full"
         maxW="none"
         objectFit="contain"
      />
   );

   return (
      <Box
         borderRadius="xl"
         borderWidth="1px"
         borderColor={surfaceBorder}
         bg={surfaceBg}
         overflow="hidden"
      >
         <Carousel.Root
            slideCount={items.length}
            autoSize
            slidesPerPage={1}
            slidesPerMove={1}
            allowMouseDrag
            spacing="8px"
            m="12px"
         >
            <Carousel.ItemGroup
               h={{ base: "440px", sm: "500px" }}
               rounded="lg"
            >
               {items.map((item, index) => (
                  <Carousel.Item
                     key={item.name}
                     index={index}
                     w="auto"
                     h="full"
                     flex="0 0 auto"
                  >
                     {imageNode(item)}
                  </Carousel.Item>
               ))}
            </Carousel.ItemGroup>
         </Carousel.Root>
      </Box>
   );
}
