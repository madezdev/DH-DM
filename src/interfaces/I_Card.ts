export interface Card {
  id: number
  account_id: number
  number_id: number
  first_last_name: string
  cod: number
  expiration_date: string
}

export interface PostCard {
  cod: number
  expiration_date: string
  first_last_name: string
  number_id: number
}