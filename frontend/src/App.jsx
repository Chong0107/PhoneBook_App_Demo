import React, { useEffect, useState } from 'react';
import { Box, Text, Button} from "@chakra-ui/react";
import './App.css';
import CustomHeader from "./customheader.jsx";
import ContactList from "./ContactList.jsx";
import ContactForm from "./ContactForm.jsx";

function App() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentContact, setCurrentContact] = useState({})

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentContact({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (contact) => {
    if (isModalOpen) return
    setCurrentContact(contact)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchContacts()
  }

  return (
    <>
      <CustomHeader />
      <Text fontSize="2xl" fontWeight="bold" mt={4} ml={4}>
        Contacts List
      </Text>
      <Box mt={4} ml={4} mr={4}>
        <ContactList contacts = {contacts} updateContact={openEditModal} updateCallback={onUpdate} />
      </Box>
      <Button colorScheme="teal" mt={4} ml={4} onClick={openCreateModal}>
        Create New Contact
      </Button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <ContactForm onClose={closeModal} existingContact={currentContact} updateCallback={onUpdate} />
        </div>
      </div>}
       
    </>
  );
}

export default App;
