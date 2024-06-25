import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the SOP Writing Tool</Text>
        <Text>Get started by clicking the button below.</Text>
        <Button colorScheme="teal" onClick={() => navigate('/sop-tool')}>Start Writing Your SOP</Button>
      </VStack>
    </Container>
  );
};

export default Index;