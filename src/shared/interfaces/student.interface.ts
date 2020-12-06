export interface Student {
  firstName: string,
  lastName: string,
  address: {
    streetAddress: string,
    city: string,
    state: string,
    zipCode: number
  },
  phoneNumber: number,
  GPA: number
}
