import React, { useState } from "react";

function Form(props) {
  return (
    <form>
      <input type="text" value={props.firstName} />
      <input type="text" value={props.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
