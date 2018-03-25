import React, { Fragment } from 'react'
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
import { FORM } from '../state/state-enums'

export default () => (
  <Consumer>
    {({ dispatch, ...state }) => (
      <Container>
        {state.formSubmitting === FORM.starting ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            style={{ height: '50vh' }}
          >
            <Spinner size="xlarge" />
          </Flex>
        ) : (
          <Fragment>
            {state.formSubmitting === FORM.done && (
              <div>Successfully Submitted!</div>
            )}
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
                    validationState={
                      state.typeError ? 'error' : null
                    }
                    isInvalid={state.typeError}
                    onChange={event =>
                      dispatch(
                        actionCreators.typeChange(event),
                      )
                    }
                    options={[
                      {
                        label: 'Groceries',
                        value: 'groceries',
                      },
                      {
                        label: 'Fast Food',
                        value: 'fast-food',
                      },
                      {
                        label: 'Home',
                        value: 'home',
                      },
                      {
                        label: 'Health',
                        value: 'health',
                      },
                    ]}
                  />
                </Box>
                <Box my={2}>
                  <Select
                    value={state.tag}
                    label="Enter Tag:"
                    validationState={
                      state.tagError ? 'error' : null
                    }
                    isInvalid={state.tagError}
                    onChange={event =>
                      dispatch(
                        actionCreators.tagChange(event),
                      )
                    }
                    options={[
                      {
                        label: 'Debit',
                        value: 'debit',
                      },
                      {
                        label: 'Credit Card',
                        value: 'credit',
                      },
                      {
                        label: 'Cash',
                        value: 'cash',
                      },
                    ]}
                  />
                </Box>
                <Box my={2}>
                  <Input
                    label="Enter Location:"
                    onChange={event =>
                      dispatch(
                        actionCreators.locationChange(
                          event,
                        ),
                      )
                    }
                    value={state.location}
                    isInvalid={state.locationError}
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
          </Fragment>
        )}
      </Container>
    )}
  </Consumer>
)
