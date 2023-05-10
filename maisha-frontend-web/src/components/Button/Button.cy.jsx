/* eslint-disable no-undef */
import React from 'react'
import Button from './Button'

describe('<Button  />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button text ="Ingresar" type="submit" />)
  })
  it('should have a text', () => {
    cy.mount(<Button text ="Ingresar" type="submit" />)
    cy.get('button').should('have.text', 'Ingresar')
  })
})
