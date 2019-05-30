function getDateRange(description) {
  const d = new Date();
  const v = description;
  switch (true) {
    case v === 'Past 7 Days':
      return [getDateString(d), getPastDate(d, 7)]
    case v === 'Past 30 Days':
      return [getDateString(d), getPastDate(d, 30)]
    case v === 'YTD':
      return [getDateString(d), getPastDate(d, getYTD(d))]
    case v === 'Past Year':
      return [getDateString(d), getPastDate(d, 365)]
    case v === 'All Time':
      return [getDateString(d), '2010-07-17']    
    default:
      console.log('something went wrong!')
      break;
  }

  function getYTD(date) {
    const current = new Date(date.getTime());
    const previous = new Date(date.getFullYear(), 0, 1);

    return Math.floor((current - previous) / 86400000);
  }

  function getPastDate(date, numDays = 7) {
    date.setDate(date.getDate() - numDays);
    return getDateString(date);
  }

  function getDateString(date) {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
        .toISOString()
        .replace(/[T](\S*)$/, '');
  }
}

export default getDateRange;