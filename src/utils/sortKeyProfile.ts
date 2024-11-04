import { profileDictionary } from '@/constants/profileDictionary'
import { Profile } from '@/interfaces/I_Profile'

export function sortKeyProfile( profile: Profile ) {
  return {
    [ profileDictionary.name ]: `${ profile.firstname } ${ profile.lastname }`,
    [ profileDictionary.dni ]: profile.dni,
    [ profileDictionary.phone ]: profile.phone,
  }
}
