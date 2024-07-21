import React, { useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex "
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="20px 0 15px 0"
        borderRadius="20px"
      >
        <Text
          fontFamily={"Work sans"}
          fontSize={"4xl"}
          color={"black"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Chat Sphere
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w="100%"
        m="0px 0 15px 0"
        borderRadius="20px"
        color={"black"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb={"1em"}>
            <Tab color={"black"} width={"50%"}>
              Login
            </Tab>
            <Tab color={"black"} width={"50%"}>
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
