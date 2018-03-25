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
import { Box, Flex } from 'grid-styled'
import Spinner from '@atlaskit/spinner'

export default () => (
  <Consumer>
    {({ dispatch, ...state }) => (
      <Container>
        {state.formSubmitting ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            style={{ height: '50vh' }}
          >
            <Spinner size="xlarge" />
          </Flex>
        ) : (
          <Form>
            <Flex flexDirection="column">
              <Box my={2}>
                <Input
                  isInvalid={state.amountError}
                  label="Enter Amount: "
                  onChange={event =>
                    dispatch(
                      actionCreators.amountChange(event),
                    )
                  }
                  value={state.amount}
                  type="text"
                />
              </Box>
              <Box my={2}>
                <Select
                  value={state.type}
                  label="Enter Type:"
                  isInvalid={state.typeError}
                  onSelected={event =>
                    dispatch(
                      actionCreators.typeChange(event),
                    )
                  }
                  hasAutocomplete
                  items={[
                    {
                      items: [
                        {
                          content: 'Groceries',
                          value: 'groceries',
                        },
                        {
                          content: 'Fast Food',
                          value: 'fast-food',
                        },
                        {
                          content: 'Home',
                          value: 'home',
                        },
                        {
                          content: 'Health',
                          value: 'health',
                        },
                      ],
                    },
                  ]}
                />
              </Box>
              <Box my={2}>
                <Select
                  value={state.tag}
                  label="Enter Tag:"
                  isInvalid={state.tagError}
                  onSelected={event =>
                    dispatch(
                      actionCreators.tagChange(event),
                    )
                  }
                  hasAutocomplete
                  items={[
                    {
                      items: [
                        {
                          content: 'Debit',
                          value: 'debit',
                        },
                        {
                          content: 'Credit Card',
                          value: 'credit',
                        },
                        {
                          content: 'Cash',
                          value: 'cash',
                        },
                      ],
                    },
                  ]}
                />
              </Box>
              <Box my={2}>
                <Input
                  label="Enter Location:"
                  onChange={event =>
                    dispatch(
                      actionCreators.locationChange(event),
                    )
                  }
                  value={state.location}
                  type="text"
                />
              </Box>
              <Box my={2}>
                <TextArea
                  label="Enter Notes:"
                  id="notes"
                  onChange={event =>
                    dispatch(
                      actionCreators.notesChange(event),
                    )
                  }
                  value={state.notes}
                />
              </Box>
              <Flex justifyContent="flex-end">
                <Box my={2}>
                  <Button
                    type="button"
                    appearance="primary"
                    onClick={handleFormSubmit(
                      dispatch,
                      state,
                    )}
                  >
                    Submit
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Form>
        )}
      </Container>
    )}
  </Consumer>
)
