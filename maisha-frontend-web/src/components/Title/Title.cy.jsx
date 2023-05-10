/* eslint-disable no-undef */
import React from 'react'
import Title from './Title'

describe('<Title />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Title text = "component testing" />)
  })
  it('should have a text', () => {
    cy.mount(<Title text = "component testing" />)
    cy.get('h1').should('have.text', 'component testing')
  })
})
