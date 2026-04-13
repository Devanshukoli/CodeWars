/*
Given a full name as a string, return their initials.

Names to initialize are separated by a space.
Initials should be made uppercase.
Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".

*/



function getInitials(name) {
  const splitName = name.split(' ')

  const initials = splitName.map( part => part[0].toUpperCase() + '.')

  return initials.join('')
}



console.log(nameInitials('Devanshu Koli'))