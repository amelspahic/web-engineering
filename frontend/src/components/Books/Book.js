import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import useCreateBook from "../../utils/hooks/useBookCreate";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "react-bootstrap";
import useAuthors from "../../utils/hooks/useAuthors";
import useUpdateBook from "../../utils/hooks/useBookUpdate";

const Book = ({ isShown = false, handleClose, selectedBook }) => {
  const [{ createLoading }, createBook] = useCreateBook();
  const [{ updateLoading }, updateBook] = useUpdateBook(
    selectedBook && selectedBook._id
  );
  const { handleSubmit, register, errors } = useForm();
  const [{ authors, loading: authorsLoading }, getAuthors] = useAuthors();

  const onSubmit = async (data) => {
    if (selectedBook) {
      await updateBook(data);
    } else {
      await createBook(data);
    }

    handleClose(true);
  };

  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  return (
    <Modal show={isShown} onHide={() => handleClose(false)} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedBook ? "Edit" : "Add"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <FormControl
              defaultValue={selectedBook?.title}
              type="text"
              name="title"
              ref={register({
                validate: (value) =>
                  value?.length > 1 ||
                  "Book title must be at least 2 characters long",
              })}
            />
            <Form.Text className="text-muted">
              {errors.title && errors.title.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <FormControl
              defaultValue={selectedBook?.description}
              name="description"
              as="textarea"
              rows="3"
              ref={register({
                required: true,
                maxLength: {
                  value: 150,
                  message: "Description can be max 150 characters long",
                },
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long",
                },
              })}
            />
            <Form.Text className="text-muted">
              {errors.description && errors.description.message}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formSelectAuthor">
            <Form.Label>Author</Form.Label>
            <FormControl
              name="author"
              as="select"
              ref={register}
              defaultValue={selectedBook?.author?._id}
            >
              {authors &&
                authors.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.firstName} {author.lastName}
                  </option>
                ))}
            </FormControl>
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

export default Book;
