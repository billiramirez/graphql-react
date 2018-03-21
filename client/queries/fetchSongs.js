//fetch all the songs
import gql from 'graphql-tag';  

export default gql`
    {
        songs{
            id
            title
        }
    }
`;