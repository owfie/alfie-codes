import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-ap-southeast-2.hygraph.com/v2/cl5kktycj30fp01ujh3yda1pa/master',
  cache: new InMemoryCache()
})

export default client