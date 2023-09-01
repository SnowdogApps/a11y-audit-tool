export interface ErrorItem {
  code: string
  message: string
}

export interface ErrorResponse {
  statusCode: number
  message: string
  errors?: ErrorItem[]
}
