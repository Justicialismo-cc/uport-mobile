// Copyright (C) 2018 ConsenSys AG
//
// This file is part of uPort Mobile App.
//
// uPort Mobile App is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// uPort Mobile App is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with uPort Mobile App.  If not, see <http://www.gnu.org/licenses/>.
//
import { 
  ADD_VC,
  SET_CONTACT_LIST,
  UPDATE_CONTACT_LIST,
  SET_CONTACT_DETAILS,
  SIGN_VC,
  SHARE_VC
 } from '../constants/VcActionTypes'

const _backup = true

export function addVc (vc) {
  return {
    type: ADD_VC,
    vc,
    _backup
  }
}

export function setContactList (contacts) {
  return {
    type: SET_CONTACT_LIST,
    contacts
  }
}

export function updateContactList () {
  return {
    type: UPDATE_CONTACT_LIST
  }
}

export function setContactDetails (did, claims) {
  return {
    type: SET_CONTACT_DETAILS,
    did,
    claims
  }
}
export function signVc (vc) {
  return {
    type: SIGN_VC,
    vc
  }
}
export function shareVc (vc) {
  return {
    type: SHARE_VC,
    vc
  }
}