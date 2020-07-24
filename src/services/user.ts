import { get } from 'helpers/axios';
import { AxiosPromise } from 'axios'

export const getUsers = (query?: string): AxiosPromise =>
  get(`search/users?q=${query}&page=1&per_page=5`).then(data => data.items)

export const getRepositories = (users: any): Promise<any> =>
  Promise.all(users.map((user: any) => get(user.repos_url)))
    .then(repos =>
      users.map((user: any, index: number) => ({
        [user.login]: repos[index]
      }))
    )

