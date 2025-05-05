import { guestService } from "@/service/guest/guest.service"
import { GuestGroupDTO } from "@/types/guest.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export function usePostGuestList() {
  const queryClient = useQueryClient()

  const { data, status, mutate, mutateAsync } = useMutation({
    mutationKey: [`post-guest-list`],
    mutationFn: (guestList: GuestGroupDTO[]) =>
      guestService.postGuestList(guestList),
    onMutate: async (guestListPayload) => {
      await queryClient.cancelQueries({ queryKey: ["guest-list"] })

      // Snapshot the previous value
      const previousGuestList = queryClient.getQueryData(["guest-list"])

      // Optimistically update to the new value
      queryClient.setQueryData(["guest-list"], (old: GuestGroupDTO[] | undefined) => {
        if (!old) return [guestListPayload];
        return [...old, guestListPayload];
      })

      // Return a context object with the snapshotted value
      return { previousGuestList }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newGuestList, context) => {
      queryClient.setQueryData(["guest-list"], context?.previousGuestList)
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["guest-list"] })
    },
  })

  return { data, mutate, mutateAsync, status }
}