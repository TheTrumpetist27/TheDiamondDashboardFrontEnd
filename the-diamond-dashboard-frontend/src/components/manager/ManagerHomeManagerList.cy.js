import React from 'react'
import ManagerList from './ManagerHome'

describe('<ManagerList />', () => {
  beforeEach(() => {
    cy.fixture('managers.json').as('managerData')
  })

  it('renders', function() {
    cy.mount(<ManagerList />, 
    // {
    //   propsData: { 'managers': this.managerData }
    // }
    )
  })
})