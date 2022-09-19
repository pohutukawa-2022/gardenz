export function getDate(createDate) {
  const dateParts = createDate.split('/')
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0])
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const getYear = dateObject.getFullYear()
  const getMonth = monthNames[dateObject.getMonth()]
  const getDay = dateObject.getDate()
  const postDate = getMonth + ' ' + getDay + ',' + getYear

  return postDate
  
}
