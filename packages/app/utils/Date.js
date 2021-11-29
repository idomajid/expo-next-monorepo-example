const date = new Date()
const formattedDate = date
  .toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  .replace(/ /g, '-')

export { formattedDate }
