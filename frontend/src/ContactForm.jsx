import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Text, Flex } from "@chakra-ui/react";

const ContactForm = ({ onClose, existingContact = {}, updateCallback }) => {
    const [firstName, setFirstName] = useState(existingContact.firstName || "");
    const [lastName, setLastName] = useState(existingContact.lastName || "");
    const [phoneNumber, setPhoneNumber] = useState(existingContact.phoneNumber || "");

    const updating = Object.entries(existingContact).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()
        
        const data = {
            firstName,
            lastName,
            phoneNumber
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    const handleCancel = () => {
        onClose(); // Call onClose function passed from parent component
      };

    return (
        <Box w="90%" mx="auto" mt={5} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <form onSubmit={onSubmit}>
                <Text fontSize='lg' as='b'>{updating ? "You can update the data below:" : "Please fill up the form below:"}</Text>
                <FormControl mt={4} isRequired>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input placeholder="e.g. Lee" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl mt={4} isRequired>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input placeholder="e.g. Hui Xin" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
                <FormControl mt={4} isRequired>
                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                    <Input placeholder="e.g. 012-2213212" type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </FormControl>
                <Flex justifyContent="flex-end" mt={10}>
                    <Button type="submit" colorScheme="green">
                    {updating ? "Update" : "Create"}
                    </Button>
                    <Button colorScheme="gray" onClick={handleCancel} ml={5}>
                        Cancel
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default ContactForm


