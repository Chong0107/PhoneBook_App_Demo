import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function CustomHeader() {
  return (
    <Flex
      as="header"
      bg="blue.600"
      color="white"
      py={4}
      px={8}
      align="center"
      justify="space-between"
      borderBottomRadius="3xl"
      boxShadow="lg"
      height={150}
    >
      <Flex direction="column" align="flex-start">
        <Heading as="h1" size="lg" fontWeight="bold">
          Welcome to PhoneBook App
        </Heading>
        <Text mt={2}>
          Keep all your contacts organized and easily accessible.
        </Text>
      </Flex>
      <Image
        src="/phone.gif"
        alt="Header Image"
        boxSize="100px"
        ml={4}
        mr={6}
      />
    </Flex>
  );
}


