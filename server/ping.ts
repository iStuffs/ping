export default defineEventHandler((event) => {
  const isPingRequest = getHeader(event, 'X-Ping') === 'true'
  
  if (isPingRequest) {
    return {
      message: "bite bite"
    }
  }
  
  throw createError({
    statusCode: 400,
    message: 'Requête invalide. Ajoutez le header X-Ping: true'
  })
}) 