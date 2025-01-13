export function extractInitials(name) {
  if (!name) return "" // Return empty string if no name is provided

  const words = name
    .split(" ") // Split the name into words
    .filter((word) => word) // Remove extra spaces

  if (words.length === 1) {
    const firstWord = words[0]
    const firstLetter = firstWord[0].toUpperCase()
    const secondLetter = firstWord[1]?.toUpperCase() || "I" // Use the second letter or "I"
    return firstLetter + secondLetter
  }

  // Return the initials of the first name and first surname
  return (
    words[0][0].toUpperCase() + // First letter of the first name
    words[1][0].toUpperCase() // First letter of the first surname
  )
}
