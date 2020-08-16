import { InputGroup, Button, FormControl } from "react-bootstrap"
import React from "react"

export function SearchBOx({ change, click }) {
  return (
    <div className="searchbar">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Masukan nama kota"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            change(e)
          }}
        />
        <InputGroup.Append>
          <Button onClick={click} variant="outline-secondary">
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
