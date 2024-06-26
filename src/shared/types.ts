export type UserType = {
    _id: string
    email: string
    phone: string
    password: string
    firstName: string
    lastName: string
    role: string
}

export type HotelType = {
    _id: string
    userId: string
    name: string
    city: string
    country: string
    description: string
    categories: string
    status: string
    type: string
    adultCount: number
    childCount: number
    facilities: string
    pricePerNight: number
    starRating: number
    imageUrls: string[]
    lastUpdate: Date
}

export type CategoryType = {
    _id: string
    name: string
}

export type HotelSearchResponse = {
    data: HotelType[]
    pagination: {
        total: number
        page: number
        pages: number
    }
}

export type SearchParams = {
    destination?: string
    checkIn?: string
    checkOut?: string
    adultCount?: string
    childCount?: string
    page?: string
    facilities?: string[]
    types?: string[]
    stars?: string[]
    maxPrice?: string
    sortOption?: string
}

export type GuestInfoFormData = {
    checkIn: Date
    checkOut: Date
    adultCount: number
    childCount: number
}
