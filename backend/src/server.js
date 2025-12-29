import {ApolloServer,gql} from 'apollo-server'
//gql means in
//Apollo server is used to create a GraphQL server
//create a new Apollo Server using the constructor
const Todos=[
    {
        id:"1",
        todo:"Learn GraphQL",
        completed:true
    },
    {
        id:"2",
        todo:"Learn Apollo Server",
        completed:false
        
    },
    {
        id:"3",
        todo:"Build a GraphQL API",
        completed:false
    }
]
const typeDefs = gql`
    type Todo{
         id:ID,
         todo:String,
         completed:Boolean
    }

    type Query{
        getAllTodos:[Todo!]
        }


`
const resolvers={
    Query:{
        getAllTodos:()=>{
            return Todos;
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});
//to make a server in backend we use the express framework
// apollo is like a express server but for GraphQL

//by default it will run on port 4000
server.listen().then(()=>{
    console.log(`GraphQl server is running`)
})
