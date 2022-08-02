export class Book {
  id
  title
  subjects
  cover
  authors
  lastPublishDate
  languages

  constructor(bookApi) {
    const titleAPI = bookApi.title
      .split('\r\n')
      .map(text => text.trim())
      .filter(text => text)

    this.id = bookApi.key
    this.title = {
      medium: titleAPI[0].length > 20 ? titleAPI[0].substring(0, 20) + '...' : titleAPI[0],
      big: titleAPI.join('. ')
    }
    this.subjects = bookApi.subject || []
    this.cover = bookApi.cover_i
      ? {
          small: `https://covers.openlibrary.org/b/id/${bookApi.cover_i}-S.jpg`,
          medium: `https://covers.openlibrary.org/b/id/${bookApi.cover_i}-M.jpg`,
          big: `https://covers.openlibrary.org/b/id/${bookApi.cover_i}-L.jpg`
        }
      : undefined
    this.authors = bookApi.author_name || []
    this.lastPublishDate = bookApi.publish_date ? bookApi.publish_date[0] : ''
    this.languages = bookApi.language || []
  }
}
