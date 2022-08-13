import { Education } from "./Education.model"
import { Experience } from "./Experience.model"
import { Language } from "./Language.model"

export type Bio = {
  picture?: string | null
  name?: string | null
  occupation?: string | null
  description?: string
  address?: string
  email?: string
  phone?: string
  birthday?: string
  nationality?: string
  links?: string[]
  experiences?: Experience[],
  education?: Education[],
  languages?: Language[],
  projects?: string[],
  skills?: string[],
  certificates?: string[]
  salary?: string
}
