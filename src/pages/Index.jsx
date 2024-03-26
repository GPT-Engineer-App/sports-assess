import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaRunning, FaSwimmer, FaBicycle } from "react-icons/fa";

const SportsPerformanceAssessment = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [sport, setSport] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform assessment logic based on input values
    let assessment = "";
    if (sport === "running" && time <= 20) {
      assessment = "Excellent running performance!";
    } else if (sport === "swimming" && time <= 30) {
      assessment = "Great swimming skills!";
    } else if (sport === "cycling" && time <= 25) {
      assessment = "Impressive cycling abilities!";
    } else {
      assessment = "Keep training to improve your performance.";
    }
    setResult(assessment);
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl" mr={4}>
          Sports Performance Assessment
        </Heading>
        <Spacer />
        <Image src="https://images.unsplash.com/photo-1579702493660-c0ec1bd69131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZXxlbnwwfHx8fDE3MTE0MTgxMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sports" w={200} />
      </Flex>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </FormControl>
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </FormControl>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <Input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
          </FormControl>
          <FormControl id="sport">
            <FormLabel>Sport</FormLabel>
            <Flex>
              <Button leftIcon={<FaRunning />} onClick={() => setSport("running")} mr={4}>
                Running
              </Button>
              <Button leftIcon={<FaSwimmer />} onClick={() => setSport("swimming")} mr={4}>
                Swimming
              </Button>
              <Button leftIcon={<FaBicycle />} onClick={() => setSport("cycling")}>
                Cycling
              </Button>
            </Flex>
          </FormControl>
          <FormControl id="time">
            <FormLabel>Time (in minutes)</FormLabel>
            <Input type="number" value={time} onChange={(e) => setTime(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Assess Performance
          </Button>
        </VStack>
      </form>
      {result && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Assessment Result
          </Heading>
          <Text fontSize="xl">{result}</Text>
        </Box>
      )}
    </Box>
  );
};

export default SportsPerformanceAssessment;
