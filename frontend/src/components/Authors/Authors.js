import React, { useEffect } from "react";
import useAuthors from "../../utils/hooks/useAuthors";
import { Table, Button, Jumbotron } from "react-bootstrap";

const Authors = () => {
  const [{ authors, loading: authorsLoading }, getAuthors] = useAuthors();

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
          </tr>
        </thead>
        <tbody>
          {authors &&
            authors.map((author) => (
              <tr key={author._id}>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button>Add</Button>
    </div>
  );
};

export default Authors;
