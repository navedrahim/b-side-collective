const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

  export const AZ = arr => arr.sort(compareKey('album'))
  export const ZA = arr => arr.sort(compareKey('album')).reverse()
  export const AZartist = arr => arr.sort(compareKey('artist'))
  export const ZAartist = arr => arr.sort(compareKey('artist')).reverse()