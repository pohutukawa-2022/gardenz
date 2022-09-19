export function getDate() {
  const today = new Date()
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
  const getYear = today.getFullYear()
  const getMonth = monthNames[today.getMonth()]
  const getDay = today.getDate()
  const createDate = getMonth + ' ' + getDay + ',' + getYear

  return createDate
}
