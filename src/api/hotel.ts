import { HotelSearchResponse, HotelType, SearchParams } from '../shared/types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export const addMyHotel = async (hotelFormData: FormData): Promise<HotelType> => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/hotels`, {
            method: 'POST',
            credentials: 'include',
            body: hotelFormData,
        });

        if (!response.ok) {
            throw new Error('Failed to add hotel');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to add hotel: ${error.message}`);
        }
        throw new Error('Failed to add hotel');
    }
};

export const deleteHotel = async (hotelId: string) => {
    const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete hotel');
    }
  
    return response.json();
  };

export const fetchHotels = async (): Promise<HotelType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/hotels`)
    if (!response.ok) {
        throw new Error('Error fetching hotel')
    }
    return response.json()
}

export const fetchMyHotels = async (): Promise<HotelType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/hotels`, {
        credentials: 'include',
    })

    if (!response.ok) {
        throw new Error('Error fetching hotels')
    }
    return response.json()
}

export const updateMyHotelById = async (hotelFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelFormData.get('hotelId')}`, {
        method: 'PUT',
        body: hotelFormData,
        credentials: 'include',
    })

    if (!response.ok) {
        throw new Error('Failed to update Hotel')
    }
    return response.json()
}

export const searchHotel = async (searchParams: SearchParams): Promise<HotelSearchResponse> => {
    const queryParams = new URLSearchParams()
    queryParams.append('destination', searchParams.destination || '')
    queryParams.append('checkIn', searchParams.checkIn || '')
    queryParams.append('checkOut', searchParams.checkOut || '')
    queryParams.append('adultCount', searchParams.adultCount || '')
    queryParams.append('childCount', searchParams.childCount || '')
    queryParams.append('page', searchParams.page || '')
    queryParams.append('maxPrice', searchParams.maxPrice || '')
    queryParams.append('sortOption', searchParams.sortOption || '')
    searchParams.facilities?.forEach((facility) => queryParams.append('facilities', facility))
    searchParams.types?.forEach((type) => queryParams.append('types', type))
    searchParams.stars?.forEach((star) => queryParams.append('stars', star))
    const response = await fetch(`${API_BASE_URL}/api/hotels/search?${queryParams}`)

    if (!response.ok) throw new Error('Error fetching hotels')
    return response.json()
}

export const fetchHotelById = async (hotelId: string): Promise<HotelType> => {
    const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelId}`)
    if (!response.ok) {
        throw new Error('Error fetching Hotels')
    }
    return response.json()
}

export const fetchMyBookings = async (): Promise<HotelType[]> => {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
        credentials: 'include',
    })
    if (!response.ok) {
        throw new Error('Unable to fetch bookings')
    }
    return response.json()
}

