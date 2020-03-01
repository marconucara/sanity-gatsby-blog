export default {
  title: 'Test',
  name: 'test',
  type: 'document',
  fields: [
    {
      name: 'test',
      title: 'Tests',
      type: 'array',
      of: [{type: 'post'}, {type: 'author'}]
    }
  ]
}
