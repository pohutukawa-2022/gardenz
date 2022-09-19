import requestor from '../../../../consume'
import { dispatch } from '../../../../store'
import { setWaiting, clearWaiting } from '../../../../slices/waiting'
import { showError } from '../../../../slices/error'

export async function getEvent(id, user, consume = requestor) {
  dispatch(setWaiting())
  try {
    await consume(`/events/${id}`)
    ;async (res) => {
      dispatch(clearWaiting())
      const {
        id,
        date,
        title,
        gardenId,
        gardenName,
        gardenAddress,
        volunteersNeeded,
        volunteers,
        extraVolunteers,
        description,
        lat,
        lon,
        status,
      } = res.body
      const result = {
        id,
        date,
        title,
        gardenId,
        gardenName,
        gardenAddress,
        volunteersNeeded,
        description,
        lat,
        lon,
        status,
      }
      return (await user.isAdmin)
        ? {
            ...result,
            volunteers,
            extraVolunteers,
          }
        : {
            ...result,
            isVolunteer: volunteers.some((v) => v.userId === user.id),
          }
    }
  } catch (error) {
    dispatch(showError(error.message))
  }
}
