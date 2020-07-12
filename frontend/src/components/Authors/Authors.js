import React, { useEffect, useState } from "react";
import useAuthors from "../../utils/hooks/useAuthors";
import { Table, Button, Jumbotron, Modal, Spinner } from "react-bootstrap";
import useDeleteAuthor from "../../utils/hooks/useAuthorDelete";
import Author from "./Author";

const Authors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [{ authors, loading: authorsLoading }, getAuthors] = useAuthors();
  const [{ deleteLoading }, deleteAuthor] = useDeleteAuthor(
    selectedAuthor && selectedAuthor._id
  );
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleModal = () => setShowModal(true);

  const hideModal = (fromModal) => {
    setSelectedAuthor(null);
    setShowModal(false);

    if (fromModal) {
      getAuthors();
    }
  };

  const hideDeleteModal = (isDeleted) => {
    setSelectedAuthor(null);
    setShowDeleteModal(false);

    if (isDeleted) {
      getAuthors();
    }
  };

  const handleEdit = (author) => {
    setSelectedAuthor(author);
    setShowModal(true);
  };

  const handleDelete = (author) => {
    setSelectedAuthor(author);
    setShowDeleteModal(true);
  };

  const handleDeleteAuthor = async () => {
    await deleteAuthor();
    hideDeleteModal(true);
  };

  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  return (
    <div>
      <Jumbotron>
        <h1>Authors</h1>
      </Jumbotron>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        {authorsLoading ? (
          <tbody>
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                <Spinner animation="border" />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {authors &&
              authors.map((author) => (
                <tr key={author._id}>
                  <td>{author.firstName}</td>
                  <td>{author.lastName}</td>
                  <td>
                    <span
                      onClick={() => handleEdit(author)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      edit
                    </span>{" "}
                    |{" "}
                    <span
                      onClick={() => handleDelete(author)}
                      style={{ color: "blue", cursor: "pointer" }}
                    >
                      delete
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </Table>
      <Button onClick={handleModal}>Add</Button>

      <Author
        isShown={showModal}
        handleClose={hideModal}
        selectedAuthor={selectedAuthor}
      ></Author>

      <Modal
        animation={false}
        show={showDeleteModal}
        onHide={() => hideDeleteModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete author:{" "}
          <span style={{ fontWeight: "bold" }}>
            {selectedAuthor?.firstName} {selectedAuthor?.lastName}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideDeleteModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteAuthor}>
            {deleteLoading ? (
              <div>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                <span> Loading</span>
              </div>
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Authors;
