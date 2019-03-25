import React, { Component } from 'react'

import content from './content.json'
const allItems = content.ALL.data.items

const items = allItems.filter(item => item.type === 'Maximum_Article')

export default class Layout extends Component {
  render () {
    return (
      <div>
        <h1>Hello Content</h1>
        {items.map((item, index) => <Blog key={index} item={item} />)}
      </div>
    )
  }
}

const Blog = ({ item }) => (
  <div>
    <strong>{item.name}</strong>: PUT DESCRIPTION HERE
  </div>
)
