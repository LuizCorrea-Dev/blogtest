function tempo(request, response) {
  const dynamicDate = new Date()

  response.json({
    date: dynamicDate.toGMTString()
  })
}
// rota: site.com/api/tempo
export default tempo