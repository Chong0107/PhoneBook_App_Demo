import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from "@chakra-ui/react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
        const options = {
            method: "DELETE"
        }
        const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
        if (response.status === 200) {
            updateCallback()
        } else {
            console.error("Failed to delete")
        }
    } catch (error) {
        alert(error)
    }
}
    return <TableContainer>
        <Table variant="simple" colorScheme="teal" size="md"  borderWidth="4px" borderColor="gray.200">
            <Thead>
              <Tr>
                <Th  borderWidth="2px" borderColor="gray.200">First Name</Th>
                <Th  borderWidth="2px" borderColor="gray.200">Last Name</Th>
                <Th  borderWidth="2px" borderColor="gray.200">Phone number</Th>
                <Th  borderWidth="2px" borderColor="gray.200">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contacts.map((contact) => (
              <Tr key={contact.id}>
                <Td  borderWidth="2px" borderColor="gray.200">{contact.firstName}</Td>
                <Td  borderWidth="2px" borderColor="gray.200">{contact.lastName}</Td>
                <Td  borderWidth="2px" borderColor="gray.200">{contact.phoneNumber}</Td>
                <Td  borderWidth="2px" borderColor="gray.200">
                  <Button colorScheme="blue" size="sm" mr={2} onClick={() => updateContact(contact)}>Update</Button>
                  <Button colorScheme="red" size="sm"  onClick={() => onDelete(contact.id)}>Delete</Button>
                </Td>
              </Tr>
              ))}
            </Tbody>
        </Table>
    </TableContainer>
}

export default ContactList