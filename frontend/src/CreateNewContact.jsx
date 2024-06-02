import React, { useEffect, useState } from 'react';
import { Box, Text, Button} from "@chakra-ui/react";
import './App.css';
import CustomHeader from "./customheader.jsx";
import ContactForm from "./ContactForm.jsx";

function CreateNewContact() {
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [contacts, setContacts] = useState([])

//   useEffect(() => {
//     fetchContacts()
//   }, []);

//   const fetchContacts = async () => {
//     const response = await fetch("http://127.0.0.1:5000/contacts");
//     const data = await response.json();
//     setContacts(data.contacts);
//     console.log(data.contacts);
//   };

//   const toggleContactForm = () => {
//     setShowContactForm(!showContactForm);
//   };

  return (
    <>
      <CustomHeader />
      <Text fontSize="2xl" fontWeight="bold" mt={4} ml={5}>
        Create New Contact
      </Text>
      {/* <Box mt={4} ml={4} mr={4}>
        <ContactList contacts = {contacts} />
      </Box> */}
      {/* <Button colorScheme="teal" mt={4} ml={4} onClick={toggleContactForm}>
        Create New Contact
      </Button> */}
      <ContactForm />
    </>
  );
}

export default CreateNewContact;