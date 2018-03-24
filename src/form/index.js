import React from 'react'
import Container from '../components/container.js'
import {
  Form,
  Button,
  Input,
  Label,
  TextArea,
  Select,
} from './form.js'
import { Consumer } from '../state/store'
import actionCreators from '../state/app-actions'
import { handleFormSubmit } from '../state/app-thunks'

export default () => (
  <Consumer>
    {({ dispatch, ...state }) => (
      <Container>
        <Form>
          <Input
            label="Enter Amount: "
            onChange={event =>
              dispatch(actionCreators.amountChange(event))
            }
            value={state.amount}
            type="number"
          />
          <Select
            label="Enter Type:"
            options={[
              {
                value: 'groceries',
                label: 'Groceries',
              },
              {
                value: 'fast-food',
                label: 'Fast Food',
              },
            ]}
            onChange={event =>
              dispatch(actionCreators.typeChange(event))
            }
            value={state.type}
          />
          <Input
            label="Enter Location:"
            onChange={event =>
              dispatch(actionCreators.locationChange(event))
            }
            value={state.location}
            type="text"
          />
          <TextArea
            label="Enter Notes:"
            id="notes"
            onChange={event =>
              dispatch(actionCreators.notesChange(event))
            }
            value={state.notes}
          />
          <Button
            type="button"
            onClick={handleFormSubmit(dispatch, state)}
          >
            Submit
          </Button>
        </Form>
      </Container>
    )}
  </Consumer>
)
