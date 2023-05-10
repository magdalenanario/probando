/* eslint-disable no-undef */
import React from 'react'
import Input from './Input'

describe('<Input />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Input type = "text" />)
  })
  it('should have type', () => {
    cy.mount(<Input type = "text" />)
    cy.get('input').should('have.attr', 'type', 'text')
  })
})
