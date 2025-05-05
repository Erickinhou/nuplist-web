import { api } from "@/lib/axios"
import { Response } from "@/types/axios.types"
import { GuestGroupDTO } from "@/types/guest.types"

class GuestService {
  async postGuestList(guestList: GuestGroupDTO[]): Promise<Response<GuestGroupDTO[]>> {
    try {
      console.log("guestList in service -> ", guestList);
      const res = await api.post("/api/v1/process-guest-list", guestList)
      return {
        success: true,
        data: res.data,
      }
    } catch (error: unknown) {
      return {
        success: false,
        data: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }
}

export const guestService = new GuestService()
