export class ApiService {
  BASE_URL = 'http://localhost:3000'

  async getReviewers() {
    const response = await fetch(this.BASE_URL + '/reviewers/')

    return await response.json()
  }

  async getReviewer(id) {
    const response = await fetch(this.BASE_URL + '/reviewers/' + id)
    return await response.json()
  }
}