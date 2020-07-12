import React from "react";
import { Modal, Button } from "react-bootstrap";
import useCreateAuthor from "../../utils/hooks/useAuthorCreate";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "react-bootstrap";
import useUpdateAuthor from "../../utils/hooks/useAuthorUpdate";

const Author = ({ isShown = false, handleClose, selectedAuthor }) => {
  const [, createAuthor] = useCreateAuthor();
  const [, updateAuthor] = useUpdateAuthor(
    selectedAuthor && selectedAuthor._id
  );
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (data) => {
    if (selectedAuthor) {
      await updateAuthor(data);
    } else {
      await createAuthor(data);
    }

    handleClose(true);
  };

  return (
    <Modal show={isShown} onHide={() => handleClose(false)} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedAuthor ? "Edit" : "Add"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <Form.Group controlId="formTitle">
            <Form.Label>First Name</Form.Label>
            <FormControl
              defaultValue={selectedAuthor?.firstName}
              type="text"
              name="firstName"
              ref={register({
                required: { value: true, message: "First name is required" },
                maxLength: {
                  value: 150,
                  message: "First name can be maximum 150 characters long",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.firstName && errors.firstName.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Last Name</Form.Label>
            <FormControl
              defaultValue={selectedAuthor?.lastName}
              name="lastName"
              type="text"
              ref={register({
                required: { value: true, message: "Last name is required" },
                maxLength: {
                  value: 150,
                  message: "Last name can be maximum 150 characters long",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.lastName && errors.lastName.message}
            </Form.Text>
          </Form.Group>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Author;
