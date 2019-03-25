import React, { Component } from 'react'

import content from './content.json'

const allItems = content.ALL.data.items

const items = allItems.filter(item => item.type === 'Maximum_Article')

const fullItem = item => content[item.id].data

const toHref = da =>
  da.fields.renditions
    .filter(r => r.name === 'Large')[0]
    .formats.filter(f => f.format === 'jpg')[0].links[0].href

const fields = [
  'maximum_article_category',
  'maximum_article_content',
  'maximum_article_image_280x210',
  'maximum_article_image_1000x562',
  'maximum_article_date'
]

export default class Layout extends Component {
  render () {
    return (
      <div>
        <h1>Hello Content</h1>
        {items.length == 0 ? <NoItems /> : <List />}
      </div>
    )
  }
}
const NoItems = () => <div>No items to display</div>
const List = () => (
  <div>
    {items.map(fullItem).map((item, index) => (
      <Blog key={index} item={item} />
    ))}
  </div>
)

const Blog = ({ item }) => {
  const { fields } = item
  const {
    maximum_article_category,
    maximum_article_content,
    maximum_article_image_280x210,
    maximum_article_image_1000x562,
    maximum_article_date
  } = fields
  const content = { __html: maximum_article_content } // to be used with dangerouslySetInnerHTML
  const image = toHref(maximum_article_image_280x210)

  return (
    <div>
      <div>
        <strong>{item.name}</strong>: {maximum_article_category}
      </div>
      <div>
        <img src={image} alt={item.name} />
      </div>
      <div dangerouslySetInnerHTML={content} />
    </div>
  )
}
