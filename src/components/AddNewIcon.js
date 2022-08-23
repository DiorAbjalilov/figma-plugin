import React from "react";
import { Form, Button } from "react-bootstrap";

const AddNewIcon = () => {
  return (
    <div className="addNew">
      <div className="addNewIcon">
        <div>
          <Form.Control type="text" placeholder="Enter new folder name" />
          <Button>Create Folder</Button>
        </div>
        <div>
          <Form.Control type="text" placeholder="Enter new folder name" />
          <Button>Create Folder</Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewIcon;
