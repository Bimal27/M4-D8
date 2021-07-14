import { Component } from "react";
import { Dropdown } from 'react-bootstrap'

class CommentsDropdown extends Component {

  state = {
    
  }
  
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="whole-drop">
          See comments
        </Dropdown.Toggle>
        <Dropdown.Menu className="com-container">
          <div>
            <p>Comments section very long</p>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default CommentsDropdown