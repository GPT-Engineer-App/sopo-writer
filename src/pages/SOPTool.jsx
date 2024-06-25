import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Text } from '@chakra-ui/react';

const questions = [
  "What is your name?",
  "What is your intended field of study?",
  "Why are you interested in this field?",
  "What are your career goals?",
  "Why do you want to attend this particular college?",
  "What relevant experiences or skills do you have?",
  "What are your academic achievements?",
  "What personal qualities make you a good candidate?",
  "What challenges have you overcome?",
  "Is there anything else you would like to add?"
];

const SOPTool = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowSummary(true);
  };

  return (
    <Container maxW="container.md" py={10}>
      {!showSummary ? (
        <VStack spacing={4}>
          {questions.map((question, index) => (
            <FormControl key={index}>
              <FormLabel>{question}</FormLabel>
              {index === questions.length - 1 ? (
                <Textarea value={answers[index]} onChange={(e) => handleChange(index, e.target.value)} />
              ) : (
                <Input value={answers[index]} onChange={(e) => handleChange(index, e.target.value)} />
              )}
            </FormControl>
          ))}
          <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
        </VStack>
      ) : (
        <Box>
          <Text fontSize="2xl" mb={4}>Summary of Your Answers</Text>
          {questions.map((question, index) => (
            <Box key={index} mb={4}>
              <Text fontWeight="bold">{question}</Text>
              <Text>{answers[index]}</Text>
            </Box>
          ))}
          <Button colorScheme="teal" onClick={() => setShowSummary(false)}>Edit Answers</Button>
        </Box>
      )}
    </Container>
  );
};

export default SOPTool;